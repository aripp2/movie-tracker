import { combineReducers } from 'redux';
import { movies } from './movies';
import { errorMsg } from './errorMsg';
import { user } from './user';
import { favorites } from './favorites';

export const rootReducer = combineReducers({
  movies,
  errorMsg,
  user,
  favorites
});