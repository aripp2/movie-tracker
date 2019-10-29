import React from 'react';
import { shallow } from 'enzyme';
import { CardDetails, mapStateToProps, mapDispatchToProps } from './CardDetails';
import { toggleFav } from '../../actions/index';

describe ('CardDetails', () => {
  let wrapper;
  const movie = {
    backdrop_path: "/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg",
    genre_ids: (3) [80, 18, 53],
    id: 475557,
    isFavorite: false,
    overview: "During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.",
    poster_path: "/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg",
    release_date: "2019-10-04",
    title: "Joker",
    vote_average: 8.6,
  }

  it('should match the snapshot with all data passed in correctly', () => {
    wrapper = shallow(<CardDetails 
      movie={movie}
      />)

    expect(wrapper).toMatchSnapshot();

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
  
  let  mockToggleFavorite, mockRefreshFavorites, mockUser, mockState, mockMovie;
  
  beforeEach (() => {
    mockMovie = {
      id: 100
    }
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
      user: mockUser,
      refreshFavs:{mockRefreshFavorites}
    };

  });
  it ('should return a user object', () => {

    const expected = {
      id: 1,
      name: 'Alan',
      email: 'alan@turing.io'
    }
 
    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps.user).toEqual(expected)
  });
}) 
