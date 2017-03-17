import { prop, compose } from 'ramda';
import NAME from './constants';


export const getModel = prop(NAME);

export const getUsers = compose(
  prop('users'),
  getModel,
);

export const getFollowers = compose(
  prop('followers'),
  getModel,
);

export const getFriends = compose(
  prop('friends'),
  getModel,
);
