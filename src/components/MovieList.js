// src/components/MovieList.js
import React from "react";
import MovieCard from "./MovieCard";

function MovieList({ movies, loading }) {
  if (loading) return <p>Loading...</p>;

  return (
    <div className="movie-list">
      {movies.length > 0 ? (
        movies.map((movie) => <MovieCard key={movie.imdbID} movie={movie} />)
      ) : (
        <p>No movies found</p>
      )}
    </div>
  );
}

export default MovieList;
