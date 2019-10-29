import React from 'react';
import { shallow } from 'enzyme';
import CreateAccount from './CreateAccount';
import { addUser } from '../../utils/apiCalls';
jest.mock('../../utils/apiCalls');

describe('CreateAccount', () => {
  let wrapper;
  const mockNameEvent = {
    target: {
      name: 'name',
      value: 'Amy'
    }
  };
  const mockEmailEvent = {
    target: {
      name: 'email',
      value: 'amy@email.com'
    }
  };
  const mockPasswordEvent = {
    target: {
      name: 'password',
      value: 'password'
    }
  };

  beforeEach(() => {
    wrapper = shallow(<CreateAccount />)
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should update state when change happens', () => {
    wrapper.instance().handleChange(mockNameEvent);
    expect(wrapper.state('name')).toEqual('Amy');
    wrapper.instance().handleChange(mockEmailEvent);
    expect(wrapper.state('email')).toEqual('amy@email.com');
    wrapper.instance().handleChange(mockPasswordEvent);
    expect(wrapper.state('password')).toEqual('password');
  });

  it('should reset state when clearInputs is called', () => {
    const mockState = {
      name: 'Amy',
      email: 'amy@email.com',
      password: 'password',
      error: '',
      success: false
    };
    const expected = {
      name: '',
      email: '',
      password: '',
      error: '',
      success: false
    }
    wrapper.instance().setState(mockState);
    expect(wrapper.state()).toEqual(mockState );
    wrapper.instance().clearInputs();
    expect(wrapper.state()).toEqual(expected);
  });

  it('should call createAccount when button is clicked', () => {
    wrapper.instance().createAccount = jest.fn();
    wrapper.instance().forceUpdate();
    wrapper.find('button').simulate('click');
    expect(wrapper.instance().createAccount).toHaveBeenCalled();
  });
});