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

export const postUser = async user => {
  const url = 'http://localhost:3001/api/v1/login';
  const options = {
    method: 'POST',
    body: JSON.stringify({
      email: user.email,
      password: user.password
    }),
    headers: {'Content-Type': 'application/json'}
  }
  const response = await fetch(url, options);
  if (!response.ok) {
     const err = new Error('Sorry, unable to retreive your account. Try again later.')
     console.log('in api', err)
     return err;
  }
  const foundUser = await response.json();
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
    headers: {'Content-Type': 'application/json'}
  }
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new Error('Sorry, unable to create your account. Try again later.')
  }
  const newUser = await response.json();
  console.log('new user', newUser.password)
  return newUser;
}