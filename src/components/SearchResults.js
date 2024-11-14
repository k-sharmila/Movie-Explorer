import React, { useEffect, useState } from "react";

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Initial movie load
    loadMovies(page);
  }, [page]);

  const loadMovies = async (page) => {
    setLoading(true);
    try {
      const response = await fetch(`/api/movies?page=${page}`);
      const newMovies = await response.json();
      setMovies((prevMovies) => [...prevMovies, ...newMovies]);
    } catch (error) {
      console.error("Failed to load movies:", error);
    }
    setLoading(false);
  };

  const handleScroll = () => {
    // Check if user is near bottom of the page
    if (
      window.innerHeight + document.documentElement.scrollTop + 100 >=
        document.documentElement.offsetHeight &&
      !loading
    ) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  useEffect(() => {
    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [loading]);

  return (
    <div>
      <div className="movie-grid">
        {movies.map((movie, index) => (
          <div key={index} className="movie-card">
            <h3>{movie.title}</h3>
          </div>
        ))}
      </div>
      {loading && <div className="loading">Loading more movies...</div>}
    </div>
  );
}

export default MovieList;
