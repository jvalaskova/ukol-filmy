import React from 'react';
import Actor from '../Actor';
import './style.css';

const Movie = ({cast, poster, title, year, genre, director, rating}) => { 
  return (
    <>
      <div className="movieBox">

        <div className="posterBox">
          <img className="poster" src={'/assets/' + poster } alt="poster" />
        </div>

          <h5 className="rating">{rating} / 10</h5>

        <div className="informationBox">
          <div className="informationBox__title">
            <h3 className="title">{title}</h3>
            <p className="year"><b>Rok vydání</b>: {year}</p>
            <p className="genre"><b>Žánr</b>: {genre}</p>
            <p className="director"><b>Režie</b>: {director}</p>
          </div>
        
            <div className="castTitle" ><p>V hlavních rolích:</p></div>
            <div className="informationBox__actors">{cast.map(MapActorAs => <Actor name={MapActorAs.name} as={MapActorAs.as} />) }</div>
        
           
        </div>

      </div>
    </>
  )
};
  
export default Movie;
