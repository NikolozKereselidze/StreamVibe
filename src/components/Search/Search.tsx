import { useState, useEffect } from "react";
import { searchAll } from "../../api/tmdbApi";
import { SearchResult } from "../../types/search";
import logoIcon from "../../assets/logo/logo-icon.svg";
import logoName from "../../assets/logo/logo-name.svg";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import {
  MagnifyingGlassIcon,
  BellIcon,
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import styles from "../../styles/Nav.module.css";
import SearchInput from "./SearchInput";
import SearchResults from "../Result/SearchResults";
import useIsMobile from "../../hooks/useIsMobile";

const Search: React.FC = () => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<SearchResult[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState<boolean>(false);
  const [focusInput, setFocusInput] = useState<boolean>(false);
  const [activeMobileNav, setActiveMobileNav] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);

  const navigate = useNavigate();
  const location = useLocation();

  const isMobile = useIsMobile(); // Using the custom hook

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

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
    setShowSearch(false);

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

  const mobileNavHandler = () => {
    setActiveMobileNav((prev) => !prev);
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
      <div
        className={`${styles.wrapper}  ${
          activeMobileNav && styles.mobileWrap
        } ${scrolled && styles.scrolled}`}
      >
        <div
          className={`${styles.logo} ${activeMobileNav && styles.mobileLogo}`}
        >
          <img src={logoIcon} />
          {!isMobile && <img src={logoName} />}
        </div>

        {(!isMobile || activeMobileNav) && (
          <nav
            className={`${styles.navigation} ${isMobile && styles.mobileNav}`}
          >
            <ul className={`${activeMobileNav && styles.mobileUl}`}>
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
        )}

        <div
          className={`${styles.icons} ${isMobile && styles.mobileIcons} ${
            activeMobileNav && styles.activeMobileIcons
          }`}
        >
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
          {!isMobile ? (
            <>
              {!showSearch && <MagnifyingGlassIcon onClick={searchToggle} />}
              <BellIcon />
            </>
          ) : (
            <>
              {!showSearch && (
                <MagnifyingGlassIcon
                  onClick={searchToggle}
                  className={styles.icon}
                />
              )}
              <BellIcon className={styles.icon} />

              {!activeMobileNav ? (
                <Bars3Icon
                  onClick={mobileNavHandler}
                  className={`${styles.icon} ${
                    activeMobileNav ? styles.mobileIcon : ""
                  }`}
                />
              ) : (
                <XMarkIcon
                  onClick={mobileNavHandler}
                  className={`${styles.icon} ${styles.closeIcon}`}
                />
              )}
            </>
          )}
        </div>
      </div>
      <div>{results.length > 0 && <SearchResults results={results} />}</div>
    </>
  );
};

export default Search;
