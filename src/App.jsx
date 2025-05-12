import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MovieList from './components/MovieList';
import MovieDetail from './components/MovieDetail';
import Navbar from './components/NavBar';
import Footer from './components/Footer.jsx';
import Popular from './components/Popular.jsx';
import TopRated from './components/TopRated.jsx';
import UpComing from './components/UpComing.jsx';


function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<MovieList />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
        <Route path="/popular" element={<Popular />} />
        <Route path="/top-rated" element={<TopRated />} />
        <Route path="/upcoming" element={<UpComing />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
