import React from 'react';
import Movie from '../Movie';
import './style.css';



const MovieList = ({movies}) => {
  return ( 
    <>
     {movies.map(movies => (
    <Movie 
      key={movies.id}
      title={movies.title}
      poster={movies.poster}
      year={movies.year}
      rating={movies.rating}
      director={movies.director}
      genre={movies.genre}
      cast={movies.cast}
      />
    ))}
    </>
  );
}
export default MovieList;