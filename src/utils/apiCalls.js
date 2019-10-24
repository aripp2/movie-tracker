export const fetchMovies = async () => {
  const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=1b20ae1afe685b2871c8d94218f89eba&language=en-US'
  const response = await fetch(url)
    if (!response.ok) {
      throw Error(
        "There was an issue retrieving your movies. Please try again."
      );
    }
  const movies = await response.json();
  return movies.results
};

export const getUsers = url => {
  return fetch(url)
  .then(res => res.json())
  .then(data => console.log(data))
  .catch(err => console.log(err))
}

export const postUser = user => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email: user.email,
      password: user.password
    }),
    headers: {'Content-Type': 'application/json'}
  }

    return fetch('http://localhost:3001/api/v1/login', options)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
}