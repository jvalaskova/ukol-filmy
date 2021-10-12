import React from 'react';
import { render } from 'react-dom';
import './style.css';


import Header from './components/Header';
import Movie from './components/Movie';
import MovieList from './components/MovieList';
import movies from './movies.js';

const App = () => (
  <>
    <Header />
    <MovieList movies={movies} />
    <Movie title={title} poster={poster} year={year} rating={rating} director={director} genre={genre} />
  </>
);

render(<App />, document.querySelector('#app'));
