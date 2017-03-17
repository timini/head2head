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

const getActionName = name => {
  const parts = name.split('/');
  const clean = startCase(parts[parts.length-1].toLowerCase()).replace(' ', '');
  return clean.charAt(0).toLowerCase() + clean.slice(1);
}

export default (state = initialState, action) => {
  const list = action.list;
  console.debug(action);
  if (contains(action.type, values(UserList.actions))) {
    console.log(getActionName(action.type));
    return update(state, {
      $merge: {
        [list]: UserList.reducer(state[list], UserList.actionCreators[getActionName(action.type)](action.userId)),
      }
    })
  }
  switch (action.type) {
    case actions.ADD_USER_TO_LIST:
      return update(state, {
        $merge: {
          [list]: UserList.reducer(state[list], UserList.actionCreators.addUser(action.user)),
        }
      });
    case actions.REMOVE_USER_FROM_LIST:
      return update(state, {
        $merge: {
          [list]: UserList.reducer(state[list], UserList.actionCreators.removeUser(action.user)),
        }
      });
    case actions.EXPAND_LIST:
      return update(state, {
        $merge: {
          [list]: UserList.reducer(state[list], UserList.actionCreators.expandAll()),
        }
      });
    case actions.COLLAPSE_LIST:
      return update(state, {
        $merge: {
          [list]: UserList.reducer(state[list], UserList.actionCreators.collapseAll()),
        }
      });
    default:
      return state;
        
  }
};
