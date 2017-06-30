import { prop, compose } from 'ramda';

export const getUser = prop('data');

export const getUserId = compose(
  prop('userId'),
  getUser,
);
