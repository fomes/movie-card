import React, { useContext } from 'react'
import MovieCard from './MovieCard';
import MyContext from '../context';

export default function MovieList(props) {
  const { movies } = props;
  const { search, filteredMovies, checked, favorites } = useContext(MyContext);

  if (!checked) {
    if (!search) {
      return (
      <div className="row justify-content-center">
        {movies.map((e) => <MovieCard key={e.title} movie={e} />)}
      </div>
      )
    } else {
      return (
        <div className="row justify-content-center">
          {filteredMovies.map((e) => <MovieCard key={e.title} movie={e} />)}
        </div>
      )
    }
  } else {
    return (
      <div className="row justify-content-center">
        {favorites.map((e) => <MovieCard key={e[0].title} movie={e[0]} />)}
      </div>
    )
  }

}
