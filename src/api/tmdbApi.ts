import { SearchResult } from "../types/search";

const BASE_URL = "https://api.themoviedb.org/3";
const BEARER_TOKEN = import.meta.env.VITE_TMDB_BEARER_TOKEN;

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${BEARER_TOKEN}`,
  },
};

/**
 * Search movies by query
 * @param query - Search term (e.g., "Interstellar")
 * @returns Promise of an array of movies, series, persons
 */

export const searchAll = (query: string): Promise<SearchResult[]> => {
  const url = `${BASE_URL}/search/multi?query=${query}&include_adult=false&language=en-US&page=1`;
  return fetch(url, options)
    .then((response) => {
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      if (data.results.length === 0) {
        throw new Error("Not Found");
      }
      return data.results;
    });
};
