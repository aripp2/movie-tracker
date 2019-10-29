import * as actions from '../actions'

describe('actions', () => {

  it('should have type of ADD_MOVIES', () => {
    const movies = [{
      backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      genre_ids: (3) [80, 18, 53],
      id: 475557,
      isFavorite: false,
      overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      release_date: "2019-10-04",
      title: "Joker",
      vote_average: 8.6,
      isFavorite: false
    }]
    const expectedAction = {
      type: 'ADD_MOVIES',
      movies: movies
    }
    const result = actions.addMovies(movies)
    expect(result).toEqual(expectedAction)
  });

  it('Should have type of THROW_ERROR', () => {
    const errorMsg = 'error'
    const expectedAction = {
      type: 'THROW_ERROR',
      errorMsg: 'error'
    }
    const result = actions.throwError(errorMsg)
    expect(result).toEqual(expectedAction);
  });

  it('should have type of SET_USER', () => {
    const user = {
      id: 2, 
      name: "Alex", 
      email: "alex@gmail.com"
    }
    const expectedAction = {
      type: 'SET_USER',
      user: {
        id: 2, 
        name: "Alex", 
        email: "alex@gmail.com"
      }
    }
    const result = actions.setUser(user);
    expect(result).toEqual(expectedAction)
  });

  it('should have type of TOGGLE_FAV', () => {
    const id = 1;
    const expectedAction = {
      type: 'TOGGLE_FAV',
      id: 1
    }
    const result = actions.toggleFav(id)
    expect(result).toEqual(expectedAction)
  });

  it('should have type of SET_FAVS', () => {
    const favs = [{
      backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      genre_ids: (3) [80, 18, 53],
      id: 475557,
      isFavorite: false,
      overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      release_date: "2019-10-04",
      title: "Joker",
      vote_average: 8.6,
      isFavorite: false
    }]
    const expectedAction = {
      type: 'SET_FAVS',
      favs: favs
    }
    const result = actions.setFavs(favs)
    expect(result).toEqual(expectedAction)
  });

  it('should have type of UPDATE_FAVS', () => {
    const favs = [{
      backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
      genre_ids: (3) [80, 18, 53],
      id: 475557,
      isFavorite: false,
      overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
      poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
      release_date: "2019-10-04",
      title: "Joker",
      vote_average: 8.6,
      isFavorite: false
    }]
    const expectedAction = {
      type: 'UPDATE_FAVS',
      favs: favs
    }
    const result = actions.updateFavs(favs);
    expect(result).toEqual(expectedAction)
  });

  it('should have type of CLEAR_FAVS', () => {
    const expectedAction = {
      type: 'CLEAR_FAVS'
    }
    const result = actions.clearFavs()
    expect(result).toEqual(expectedAction)
  });

})