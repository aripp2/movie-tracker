import { movies } from './movies';

describe('movies', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = movies(undefined, []);
    expect(result).toEqual(expected);
  })

  it('should return new state when ADD_MOVIES is the type', () => {
    const movieState = [{
      title: 'joker',
      id: 2,
      movie_id: 2,
      isFavorite: true
    }];
    const action = {
      type: 'ADD_MOVIES',
      movies: movieState
    }
    const expected = movieState;
    const result = movies([], action);
    expect(result).toEqual(expected);
  })

  it('should return a new state when TOGGLE_FAV is the type', () => {
    const movieState = [{
      title: 'joker',
      id: 2,
      movie_id: 2,
      isFavorite: true
    }];
    const action = {
      type: 'TOGGLE_FAV',
      id: 2
    }
    const expected = [{
      title: 'joker',
      id: 2,
      movie_id: 2,
      isFavorite: false
    }];
    const result = movies(movieState, action);
    expect(result).toEqual(expected);
  });

  it('should return a new state UPDATE_FAVS is the type', () => {
    const movieState = [{
      title: 'joker',
      id: 2,
      movie_id: 2,
      isFavorite: false
    }];
    const action = {
      type: 'UPDATE_FAVS',
      favs: {
        favorites: movieState
      }
    }
    const expected = [{
      title: 'joker',
      id: 2,
      movie_id: 2,
      isFavorite: true
    }];
    const result = movies(movieState, action);
    expect(result).toEqual(expected)
  });
})