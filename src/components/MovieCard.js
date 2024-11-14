import React from "react";

import { Link } from "react-router-dom";

function MovieCard({ movie }) {
  return (
    <div className="movie-card">
      <Link
        to={`/movie/${movie.imdbID}`}
        style={{ textDecoration: "none", color: "inherit" }}
      >
        <img
          src={
            movie.Poster !== "N/A"
              ? movie.Poster
              : "https://via.placeholder.com/150"
          }
          alt={movie.Title}
          className="movie-poster"
        />
        <h3 className="movie-title">{movie.Title}</h3>
        <p className="movie-year">{movie.Year}</p>
      </Link>
    </div>
  );
}

export default MovieCard;
