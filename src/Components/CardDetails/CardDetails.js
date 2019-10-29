import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { toggleFav } from '../../actions';
import './CardDetails.scss';
import PropTypes from 'prop-types';

export const CardDetails = ({ movie, refreshFavs, user, toggleFav }) => {
  const {backdrop_path, id, isFavorite, overview, poster_path, release_date, title, vote_average} = movie;

  const releaseDate = new Date(release_date + 'T00:00').toString().split(' ').slice(1, 4).join(' ');

  const favStatus = isFavorite ? 'Remove Favorite' : 'Add Favorite';

  return (
    <section className="cardDetails">
      <img 
        className='movie-backdrop' 
        src={`http://image.tmdb.org/t/p/w1280${backdrop_path}`} 
        alt='movie backdrop' 
      />
      <article className='movie-details-wrapper'>
        <img 
          className='movie-poster' 
          src={`http://image.tmdb.org/t/p/w1280${poster_path}`} 
          alt='movie poster' 
        />
        <div className='movie-info-wrapper'>
          <h1 className='movie-title'>{title}</h1>
          <h2>Released: {releaseDate}</h2>
          <p>{overview}</p>
          <h2>Vote Average: {vote_average}</h2>
          <button 
            className='fav-btn' 
            type="button"
            disabled={!user}
            onClick={() => {
              toggleFav(id);
              refreshFavs(movie);
            }}
          >{favStatus}</button>
          <Link to='/'>
            <button 
              className='back-btn' 
              type='button'
            >◀ back</button>
          </Link>
        </div>
      </article>
    </section>
  )
}

export const mapStateToProps = ({ user }) => ({
  user
})

export const mapDispatchToProps = dispatch => ({
  toggleFav: id => dispatch(toggleFav(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(CardDetails);

CardDetails.propTypes = {
  title: PropTypes.string.isRequired,
  release_date: PropTypes.string.isRequired,
  overview: PropTypes.string.isRequired,
  vote_average: PropTypes.string.isRequired
}