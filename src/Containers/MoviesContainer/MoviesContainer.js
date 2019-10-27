import React from 'react';
import { connect } from 'react-redux';
import  MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.scss';

const MoviesContainer = ({ movies }) => {
  const makeCards = movies.map(
    movie => {
  // console.log('in container', movie)
    return <MovieCard 
      key={movie.id}
      id={movie.id}
      title={movie.title}
      date={movie.release_date}
      poster={movie.poster_path}
      vote={movie.vote_average}
      overview={movie.overview}
      isFavorite={movie.isFavorite}
      movie={movie}
    />
  })
  return (
    <section className='movie-container'>
      {makeCards}
    </section>
    )
}

const mapStateToProps = ({ movies }) => ({
  movies
})

export default connect(mapStateToProps)(MoviesContainer);