import React, { useState } from "react";
import {
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE
} from "../config";

import Grid from "./elements/Grid";
import HeroImage from "./elements/HeroImage";
import LoadMoreBtn from "./elements/LoadMoreBtn";
import MovieThumb from "./elements/MovieThumb";
import SearchBar from "./elements/SearchBar";
import Spinner from "./elements/Spinner";

// Custom Hook

import { useHomeFetch } from "./hooks/useHomeFetch";

import NoImage from "./images/no_image.jpg";

const Home = () => {
  const [{ state, loading, error }, fetchMovies] = useHomeFetch();
  const [searchTerm, setSearchTerm] = useState("");

  const loadMoreMovies = () => {
    const searchEndpoint = `${API_URL}search/movie?api_key=${API_KEY}&query=${searchTerm}&page=${state.currentPage +
      1}`;
    const popularEndpoint = `${API_URL}movie/popular?api_key=${API_KEY}&page=${state.currentPage +
      1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);
  };

  if (error) return <div>Something went wrong...</div>;
  if (!state.movie[0]) return <Spinner />;

  return (
    <>
      <HeroImage
        image={`${IMAGE_BASE_URL}${BACKDROP_SIZE}${state.heroImage.backdrop_path}`}
        title={state.heroImage.original_title}
        text={state.heroImage.overview}
      />
      <SearchBar />
      <Grid header={searchTerm ? "Search result" : "Popular movies"}>
        {state.movie.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? `${IMAGE_BASE_URL}${POSTER_SIZE}${movie.poster_path}`
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {/* If the loading is true return spinner else return nothing */}
      {loading && <Spinner />}
      {state.currentPage < state.totalPages && !loading && (
        <LoadMoreBtn text="Load more" callback={loadMoreMovies} />
      )}
    </>
  );
};

export default Home;
