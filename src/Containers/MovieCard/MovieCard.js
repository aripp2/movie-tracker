import React from 'react';
import  './MovieCard.scss';
import { toggleFavorite } from '../../actions'
import { connect } from 'react-redux'

const MovieCard = ({ id, title, date, poster, isFavorite, toggleFav }) => {
  const fixedDate = new Date(date + 'T00:00').toString().split(' ').slice(1, 4).join(' ');

  return (
    <article className='movie-card' id={id}>
      <div className='movie-details'>
        <h2>{title}</h2>
        <h3>{fixedDate}</h3>
        <button className='fav-btn' type="button"
        onClick={() => toggleFav(id) }>Add Favorite</button>
      </div>
        <img className='poster' src={`http://image.tmdb.org/t/p/w1280${poster}`} alt='movie poster'/>
    </article>
  )
}

const mapDispatchToProps = dispatch => ({
  toggleFav: (id) => dispatch( toggleFavorite(id))
})

export default connect(null, mapDispatchToProps)(MovieCard);