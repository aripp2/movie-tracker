import React from 'react';
import { shallow } from 'enzyme';
import { App } from './App';
import { fetchMovies, getFavorites, addFavorite} from '../../utils/apiCalls';
jest.mock('../../utils/apiCalls');

describe('App', () => {
  let wrapper;
  const mockAddMovies = jest.fn();
  const mockThrowError = jest.fn();
  const mockSetFavs = jest.fn();
  const mockUser = {
    id: 2, 
    name: "Alex", 
    email: "alex@gmail.com"
  };
  const mockMovies = [{
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
  }];
  const mockFaves = [mockMovies[0]];

  fetchMovies.mockImplementation(() => Promise.resolve(mockMovies));
  addFavorite.mockImplementation(() => Promise.resolve(mockUser.id, mockMovies[0]));
  getFavorites.mockImplementation(() => Promise.resolve(mockFaves));

  beforeEach(() => {
    wrapper = shallow(<App 
      addMovies={mockAddMovies} 
      throwError={mockThrowError} 
      errorMsg={''} 
      user={mockUser} 
      movies={mockMovies} 
      setFavs={mockSetFavs}
      />);
  });

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should set movies when fetch movies is called', () => {
    expect(fetchMovies).toHaveBeenCalled();
    expect(mockAddMovies).toHaveBeenCalledWith(mockMovies);
  });
  
  it('should be able to favorite a movie and get favorites', async () => {
    await wrapper.instance().refreshFavs(mockMovies[0]);
    expect(addFavorite).toHaveBeenCalledWith(mockUser.id, mockMovies[0]);
    expect(getFavorites).toHaveBeenCalledWith(2);
    expect(mockSetFavs).toHaveBeenCalledWith(mockFaves);
  });
});