import React from 'react';



const Movie = ({title, poster, year, rating, director, genre}) => {
  return (
    <>
    <div className='movie'>
      <h2 className='title'>{title}</h2>
      <img className='poster' src={`/assets/${poster}`}/>
      <p className='year'>{year}</p>
      <p className='rating'>{rating}</p>
      <p className='director'>{director}</p>
      <p className='genre'>{genre}</p>
    </div>
    </>
  );
}

export default Movie;