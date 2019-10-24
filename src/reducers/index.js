import { combineReducers } from 'redux';
import { movies } from './movies';
import { errorMsg } from './errorMsg';

export const rootReducer = combineReducers({
  movies,
  errorMsg,
});