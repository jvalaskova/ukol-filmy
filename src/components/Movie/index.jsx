import React from 'react';

const Movie = ({poster, title, year, genre, director, rating}) => {
  return (
    <>
        <div className="box">
            <img className="logo" src={'/assets/' + poster } alt="poster" />
            <h1 className="title">{title}</h1>
            <h2 className="year">{year}</h2>
            <h2 className="genre">{genre}</h2>
            <h2 className="director">{director}</h2>
            <h2 className="rating">{rating}</h2>
        </div>
    </>
  )
};
  
export default Movie;