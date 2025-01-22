import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState, useEffect, useCallback } from "react";
import styles from "../../styles/MultipleCards.module.css";
import MovieCard from "./MovieCad";
import { useNavigate } from "react-router-dom";
import { SearchResult } from "../../types/search";
import { AnimatePresence, motion } from "framer-motion";
import MotionWrapper from "../MotionWrapper";

const fadeIn = {
  hidden: { opacity: 0, x: 50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
    },
  },
};

const motionProps = {
  initial: "hidden",
  animate: "visible",
  exit: "exit",
  variants: fadeIn,
  viewport: { once: true },
};

interface MultipleCardsProps {
  defaultShowOnPage: number; // Default number of items to show per page
  results: SearchResult[];
  title: string;
  id?: string;
}

const MultipleCards = ({
  defaultShowOnPage,
  results,
  title,
  id,
}: MultipleCardsProps) => {
  const [showOnPage, setShowOnPage] = useState(defaultShowOnPage);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();

  // Determine if the view is mobile

  const updateShowOnPage = useCallback(() => {
    if (window.innerWidth <= 480) {
      setShowOnPage(2); // Show 2 items for small screens
    } else if (window.innerWidth <= 1024) {
      setShowOnPage(3); // Show 3 items for medium screens
    } else if (window.innerWidth <= 1274) {
      setShowOnPage(4); // Default for larger screens
    } else {
      setShowOnPage(defaultShowOnPage); // Default for larger screens
    }
  }, [defaultShowOnPage]);

  useEffect(() => {
    updateShowOnPage(); // Update on mount
    window.addEventListener("resize", updateShowOnPage); // Update on window resize

    return () => {
      window.removeEventListener("resize", updateShowOnPage); // Cleanup listener
    };
  }, [updateShowOnPage]);

  const totalPages = Math.ceil(results.length / showOnPage);
  const startIndex = (currentPage - 1) * showOnPage;
  const currentShowing = results.slice(startIndex, startIndex + showOnPage);

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const clickHandler = (item: SearchResult) => {
    setCurrentPage(1);
    const newUrl = `/result?q=${encodeURIComponent(item.id)}`;
    if (location.search !== `?q=${encodeURIComponent(item.id)}`) {
      navigate(newUrl, { state: { item } });
    }
  };

  return (
    <>
      <MotionWrapper type="scaleUp">
        <div className={styles.wrap} id={id}>
          <div className={styles.title}>
            <h2>{title}</h2>
            <div className={styles.navIcons}>
              <button onClick={handlePreviousPage} disabled={currentPage === 1}>
                <ArrowLeftIcon />
              </button>
              <span className={styles.pageIndicator}>
                {Array.from({ length: totalPages }).map((_, index) => (
                  <span
                    key={index}
                    className={
                      index + 1 === currentPage ? styles.activePage : ""
                    }
                  ></span>
                ))}
              </span>
              <button
                onClick={handleNextPage}
                disabled={currentPage === totalPages}
              >
                <ArrowRightIcon />
              </button>
            </div>
          </div>
          <AnimatePresence>
            <div className={styles.cardWrapper}>
              {currentShowing.map((result, i) => (
                <motion.div
                  {...motionProps}
                  key={`${result.id}-${i}`}
                  className={styles.card}
                  onClick={() => clickHandler(result)}
                  whileHover={{
                    scale: 1.05,
                    transition: { duration: 0.3 },
                  }}
                >
                  <MovieCard key={result.id} item={result} />
                </motion.div>
              ))}
            </div>
          </AnimatePresence>
        </div>
      </MotionWrapper>
    </>
  );
};

export default MultipleCards;
