import { errorMsg } from './errorMsg';

describe('errorMsg', () => {

  it('should return the initial state', () => {
    //setup
    const expected = '';
    //execution
    const result = errorMsg(undefined, '')
    //expectation
    expect(result).toEqual(result)
  })

  it('should return state with a new error message', () => {
    const action = {
      type: 'THROW_ERROR',
      errorMsg: 'error'
    }
    const expected = 'error';
    const result = errorMsg('', action);
    expect(result).toEqual(expected)
  })

})