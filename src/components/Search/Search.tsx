import { useEffect, useState } from "react";
import { searchAll } from "../../api/tmdbApi";
import { SearchResult } from "../../types/search";
import logoIcon from "../../assets/logo/logo-icon.svg";
import logoName from "../../assets/logo/logo-name.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { MagnifyingGlassIcon, BellIcon } from "@heroicons/react/24/outline";
import styles from "../../styles/Nav.module.css";
import SearchInput from "./SearchInput";
import SearchResults from "../Result/SearchResults";

interface SearchProps {
  isHome?: boolean;
}

const Search: React.FC<SearchProps> = ({ isHome = false }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [focusInput, setFocusInput] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const urlQuery = params.get("q") || "";
    setQuery(urlQuery);

    if (urlQuery) {
      searchAll(urlQuery)
        .then((res) => setResults(res))
        .catch((err) => setError(err.message));
    } else {
      setResults([]);
    }
  }, [location.search]);

  const handleSearch = () => {
    if (query.trim() === "") {
      setResults([]);
      setError("Search query cannot be empty.");
      return;
    }

    setError(null);

    // Always update the URL with the new query
    const newUrl = `/search?q=${encodeURIComponent(query)}`;
    if (location.search !== `?q=${encodeURIComponent(query)}`) {
      navigate(newUrl);
    } else {
      // Manually trigger the search if the URL is the same
      searchAll(query)
        .then((res) => setResults(res))
        .catch((err) => setError(err.message));
    }
  };

  const searchToggle = () => {
    setShowSearch((prev) => !prev);
    setQuery("");
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
      <div className={`${styles.wrapper} ${isHome && styles.homeNav}`}>
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
                to="/media"
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
      <div>{results.length > 0 && <SearchResults results={results} />}</div>
    </>
  );
};

export default Search;
