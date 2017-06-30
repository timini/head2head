import actions from './actions';
import * as UserList from './components/UserList';
import update from 'immutability-helper';
import { contains } from 'ramda';


export const initialState = {
  users: UserList.initialState,
  followers: UserList.initialState,
  friends: UserList.initialState,
}

export default (state = initialState, action = {}) => {
  const { type = '', payload = {}, meta = {} } = action;

  if (contains(meta.list, Object.keys(state))) {
    return update(state, {
      $merge: {
        [meta.list]: UserList.reducer(state[meta.list], action)
      }
    });
  }
  return state;
};
