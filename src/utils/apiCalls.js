export const fetchMovies = queryMovies => {
  return fetch(
    `https://api.themoviedb.org/3/movie/now_playing?api_key=1b20ae1afe685b2871c8d94218f89eba&language=en-US`
  ).then(response => {
    if (!response.ok) {
      throw Error(
        "There was an issue retrieving your movies. Please try again."
      );
    }
    return response.json();
  }).then(movies => movies.results)
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