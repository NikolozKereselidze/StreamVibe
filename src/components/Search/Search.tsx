import { useState } from "react";
import { searchAll } from "../../api/tmdbApi";
import { SearchResult } from "../../types/search";
import logoIcon from "../../assets/logo/logo-icon.svg";
import logoName from "../../assets/logo/logo-name.svg";
import { NavLink } from "react-router-dom";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";
import styles from "../../styles/Nav.module.css";
import SearchInput from "./SearchInput";
import SearchResults from "../Result/SearchResults";

const Search = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [focusInput, setFocusInput] = useState<boolean>(false);

  const handleSearch = () => {
    setError(null);
    searchAll(query)
      .then((res) => setResults(res))
      .catch((err) => setError(err.message));
  };

  const searchToggle = () => {
    setShowSearch((prev) => !prev);
  };

  const handleFocus = () => {
    setFocusInput(true);
  };

  const handleBlur = () => {
    setFocusInput(false);
    setShowSearch(false);
    setQuery("");
  };

  return (
    <>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <img src={logoIcon} />
          <img src={logoName} />
        </div>

        <nav className={styles.navigation}>
          <ul>
            <li>
              <NavLink
                to="/home"
                className={({ isActive }) =>
                  `${styles.nav} ${isActive ? styles.active : ""}`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/movies"
                className={({ isActive }) =>
                  `${styles.nav} ${isActive ? styles.active : ""}`
                }
              >
                Movies & Shows
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  `${styles.nav} ${isActive ? styles.active : ""}`
                }
              >
                Support
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/subscriptions"
                className={({ isActive }) =>
                  `${styles.nav} ${isActive ? styles.active : ""}`
                }
              >
                Subscriptions
              </NavLink>
            </li>
          </ul>
        </nav>

        <div className={styles.icons}>
          {showSearch && (
            <SearchInput
              query={query}
              setQuery={setQuery}
              handleSearch={handleSearch}
              onFocus={handleFocus}
              onBlur={handleBlur}
              error={error}
              focusInput={focusInput}
            />
          )}
          {!showSearch && <MagnifyingGlassIcon onClick={searchToggle} />}
          <BellIcon />
        </div>
      </div>
      <SearchResults results={results} />
    </>
  );
};

export default Search;
