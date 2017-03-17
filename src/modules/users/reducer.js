import * as actions from './actions';
import * as UserList from './components/UserList';
import update from 'immutability-helper';
import { startCase } from 'lodash';
import { contains, values } from 'ramda';

export const initialState = {
  users: UserList.initialState,
  followers: UserList.initialState,
  friends: UserList.initialState,
}

export default (state = initialState, { action, action: { type, payload, meta }}) => {
  switch (type) {
    case actions.ADD_USER_TO_LIST:
      return update(state, {
        $merge: {
          [payload.list]: UserList.reducer(state[payload.list], UserList.actionCreators.addUser(payload)),
        }
      });
    case actions.REMOVE_USER_FROM_LIST:
      return update(state, {
        $merge: {
          [payload.list]: UserList.reducer(state[payload.list], UserList.actionCreators.removeUser(payload)),
        }
      });
    case actions.EXPAND_LIST:
      return update(state, {
        $merge: {
          [payload.list]: UserList.reducer(state[payload.list], UserList.actionCreators.expandAll(payload)),
        }
      });
    case actions.COLLAPSE_LIST:
      return update(state, {
        $merge: {
          [payload.list]: UserList.reducer(state[payload.list], UserList.actionCreators.collapseAll(payload)),
        }
      });
    default:
      return state;
        
  }
};
