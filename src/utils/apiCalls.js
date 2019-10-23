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