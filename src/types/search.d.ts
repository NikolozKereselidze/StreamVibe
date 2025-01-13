export type MediaType = "movie" | "tv" | "person";

export interface SearchResult {
  id: number;
  media_type: MediaType;
  title?: string; // Movies and TV shows
  name?: string; // People
  overview?: string; // Movies and TV shows
  poster_path?: string;
  backdrop_path?: string;
  release_date?: string; // Movies
  first_air_date?: string; // TV shows
  vote_average?: number; // Movies and TV shows
  known_for_department?: strinng; // Person
  profile_path?: string; // Person
  runtime?: number; // Movie runtime in minutes
  genres?: string[]; // Genres as an array of names
  releaseYear?: string; // Extracted year from release_date
  ageRating?: string; // Simplified age rating
  seasons?: number; // Tv show seasons
  gender?: number; // Person gender
  known_for?: {
    original_title: string;
  }[];
  original_language?: string; // Release language
}
