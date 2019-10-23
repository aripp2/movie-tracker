export const fetchMovies = queryMovies => {
  return fetch(
    `https://api.themoviedb.org/3/discover/movie?api_key=1b20ae1afe685b2871c8d94218f89eba&language=en-US&primary_release_date.gte=2019-01-15&primary_release_date.lte=2019-10-21`
  ).then(response => {
    if (!response.ok) {
      throw Error(
        "There was an issue retrieving your movies. Please try again."
      );
    }
    return response.json();
  });
};