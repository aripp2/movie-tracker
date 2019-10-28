import React from 'react';
import { Link } from 'react-router-dom';
import './CardDetails.scss';
import PropTypes from 'prop-types'

const CardDetails = ({ movie_name, artwork_url, release_date,  movie_overview, returnRoute }) => {
  return (
    <section className="CardDetails">
      <Link to={`${returnRoute}`} className='back-btn'>◀ back</Link>
      <article className='movie-details' id="cardDetails-container">
      <h1 id="movie-name">{movie_name}</h1>
      {/* <h2 id="movie-name">{}</h2> */}
      <img src={`http://image.tmdb.org/t/p/w1280${artwork_url}`} alt="" className='movie-poster' />
      <p >{movie_overview}</p>
      <p >{release_date}</p>
      </article>
    </section>
  )
}

export default CardDetails;

CardDetails.propTypes = {
  artist_name: PropTypes.string,
  album_name: PropTypes.string,
  artwork_url: PropTypes.string,
  release_date: PropTypes.string,
  primary_genre_name: PropTypes.string,
  returnRoute: PropTypes.string
}