import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import styles from "../styles/Nav.module.css";

interface SearchInputProps {
  query: string;
  setQuery: (query: string) => void;
  handleSearch: () => void;
  onFocus: () => void;
  onBlur: () => void;
  error: string | null;
  focusInput: boolean;
}

const SearchInput: React.FC<SearchInputProps> = ({
  query,
  setQuery,
  handleSearch,
  onFocus,
  onBlur,
  error,
  focusInput,
}) => {
  return (
    <div
      className={`
        ${styles.searchBar}
        ${focusInput ? styles.inputOnFocus : styles.inputOnBlur}
            `}
    >
      <MagnifyingGlassIcon />
      <input
        autoFocus
        type="text"
        placeholder="Titles, People"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
        onFocus={onFocus}
        onBlur={onBlur}
      />
      {error && <p>{error}</p>}
    </div>
  );
};

export default SearchInput;
