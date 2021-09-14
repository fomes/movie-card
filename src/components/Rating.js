import React from 'react'

export default function Rating(props) {
  const { rating } = props;

  return (
    <>
      <span>IMDB: </span><span className="rating">{rating}</span>
    </>
  )
}
