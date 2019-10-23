import React from 'react';
import  MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.scss';

const MoviesContainer = ({ movies }) => {
  const makeCards = movies.map(movie => {
    return <MovieCard 
      key={movie.id}
      id={movie.id}
      title={movie.title}
      date={movie.release_date}
      poster={movie.poster_path}
      vote={movie.vote_average}
      overview={movie.overview}
    />
  })
  return (
    <section className='movie-container'>
      <h2>Movies Container</h2>
      {makeCards}
    </section>
    )
}

export default MoviesContainer;