import { createActions } from 'redux-actions';
import { identity } from 'ramda';
import { actions as userCardActions } from '../UserCard';

const actions = {
  ...createActions({
    ADD_USER: identity,
    REMOVE_USER: identity,
    EXPAND_ALL: identity,
    COLLAPSE_ALL: identity,
  }),
  // userCard: userCardActions,
};

export default actions;
