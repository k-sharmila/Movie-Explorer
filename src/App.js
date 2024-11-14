// src/App.js
import React, { useState } from "react";
import axios from "axios";
import SearchBar from "./components/SearchBar";
import MovieList from "./components/MovieList";
import MovieDetail from "./components/MovieDetail";
import SearchResults from "./components/SearchResults";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
const API_KEY = "d3288991";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  const searchMovies = async (query) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://www.omdbapi.com/?s=${query}&apikey=${API_KEY}`
      );
      setMovies(response.data.Search || []);
    } catch (error) {
      console.error("Error fetching data from OMDB", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <SearchBar onSearch={searchMovies} />
                <MovieList movies={movies} loading={loading} />
                <SearchResults />
              </>
            }
          />
          <Route path="/movie/:id" element={<MovieDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
