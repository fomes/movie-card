import React, { useState, useEffect } from 'react';
import './App.css';
import Header from './components/Header';
import MovieList from './components/MovieList';
import data from './data';
import MyContext from './context';
import SearchBar from './components/SearchBar';

function App() {
  const [search, setSearch] = useState('');
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [checked, setChecked] = useState(false);

  const localFavorites  = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(localFavorites);

  let localMovies = [];

  if (!localStorage.getItem('movies')) {
    localStorage.setItem('movies', JSON.stringify(data));
    localMovies = JSON.parse(localStorage.getItem('movies'));

  } else {
    localMovies = JSON.parse(localStorage.getItem('movies'));
  }

  // save favorites on localStorage
  useEffect(() => {
    if (favorites) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  })

  // filter search movies
  useEffect(() => {
    setFilteredMovies(
      data.filter((movie) => 
        movie.title.toLowerCase().includes(search.toLowerCase())
      )
    )
  }, [search, setFilteredMovies]);

  return (
    <MyContext.Provider value={{ search, setSearch, filteredMovies, setFilteredMovies, checked, setChecked, favorites, setFavorites }}>
      <Header />
      <SearchBar />
      <MovieList movies={localMovies} />
    </MyContext.Provider>
  );
}

export default App;
