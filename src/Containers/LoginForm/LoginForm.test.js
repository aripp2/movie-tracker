import React from 'react';
import { shallow } from 'enzyme';
import { LoginForm, mapStateToProps, mapDispatchToProps } from './LoginForm';
import { submitUser } from '../../actions/index';

describe('LoginForm', () => {
  let wrapper, mockUser, mockValid;

  beforeEach(() => {
    mockUser = null;
    mockValidUser = jest.fn();

    wrapper = shallow(<LoginForm
      user={mockUser}
      validUser={mockValidUser}
      />);

  });
});