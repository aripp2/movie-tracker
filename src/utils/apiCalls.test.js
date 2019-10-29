import { fetchMovies, postUser, addUser, addFavorite, getFavorites, removeFavorite } from './apiCalls';

describe('fetchMovies', () => {
  const mockResponse = {results:[
      {
        adult: false,
        backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
        genre_ids: [80, 18, 53],
        id: 475557,
        original_language: "en",
        original_title: "Joker",
        overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
        popularity: 458.719,
        poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
        release_date: "2019-10-04",
        title: "Joker",
        video: false,
        vote_average: 8.6,
        vote_count: 4305,
      },
      {
        adult: false,
        backdrop_path: "/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
        genre_ids: [12, 14, 10751],
        id: 420809,
        original_language: "en",
        original_title: "Maleficent: Mistress of Evil",
        overview: "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
        popularity: 231.895,
        poster_path: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
        release_date: "2019-10-18",
        title: "Maleficent: Mistress of Evil",
        video: false,
        vote_average: 7.2,
        vote_count: 472
      }
    ]};
  const mockMovies = [
    {
      backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      genre_ids: [80, 18, 53],
      id: 475557,
      isFavorite: false,
      overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      release_date: "2019-10-04",
      title: "Joker",
      vote_average: 8.6,
      isFavorite: false
    },
    {
      backdrop_path: "/skvI4rYFrKXS73BJxWGH54Omlvv.jpg",
      genre_ids: [12, 14, 10751],
      id: 420809,
      isFavorite: false,
      overview: "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
      poster_path: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
      release_date: "2019-10-18",
      title: "Maleficent: Mistress of Evil",
      vote_average: 7.2,
      isFavorite: false
    }
  ]

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          mockMovies: () => Promise.resolve(mockResponse)})
      })
    })
  });

  it.skip('should call fetchMovies with the correct url', () => {
    fetchMovies();
    expect(window.fetch).toHaveBeenCalledWith('https://api.themoviedb.org/3/movie/now_playing?api_key=cee1e60becdb4297de68233fbef2f560&language=en-US')
  });

  it.skip('should return an array of movies', () => {
    expect(fetchMovies()).resolves.toEqual(mockMovies);
  });

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(fetchMovies()).rejects.toEqual(Error('There was an issue retrieving your movies. Please try again.'))
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });
    expect(fetchMovies()).rejects.toEqual(Error('fetch failed'));
  });

});

describe('postUser', () => {
  const mockUser = {
    email: 'alan@turing.io',
    password: 'password'
  };
  const mockOptions = {
    method: 'POST',
    body: JSON.stringify(mockUser),
    headers: {
      'Content-Type': 'application/json'
    }
  };
  const mockUserResponse = {
    id: 1,
    name: 'Alan',
    email: 'alan@turing.io'
  };
  const mockBadUser = {
    email: 'alan@turing.io',
    password: 'wrong'
  }

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() =>{
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockUserResponse)
      })
    })
  });

  it('should call postUser with the correct url and options', () => {
    postUser(mockUser)
    expect(window.fetch).toHaveBeenCalledWith('http://localhost:3001/api/v1/login', mockOptions)
  });

  it('should return the user object', () => {
    expect(postUser(mockUser)).resolves.toEqual(mockUserResponse)
  });

  it('should throw an error if the response is not ok and status is not 401', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false,
        status: 500
      })
    })
    expect(postUser(mockUser)).rejects.toEqual(Error('Sorry, unable to retrieve your account. Try again later.'))
  });

  it('should throw error if username or password are incorrect', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        // ok: true,
        // json: () => Promise.resolve({
          ok: false,
          status: 401
        // })
      })
    })
    expect(postUser(mockBadUser)).rejects.toEqual(Error('Username or password incorrect'))
  });
});

describe('addUser', () => {

});

describe('addFavorite', () => {

});

describe('getFavorites', () => {

});

describe('removeFavorite', () => {

});