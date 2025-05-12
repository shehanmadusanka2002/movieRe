// src/Popular.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const API_KEY = '5e03ac09d5cf4c83586f6ed07a44ca9f';

function Popular() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}`)
      .then(res => res.json())
      .then(data => setMovies(data.results || []));
  }, []);

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="container mx-auto px-4 py-6">
        <h2 className="text-3xl font-bold text-center text-gray-700 mb-6">🔥 Popular Movies</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {movies.map((movie) => (
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

export default Popular;
