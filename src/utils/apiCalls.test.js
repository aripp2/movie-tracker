import { fetchMovies, postUser, addUser, addFavorite, getFavorites, removeFavorite } from './apiCalls';

describe('fetchMovies', () => {
  const mockResponse = [
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
    ];
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
  ];
  const url = 'https://api.themoviedb.org/3/movie/now_playing?api_key=cee1e60becdb4297de68233fbef2f560&language=en-US';

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve({
          results: mockResponse
         })
      })
    })
  });

  it('should call fetchMovies with the correct url', () => {
    fetchMovies();
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('should return an array of movies', () => {
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
  };
  const url = 'http://localhost:3001/api/v1/login';

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
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions)
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
        ok: true,
        status: 401,
        json: () => Promise.resolve({
          status: 401
        })
      })
    })
    expect(postUser(mockBadUser)).rejects.toEqual(Error('Username or password incorrect'))
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });
    expect(postUser(mockUser)).rejects.toEqual(Error('fetch failed'));
  });
});

describe('addUser', () => {
  const mockNewUser = {
    name: 'Amy',
    email: 'amy@gmail.com',
    password: 'password'
  };
  const mockAddedUser = {
    id: 2,
    name: 'Amy',
    email: 'amy@gmail.com'
  };
  const url = 'http://localhost:3001/api/v1/users';
  const mockOptions = {
    method: 'POST',
    body: JSON.stringify(mockNewUser),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockAddedUser)
      })
    });
  });

  it('should call addUser with the correct url and options', () => {
    addUser(mockNewUser);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
  });

  it('should return the added user', () => {
    expect(addUser(mockNewUser)).resolves.toEqual(mockAddedUser);
  });

  it('should throw and error if response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      })
    });
    expect(addUser(mockNewUser)).rejects.toEqual(Error('Sorry, unable to create your account. Try again later.'));
  });

  it('should throw and error if email already has an account', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        status: 500,
        json: () => Promise.resolve({  
          status: 500
        })
      })
    });
    expect(addUser(mockNewUser)).rejects.toEqual(Error('There is already an account with this email. Go to login or use another email address.'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });
    expect(addUser(mockNewUser)).rejects.toEqual(Error('fetch failed'));
  });

});

describe('addFavorite', () => {

  const mockMovie = 
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
    };

  const mockOptions = 
    {
      method: 'POST',
      body: JSON.stringify({
        movie_id: mockMovie.id, 
        title: mockMovie.title, 
        poster_path: mockMovie.poster_path, 
        release_date: mockMovie.release_date, 
        vote_average: mockMovie.vote_average, 
        overview: mockMovie.overview
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    };
  const mockAddedFav = 
    {
      id: 1,
      movie_id: 420809,
      overview: "Maleficent and her goddaughter Aurora begin to question the complex family ties that bind them as they are pulled in different directions by impending nuptials, unexpected allies, and dark new forces at play.",
      poster_path: "/tBuabjEqxzoUBHfbyNbd8ulgy5j.jpg",
      release_date: "2019-10-18",
      title: "Maleficent: Mistress of Evil",
      user_id: 1,
      vote_average: "7.2"
    };
  const mockId = 2;
  const url = `http://localhost:3001/api/v1/users/${mockId}/moviefavorites`

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockAddedFav)
      })
    })
  });

  it('should call addFavorite with the correct url and options', () => {
    addFavorite(mockId, mockMovie);
    expect(window.fetch).toHaveBeenCalledWith(url, mockOptions);
  });

  it('should return the favorited movie', () => {
    expect(addFavorite(mockId, mockMovie)).resolves.toEqual(mockAddedFav)
  });

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(addFavorite(mockId, mockMovie)).rejects.toEqual(Error('Unable to add movie as favorite. Try again later.'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });
    expect(addFavorite(mockId, mockMovie)).rejects.toEqual(Error('fetch failed'));
  });

});

describe('getFavorites', () => {
  const mockUserId = 2;
  const url = `http://localhost:3001/api/v1/users/${mockUserId}/moviefavorites`;
  const mockFavs = [
    {
      id: 559969,
      movie_id: 559969,
      overview: "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
      poster_path: "/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
      release_date: "2019-10-11",
      title: "El Camino: A Breaking Bad Movie",
      user_id: 2,
      vote_average: "7.1"
    },
    {
      id: 417384,
      movie_id: 417384,
      overview: "Mill Valley, Pennsylvania, Halloween night, 1968. After playing a joke on a school bully, Sarah and her friends decide to sneak into a supposedly haunted house that once belonged to the powerful Bellows family, unleashing dark forces that they will be unable to control.",
      poster_path: "/d0FWbzrmm99BTfUqf1Lbjl2zu3S.jpg",
      release_date: "2019-08-09",
      title: "Scary Stories to Tell in the Dark",
      user_id: 2,
      vote_average: "6.3"
    }
  ];

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json: () => Promise.resolve(mockFavs)
      })
    });
  });

  it('should call getFavorites with the correct url', () => {
    getFavorites(mockUserId);
    expect(window.fetch).toHaveBeenCalledWith(url)
  });

  it('should return the user\'s favorites', () => {
    expect(getFavorites(mockUserId)).resolves.toEqual(mockFavs)
  });

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(getFavorites(mockUserId)).rejects.toEqual(Error('Unable to retrieve your favorite movies as this time. Please try again later'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });
    expect(getFavorites(mockUserId)).rejects.toEqual(Error('fetch failed'));
  });

});

describe('removeFavorite', () => {

  const mockUserId = 2;
  const mockFavId = 559969;
  const url = `http://localhost:3001/api/v1/users/${mockUserId}/moviefavorites/${mockFavId}`;
  const mockFavs = [
    {
      id: 559969,
      movie_id: 559969,
      overview: "In the wake of his dramatic escape from captivity, Jesse Pinkman must come to terms with his past in order to forge some kind of future.",
      poster_path: "/ePXuKdXZuJx8hHMNr2yM4jY2L7Z.jpg",
      release_date: "2019-10-11",
      title: "El Camino: A Breaking Bad Movie",
      user_id: 2,
      vote_average: "7.1"
    },
    {
      id: 417384,
      movie_id: 417384,
      overview: "Mill Valley, Pennsylvania, Halloween night, 1968. After playing a joke on a school bully, Sarah and her friends decide to sneak into a supposedly haunted house that once belonged to the powerful Bellows family, unleashing dark forces that they will be unable to control.",
      poster_path: "/d0FWbzrmm99BTfUqf1Lbjl2zu3S.jpg",
      release_date: "2019-08-09",
      title: "Scary Stories to Tell in the Dark",
      user_id: 2,
      vote_average: "6.3"
    }
  ];

  const mockOptions = 
    {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      }
    };

  beforeEach(() => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true
      })
    });
  }); 

  it('should call removeFavorite with the correct url and options', () => {
    removeFavorite(mockUserId, mockFavId)
    expect(window.fetch).toHaveBeenCalledWith(url,mockOptions)
  });

  it('should throw an error if the response is not ok', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: false
      });
    });
    expect(removeFavorite(mockUserId, mockFavId)).rejects.toEqual(Error('Unable to remove this movie as a favorite at this time. Please try again later'));
  });

  it('should throw an error if the server is down', () => {
    window.fetch = jest.fn().mockImplementation(() => {
      return Promise.reject(Error('fetch failed'))
    });
    expect(removeFavorite(mockUserId, mockFavId)).rejects.toEqual(Error('fetch failed'));
  });
});