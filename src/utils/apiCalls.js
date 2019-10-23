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

export const postUser = url => {
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email: "alan@turing.io",
       password: "password"
    }),
    headers: {'Content-Type': 'application/json'}
  }

    return fetch(url, options)
      .then(res => res.json())
      .then(data => console.log(data))
      .catch(err => console.log(err))
}