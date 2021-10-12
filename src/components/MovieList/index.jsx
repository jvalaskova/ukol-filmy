import React from 'react';

const MovieList = (movies) => {
    return(
    <>
        <ul>
            {movies.map(film =>  <li><Movie title={film.title} poster={film.poster} year={film.year} rating={film.rating} director={film.director} genre={film.genre} /></li>    )}
        </ul>
    </>
    );
}

export default MovieList;