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

  const localFav  = JSON.parse(localStorage.getItem('favorites')) || [];
  const [favorites, setFavorites] = useState(localFav);

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
      <MovieList movies={data} />
    </MyContext.Provider>
  );
}

export default App;
