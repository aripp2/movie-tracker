import React from 'react';
import { connect } from 'react-redux';
import  MovieCard from '../MovieCard/MovieCard';
import './MoviesContainer.scss';

const MoviesContainer = ({ viewAll, movies, favorites, refreshFavs }) => {
  const view = viewAll ? movies : favorites;
  const makeCards = view.map(
    movie => {
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
      refreshFavs={refreshFavs}
    />
  })
  return (
    <section className='movie-container'>
      {makeCards}
    </section>
    )
}

const mapStateToProps = ({ movies, favorites }) => ({
  movies,
  favorites
})

export default connect(mapStateToProps)(MoviesContainer);