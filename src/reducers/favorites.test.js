import { favorites } from './favorites';

describe('favorites', () => {

  it('should return the initial state', () => {
    const expected = [];
    const result = favorites(undefined, []);
    expect(result).toEqual(expected);
  });

  it('should return state with new favs', () => {
    const action = {
      type: 'SET_FAVS',
      favs: {
        favorites: [{title: 'joker', movie_id: 2}]
      }
    }
    const expected = [{
      title: 'joker',
      id: 2,
      movie_id: 2,
      isFavorite: true
    }]
    const result = favorites([], action);
    expect(result).toEqual(expected);
  });

  it('should return state with cleared favs', () => {
    const action = {
      type: 'CLEAR_FAVS'
    }
    const expected = [];
    const result = favorites([{title: 'joker', movie_id: 2}], action);
    expect(result).toEqual(expected)
  });

})