import React from 'react';
import { render } from 'react-dom';
import './style.css';
import movies from './movies.js';
import Header from './components/Header';
import Movie from './components/Movie'
import MovieList from './components/MovieList';


const App = () => (
  <>
  <div>
    <Header />

    {movies.map(movies => 
    <Movie 
      title={movies.title}
      poster={movies.poster}
      year={movies.year}
      rating={movies.rating}
      director={movies.director}
      genre={movies.genre} />
    )}

  </div>
  </>
);

render(<App />, document.querySelector('#app'));
