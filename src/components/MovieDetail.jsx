import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';

const API_KEY = '5e03ac09d5cf4c83586f6ed07a44ca9f';

function MovieDetail() {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`)
      .then((res) => res.json())
      .then((data) => setMovie(data));
  }, [id]);

  if (!movie) return (
    <div className="flex justify-center items-center h-screen">
      <p className="text-gray-500 text-xl animate-pulse">Loading movie details...</p>
    </div>
  );

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className="max-w-5xl mx-auto px-4 py-5">
      {/* Back to Home Button */}
      <Link
        to="/"
        className="inline-flex items-center gap-2 mb-6 text-white bg-cyan-600 hover:bg-cyan-700 transition duration-300 px-4 py-2 rounded-md shadow-md"
      >
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
        </svg>
            Back to Home
      </Link>
      {/* Movie details content */}
    </div>

      <div className="flex flex-col md:flex-row gap-8 items-start bg-white shadow-lg rounded-xl p-6">
        <img
          src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`}
          alt={movie.title}
          className="rounded-lg shadow-md w-full md:w-72"
        />

        <div className="flex-1">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">{movie.title}</h2>

<p className="text-base leading-relaxed text-gray-700 mb-4">
  <strong className="text-gray-900">Overview:</strong> {movie.overview}
</p>

<div className="flex flex-wrap gap-6 text-sm md:text-base text-gray-600">
  <p><strong className="text-gray-800">Release Date:</strong> {movie.release_date}</p>
  <p><strong className="text-gray-800">Rating:</strong> ⭐ {movie.vote_average}</p>
  <p><strong className="text-gray-800">Runtime:</strong> {movie.runtime} mins</p>
  <p><strong className="text-gray-800">Status:</strong> {movie.status}</p>
</div>

        </div>
      </div>
    </div>
  );
}

export default MovieDetail;
