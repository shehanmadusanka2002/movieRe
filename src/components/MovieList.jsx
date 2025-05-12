import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './SearchBar';

const API_KEY = '5e03ac09d5cf4c83586f6ed07a44ca9f';
const VISIBLE_COUNT = 4; // Number of movies to show at a time

function MovieList() {
  const [movies, setMovies] = useState([]);
  const [startIndex, setStartIndex] = useState(0);

  const fetchMovies = (url) => {
    fetch(url)
      .then(res => res.json())
      .then(data => setMovies(data.results || []));
  };

  useEffect(() => {
    fetchMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setStartIndex((prevIndex) =>
        (prevIndex + VISIBLE_COUNT) % movies.length
      );
    }, 4000); // change every 4 seconds

    return () => clearInterval(interval);
  }, [movies]);

  const handleSearch = (searchText) => {
    if (searchText.trim() !== '') {
      fetchMovies(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${searchText}`);
    } else {
      fetchMovies(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`);
    }
  };

  const visibleMovies = movies.length > 0
    ? movies.slice(startIndex, startIndex + VISIBLE_COUNT).concat(
        // Loop back to the start if at end of list
        startIndex + VISIBLE_COUNT > movies.length
          ? movies.slice(0, (startIndex + VISIBLE_COUNT) % movies.length)
          : []
      )
    : [];

  return (
    <div className="bg-gray-100 min-h-screen">
      <SearchBar onSearch={handleSearch} />
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold mb-4 text-center text-gray-700">Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 transition-all duration-500 ease-in-out">
          {visibleMovies.map((movie) => (
            <Link
              to={`/movie/${movie.id}`}
              key={movie.id}
              className="bg-white rounded-lg shadow-md hover:shadow-xl transform hover:scale-105 transition duration-300 overflow-hidden"
            >
              <img
                src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
                alt={movie.title}
                className="w-full h-80 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 text-center">{movie.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default MovieList;
