import React from 'react';
import { connect } from 'react-redux';
import { toggleFav } from '../../actions';
import  './MovieCard.scss';

const MovieCard = ({ id, title, date, poster, movie, isFavorite, toggleFav, user, refreshFavs }) => {

  const fixedDate = new Date(date + 'T00:00').toString().split(' ').slice(1, 4).join(' ');

  const favStatus = isFavorite ? 'Remove Favorite' : 'Add Favorite';

  return (
    <article className='movie-card' id={id}>
      <div className='movie-details'>
        <h2>{title}</h2>
        <h3>{fixedDate}</h3>
        <button 
          className='fav-btn' 
          type="button"
          disabled={!user}
          onClick={() => {
            toggleFav(id);
            refreshFavs(movie);
          }}
        >{favStatus}</button>
      </div>
        <img 
          className='poster' 
          src={`http://image.tmdb.org/t/p/w1280${poster}`} 
          alt='movie poster'/>
    </article>
  )
}

const mapStateToProps = ({ user }) => ({
  user
})

const mapDispatchToProps = dispatch => ({
  toggleFav: id => dispatch(toggleFav(id)),
})

export default connect(mapStateToProps, mapDispatchToProps)(MovieCard);

