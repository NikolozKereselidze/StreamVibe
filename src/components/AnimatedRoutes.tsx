import { lazy, useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

const Home = lazy(() => import("../pages/Home"));
const Search = lazy(() => import("../components/Search/Search"));
const Result = lazy(() => import("../pages/Result"));
const Support = lazy(() => import("../pages/Support"));
const Subscriptions = lazy(() => import("../pages/Subscriptions"));
const Media = lazy(() => import("../pages/Media"));

export function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/home"
          element={
            <PageWrapper>
              <Home />
            </PageWrapper>
          }
        />
        <Route
          path="/search"
          element={
            <PageWrapper>
              <Search />
            </PageWrapper>
          }
        />
        <Route
          path="/result"
          element={
            <PageWrapper>
              <Result />
            </PageWrapper>
          }
        />
        <Route
          path="/media"
          element={
            <PageWrapper>
              <Media />
            </PageWrapper>
          }
        />
        <Route
          path="/support"
          element={
            <PageWrapper>
              <Support />
            </PageWrapper>
          }
        />
        <Route
          path="/subscriptions"
          element={
            <PageWrapper>
              <Subscriptions />
            </PageWrapper>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function PageWrapper({ children }: { children: React.ReactNode }) {
  const [showRoutes, setShowRoutes] = useState(false);

  useEffect(() => {
    // Add a delay before showing AnimatedRoutes
    const timer = setTimeout(() => setShowRoutes(true), 500);
    return () => clearTimeout(timer); // Cleanup the timer on unmount
  }, []);
  return showRoutes ? (
    <motion.div
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: -50, scale: 0.95 }}
      transition={{
        duration: 0.5,
        ease: [0.42, 0, 0.58, 1], // Custom easing for a smooth animation
      }}
    >
      {children}
    </motion.div>
  ) : (
    <span className="loader"></span>
  );
}
