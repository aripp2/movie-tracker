const baseUrl = 'https://api.themoviedb.org/3/movie/now_playing?';
const apiKey = '1b20ae1afe685b2871c8d94218f89eba';
const apiKey2 = 'cee1e60becdb4297de68233fbef2f560';

export const fetchMovies = async () => {
  const url = `${baseUrl}api_key=${apiKey2}&language=en-US`
  const response = await fetch(url)
    if (!response.ok) {
      throw Error("There was an issue retrieving your movies. Please try again.");
    }
  let movies = await response.json();
  movies = movies.results.map(movie => {
    const { backdrop_path, genre_ids, id, overview, poster_path, release_date, title, vote_average } = movie
    return { backdrop_path, genre_ids, id, overview, poster_path, release_date, title, vote_average, isFavorite: false }
  })
  return movies
};

export const postUser = async user => {
  const url = 'http://localhost:3001/api/v1/login';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email: user.email,
      password: user.password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options);
  if (!response.ok && response.status !== 401) {
    throw Error('Sorry, unable to retrieve your account. Try again later.')
  }
  const foundUser = await response.json();
  if (!response.ok && response.status === 401) {
    throw new Error('Username or password incorrect')
  }
  return foundUser;
}

export const addUser = async user => {
  const url = 'http://localhost:3001/api/v1/users';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      name: user.name,
      email: user.email,
      password: user.password
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options);
    if (!response.ok && response.status !== 500) {
     throw Error('Sorry, unable to create your account. Try again later.')
  }
  const newUser = await response.json();
    if (!response.ok && response.status === 500) {
      throw new Error('There is already an account with this email. Go to login or use another email address.')
  }
  return newUser;
}

export const addFavorite = async (userId, movie) => {
  console.log('in call', movie)
  const url = `http://localhost:3001/api/v1/users/${userId}/moviefavorites`;
  const options = {
    method: 'POST',
    body: JSON.stringify({
      movie_id: movie.id, 
      title: movie.title, 
      poster_path: movie.poster_path, 
      release_date: movie.release_date, 
      vote_average: movie.vote_average, 
      overview: movie.overview
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  }
  console.log('url', url)
  console.log('options', options)
  const response = await fetch(url, options)
  if(!response.ok) {
    // console.log('add response in apiCalls', response)
    throw Error('Unable to add movie as favorite. Try again later.')
  }
  const addedFav = await response.json();
  console.log('added fav', addedFav)
}

export const getFavorites = async userId => {
  const url = `http://localhost:3001/api/v1/users/${userId}/moviefavorites`;
  const response = await fetch(url)
  if(!response.ok) {
    throw Error('Unable to retrieve your favorite movies as this time. Please try again later')
  }
  const favoriteMovies = await response.json()
  return favoriteMovies
}

export const removeFavorite = async (userId, favId) => {
  const url = `http://localhost:3001/api/v1/users/${userId}/moviefavorites/${favId}`;
  const options = {
    method: 'DELETE',
    headers: {
      'Content-Type': 'application/json'
    }
  }
  const response = await fetch(url, options)
  if(!response.ok) {
    console.log('delete fav err', response)
    throw Error('Unable to remove this movie as a favorite at this time. Please try again later')
  }
  // return getFavorites(userId)
}


