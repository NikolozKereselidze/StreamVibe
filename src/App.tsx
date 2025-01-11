import { ReactNode } from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Search from "./components/Search/Search";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="home" element={<Home />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

function Layout({ children }: { children: ReactNode }) {
  const location = useLocation();

  const showSearch = !["/", "/home"].includes(location.pathname);

  return (
    <>
      {showSearch && <Search />}
      {children}
    </>
  );
}

export default App;
