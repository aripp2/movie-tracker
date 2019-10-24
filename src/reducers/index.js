import { combineReducers } from 'redux';
import { movies } from './movies';
import { errorMsg } from './errorMsg';
import { user } from './user';

export const rootReducer = combineReducers({
  movies,
  errorMsg,
  user
});