import { user } from './user';

describe('user', () => {

  it('should return the initial state', () => {
    const expected = null;
    const result = user(undefined, {})
    expect(result).toEqual(expected);
  });

  it('should return state when SET_USER is the type', () => {
    const userState = {id: 2, name: "Alex", email: "alex@gmail.com"}
    const action = {
      type: 'SET_USER',
      user: userState
    };
    const expected = {id: 2, name: "Alex", email: "alex@gmail.com"};
    const result = user(userState, action);
    expect(result).toEqual(expected)
  })
})