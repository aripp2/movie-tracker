import React from 'react';
import { connect } from 'react-redux';
import  MovieCard from '../MovieCard/MovieCard';
import './FavoritesContainer.scss';

const FavoritesContainer = ({ favorites, refreshFavs }) => {
  const favCards = favorites.map(fav => {
    return <MovieCard 
      key={fav.id}
      id={fav.movie_id}
      title={fav.title}
      date={fav.release_date}
      poster={fav.poster_path}
      vote={fav.vote_average}
      overview={fav.overview}
      isFavorite={fav.isFavorite}
      movie={fav}
      refreshFavs={refreshFavs}
    />
  })

  return (
    <section className='movie-container'>
      {favCards}
    </section>
    )
}

const mapStateToProps = ({ favorites }) => ({
  favorites
})

export default connect(mapStateToProps)(FavoritesContainer)