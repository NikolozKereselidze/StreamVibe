import { ArrowLeftIcon, ArrowRightIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import styles from "../../styles/MultipleCards.module.css";
import MovieCard from "./MovieCad";
import { useNavigate } from "react-router-dom";
import { SearchResult } from "../../types/search";
import { AnimatePresence, motion } from "framer-motion";

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
  initial: "hidden", // Set the initial state (hidden)
  animate: "visible", // Animate to the visible state
  exit: "exit", // Apply exit animation
  variants: fadeIn,
  viewport: { once: true },
};

interface MultipleCardsProps {
  showOnPage: number;
  results: SearchResult[];
  title: string;
}

const MultipleCards = ({ showOnPage, results, title }: MultipleCardsProps) => {
  const ITEMS_PER_PAGE = showOnPage; // Number of movies to display per page
  const [currentPage, setCurrentPage] = useState(1); // Tracks the current page
  const totalPages = Math.ceil(results.length / ITEMS_PER_PAGE); // Total pages
  const navigate = useNavigate();

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

  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentShowing = results.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <>
      <div className={styles.wrap}>
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
                  className={index + 1 === currentPage ? styles.activePage : ""}
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
        <div className={styles.cardWrapper}>
          {currentShowing.map((result, i) => (
            <AnimatePresence>
              <motion.div
                {...motionProps}
                key={`${i} - ${currentPage}`}
                className={styles.card}
                onClick={() => clickHandler(result)}
              >
                <MovieCard key={result.id} item={result} />
              </motion.div>
            </AnimatePresence>
          ))}
        </div>
      </div>
    </>
  );
};

export default MultipleCards;
