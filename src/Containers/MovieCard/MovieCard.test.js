import React from 'react';
import { shallow } from 'enzyme';
import { MovieCard, mapStateToProps, mapDispatchToProps } from './MovieCard';
import { toggleFav } from '../../actions/index';

describe('MovieCard', () => {
  let wrapper, favoriteWrapper;

  it('should match snapshot ', () => {
    favoriteWrapper = shallow (<MovieCard 
      id= '354920'
      title= "Han Solo"
      date='2019/10/28'
      poster={`http://image.tmdb.org/t/p/w1280`} 
      movie
      isFavorite
      toggleFav
      user
      refreshFavs
    />)
    // Expectation
    expect(wrapper).toMatchSnapshot()
  });
  
  it('should call toggleFav when isFavorite is true', () => {

    const mockEvent = { preventDefault: jest.fn() }

    favoriteWrapper.find('button').simulate('click', mockEvent)

    expect(toggleFav).toHaveBeenCalled();
  });
  
})