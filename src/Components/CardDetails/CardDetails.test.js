import React from 'react';
import { shallow } from 'enzyme';
import CardDetails from './CardDetails';

describe ('CardDetails', () => {
  let wrapper;
  it('should match the snapshot with all data passed in correctly', () => {
     wrapper = shallow(<CardDetails 
      title = 'Joker'
      releaseDate= 'Oct 04 2019'
      overview= 'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.'
      vote_average= '8.6'
      />)

    expect(wrapper).toMatchSnapshotO();

  });
})
