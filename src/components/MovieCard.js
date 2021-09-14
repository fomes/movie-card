import React, { useContext, useEffect, useState } from 'react';
import Rating from './Rating';
import { AiOutlineStar, AiFillStar } from 'react-icons/ai';
import data from '../data';
import MyContext from '../context';

export default function MovieCard(props) {
  const { title, subtitle, storyline, imagePath, rating } = props.movie;
  const [star, setStar] = useState(false);
  const { favorites, setFavorites } = useContext(MyContext);

  const handleChangeFavorite = () => {
    setStar((prev) => {
      return !prev;
    });

    if (!star) {
      let newFavorite = data.filter((movie) => movie.title === title);
      setFavorites([...favorites, newFavorite]);

    } else {
      let result = favorites.filter((e)=>(e[0].title !== title));
      setFavorites(result);

    }
  }

  const starIcon = () => {
    return star
      ? <AiFillStar />
      : <AiOutlineStar />
  }

  useEffect(() => {
    if (favorites) {
      localStorage.setItem('favorites', JSON.stringify(favorites));
    }
  })

  useEffect(() => {
    if (favorites) {
      favorites.filter((e) => e[0].title === title ? setStar(true) : null);
    }
  })

  return (
    <div className="card movie-card col-sm-2">
      <h4 className="card-title"><span className="star" onClick={handleChangeFavorite}>{starIcon()}</span> {title}</h4>
        <div><img src={imagePath} alt='front' className="card-img-top"/></div>
      <div className="card-body">
        <h5 className="card-subtitle mb-2 text-muted">{subtitle}</h5>
        <p className="card-text">{storyline}</p>
        <div><Rating rating={rating}/></div>
      </div>
    </div>
  )
}
