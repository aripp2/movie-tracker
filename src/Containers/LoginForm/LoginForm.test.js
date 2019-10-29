import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';
import { setUser } from '../../actions/index';

describe('LoginForm', () => {
  let wrapper, mockUser, mockValidUser;

  beforeEach(() => {
    mockUser = null;
    mockValidUser = jest.fn();

    wrapper = shallow(<LoginForm
      user={mockUser}
      validUser={mockValidUser}
      />);

  });

  it('should match teh snapshot with all the data passed in correctly', () => {

    expect(wrapper).toMatchSnapshot();
  });

  it('should update state on a change in an input', () => {

    const mockEvent = {target: {name: 'email', value: 'alan@turing.io'}}

    wrapper.find('input').at(0).simulate('change', mockEvent);

    expect(wrapper.state('email')).toEqual('alan@turing.io')
  });

  it('should update state on a change in an input', () => {

    const mockEvent = { target: { name: 'password', value: 'password' } }
   
    wrapper.find('input').at(1).simulate('change', mockEvent);

    expect(wrapper.state('password')).toEqual('password');
  });

  

  it('should update the state when clearInputs is called', () => {

    const expected = '';

    wrapper.setState({
      email: 'alan@turing.io',
      password: 'password',
    });

    wrapper.instance().clearInputs();

    expect(wrapper.state('email')).toEqual(expected);
    expect(wrapper.state('password')).toEqual(expected);
  });

});