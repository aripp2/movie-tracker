import React from 'react';
import  './MovieCard.scss';
import { toggleFavorite } from '../../actions'
import { connect } from 'react-redux'

const MovieCard = ({ id, title, date, poster, vote, overview, isFavorite, toggleFav }) => {
  const fixedDate = new Date(date + 'T00:00').toString().split(' ').slice(1, 4).join(' ');
  return (
    <div className='movie-card' id={id}>
      <h3>{title}</h3>
      <h3>{fixedDate}</h3>
      <img className='poster' src={`http://image.tmdb.org/t/p/w1280${poster}`} alt='movie poster'/>
      <h3>{vote}</h3>
      <p>{overview}</p>
      <button type="button"
      onClick={() => toggleFav(id) }>Add Favorite</button>
    </div>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleFav: (id) => dispatch( toggleFavorite(id))
})

export default connect(null, mapDispatchToProps)(MovieCard);