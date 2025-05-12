import React, { useState, useEffect } from 'react';

const API_KEY = '5e03ac09d5cf4c83586f6ed07a44ca9f';

function SearchBar({ onSearch }) {
  const [text, setText] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onSearch(text);
    setSuggestions([]); // hide suggestions
  };

  // Fetch suggestions as user types
  useEffect(() => {
    if (text.trim() === '') {
      setSuggestions([]);
      return;
    }

    const delayDebounce = setTimeout(() => {
      fetch(`https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=${text}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.results) {
            setSuggestions(data.results.slice(0, 5)); // top 5 suggestions
          }
        });
    }, 300); // debounce

    return () => clearTimeout(delayDebounce);
  }, [text]);

  const handleSuggestionClick = (title) => {
    setText(title);
    onSearch(title);
    setSuggestions([]);
  };

  return (
    <div className="relative flex justify-center my-6">
      <form onSubmit={handleSubmit} className="flex">
        <input
          type="text"
          placeholder="Search movies..."
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="w-72 sm:w-96 p-3 rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500"
        />
        <button
          type="submit"
          className="bg-cyan-500 text-white px-5 rounded-r-md hover:bg-cyan-600 transition duration-300"
        >
          Search
        </button>
      </form>

      {suggestions.length > 0 && (
        <ul className="absolute top-full mt-1 w-full max-w-md bg-white border border-gray-300 rounded-md shadow-lg z-10">
          {suggestions.map((movie) => (
            <li
              key={movie.id}
              className="px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm"
              onClick={() => handleSuggestionClick(movie.title)}
            >
              {movie.title}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SearchBar;
