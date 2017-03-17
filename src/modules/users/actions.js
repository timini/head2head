import { UserList } from './components';
import { createActions } from 'redux-actions';
import NAME from './constants';
import actionWrapper from 'redux-action-wrapper';


const identity = args => args;

const actions =  createActions({
  [NAME]: {
    ADD_USER_TO_LIST: identity,
    REMOVE_USER_FROM_LIST: identity,
    EXPAND_LIST: identity,
    COLLAPSE_LIST: identity,
  }
});

export default actions;


export const bindActions = (dispatch) => actionWrapper(
  {
    ...actions.users,
    userList: UserList.actions,
  },
  dispatch
);
