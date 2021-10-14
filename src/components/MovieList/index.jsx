import React from 'react';  //vyzkoušet key id nebo film.id + dodělat v actor.map key
import Movie from '../Movie';

const MovieList = ({movies}) => {
    return(
    <>
        <div className="movieListBox">
            {movies.map( (film, id) => <Movie key={id} title={film.title} poster={film.poster} year={film.year} rating={film.rating} director={film.director} genre={film.genre} cast={film.cast} />   )} 
        </div>
    </>
    );
}

export default MovieList;
