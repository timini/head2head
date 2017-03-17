import { reducer } from './modules';
import {createStore} from 'redux';

export default (initialState) => {
  return createStore(reducer, initialState);
};
