import { reducer } from './modules';
import { createStore, applyMiddleware } from 'redux';
import createLogger from 'redux-logger'

const loggerOptions = {
  // TODO: https://github.com/evgenyrodionov/redux-logger#options
};

const logger = createLogger(loggerOptions);

export default (initialState) => {
  return createStore(reducer, applyMiddleware(logger), initialState);
};
