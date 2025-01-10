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
}
