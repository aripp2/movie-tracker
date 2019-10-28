import React from 'react';
import { Link } from 'react-router-dom';
import './CardDetails.scss';
import PropTypes from 'prop-types'

const CardDetails = ({ movie }) => {
  const {backdrop_path, genre_ids, id, isFavorite, overview, poster_path, release_date, title, vote_average} = movie;

  // let releaseDate = release_date.split('-')
  // releaseDate = `${releaseDate[1]}/${releaseDate[2]}/${releaseDate[0]}`   

  const releaseDate = new Date(movie.release_date + 'T00:00').toString().split(' ').slice(1, 4).join(' ');


  return (
    <section className="cardDetails">
      {/* <Link to={`${returnRoute}`} className='back-btn'>◀ back</Link> */}

      <img className='movie-backdrop' src={`http://image.tmdb.org/t/p/w1280${backdrop_path}`} alt='movie default backdrop image' />


      <article className='movie-details-wrapper'>
        <img className='movie-poster' src={`http://image.tmdb.org/t/p/w1280${poster_path}`} alt='movie poster' />
        <div className='movie-info-wrapper'>
          <h1 className='movie-title'>{title}</h1>
          <h2>Released: {releaseDate}</h2>
          <p>{overview}</p>
          <h2>Vote Average: {vote_average}</h2>
          <Link to='/'>
            <button className='back-btn' type='button'>
              ◀ back
            </button>
          </Link>
        </div>
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