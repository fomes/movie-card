import React, { useContext, useEffect, useState } from 'react';
import Rating from './Rating';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import { BsFillTrashFill } from 'react-icons/bs';
import MyContext from '../context';

export default function MovieCard(props) {
  const { title, subtitle, storyline, imagePath, rating } = props.movie;
  const [star, setStar] = useState(false);
  const { favorites, setFavorites } = useContext(MyContext);
  const movies = JSON.parse(localStorage.getItem('movies'));

  const handleChangeFavorite = () => {
    setStar((prev) => {
      return !prev;
    });

    if (!star) {
      let newFavorite = movies.filter((movie) => movie.title === title);
      setFavorites([...favorites, newFavorite]);

    } else {
      let result = favorites.filter((e)=>(e[0].title !== title));
      setFavorites(result);

    }
  }

  const handleRemove = () => {
    if (window.confirm('Excluir filme?')) {
      const removeMovie = movies.filter((e) => e.title !== title);

      localStorage.removeItem('movies');
      localStorage.setItem('movies', JSON.stringify(removeMovie));

      alert('Filme Excluído!');
      window.location.reload();
    }
  }

  const starIcon = () => {
    return star
      ? <AiFillStar />
      : <AiOutlineStar />
  }

  useEffect(() => {
    if (favorites) {
      favorites.filter((e) => e[0].title === title ? setStar(true) : null);
    }
  })

  return (
    <div className="card movie-card col-sm-2">
      <h4 className="card-title"><span className="star" onClick={handleChangeFavorite}>{starIcon()}</span> {title}</h4>
        <div><img src={imagePath} alt='front cover' className="card-img-top"/></div>
      <div className="card-body">
        <h5 className="card-subtitle mb-2 text-muted">{subtitle}</h5>
        <p className="card-text">{storyline}</p>
        <div><Rating rating={rating}/></div>
        <div className="trash"><BsFillTrashFill onClick={handleRemove}/></div>
      </div>
    </div>
  )
}
