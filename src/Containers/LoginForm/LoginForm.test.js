import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';
import * as actions from '../../actions';
import { postUser, getFavorites } from '../../utils/apiCalls';
jest.mock('../../utils/apiCalls');


describe('LoginForm', () => {
  let wrapper;


  beforeEach(() => {
    wrapper = shallow(<LoginForm 

      />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })


});