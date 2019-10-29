import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard, mapStateToProps, mapDispatchToProps } from './MovieCard';
import { toggleFav } from '../../actions/index';

describe('MovieCard', () => {
  let wrapper, favoriteWrapper, mockToggleFavorite, mockRefreshFavorites, mockUser, mockState, mockMovie;

  beforeEach(() => {
    mockToggleFavorite = jest.fn();
    mockRefreshFavorites = jest.fn();
    mockUser = {
      id: 1,
      name: 'Alan',
      email: 'alan@turing.io'
    };

    mockState = {
      id: '354920',
      title: "Han Solo",
      date:'2019/10/28',
      poster:'http://image.tmdb.org/t/p/w1280',
      movie: {mockMovie},
      isFavorite: true,
      toggleFav:{mockToggleFavorite},
      user:{mockUser},
      refreshFavs:{mockRefreshFavorites}
    };

    mockMovie = {
      id: 100
    }



    favoriteWrapper = shallow (<MovieCard 
      id= '354920'
      title= "Han Solo"
      date='2019/10/28'
      poster={`http://image.tmdb.org/t/p/w1280`} 
      movie
      isFavorite
      toggleFav={mockToggleFavorite}
      user={mockUser}
      refreshFavs={mockRefreshFavorites}
    />)
  });

  it('should match snapshot ', () => {

    expect(wrapper).toMatchSnapshot()
  });
  
  it('should call toggleFav when favorite button is clicked', () => {

    const mockEvent = { preventDefault: jest.fn() }

    favoriteWrapper.find('button').simulate('click', mockEvent)

    expect(mockToggleFavorite).toHaveBeenCalled();
  });

  it('should call refreshFavs when favorite icon is clicked', () => {

    const mockEvent = { preventDefault: jest.fn() }

    favoriteWrapper.find('button').simulate('click', mockEvent)

    expect(mockRefreshFavorites).toHaveBeenCalled();
  });
});

describe('mapDispatchToProps', () => {
  it('should call Dispatch with a toggleFav', () => {

    const mockFavorite = {
      backdrop_path: 'http://image.tmdb.org/t/p/w1280',
      title: 'Joker',
      releaseDate: 'Oct 04 2019',
      overview: 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
      vote_average: '8.6'
    }
    
    const mockDispatch = jest.fn();
    const actionToDispatch = toggleFav(mockFavorite);

    const mappedProps = mapDispatchToProps(mockDispatch);
    mappedProps.toggleFav(mockFavorite);
    
    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  });
});

describe('mapStateToProps', () => {
  it ('should return a user object', () => {

    // const mockState = {
    //   id: 1,
    //   name: 'Alan',
    //   email: 'alan@turing.io'
    // } 

    const expected = {
      id: 1,
      name: 'Alan',
      email: 'alan@turing.io'
    }
 
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  });
}) 