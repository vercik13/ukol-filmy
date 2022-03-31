import React from 'react';
import Actor from '../Actor';
import './style.css';



const Movie = ({title, poster, year, rating, director, genre, cast}) => {
  return (
    <>
    <div className='card'>
    
        <div className='movie'>
          <h2 className='title'>{title}</h2>
          <img className='poster' src={`/assets/${poster}`}/>
          <p className='year'><strong>Rok vydání:</strong> {year}</p>
          <p className='rating'><strong>Hodnocení:</strong> {rating} / 10</p>
          <p className='director'><strong>Režie:</strong> {director}</p>
          <p className='genre'><strong>Žánr:</strong> {genre}</p>

          {cast.map(cast => (
          <Actor 
            key={cast.name}
            name={cast.name}
            as={cast.as}
          
            />
          ))}
        </div>
    
  </div>
  

    </>
  );
}

export default Movie;