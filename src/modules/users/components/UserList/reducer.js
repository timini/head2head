import actions from './actions';
import * as UserCard from '../UserCard';
import { camelize } from 'humps';

export const initialState = [];

const loose = (a, b) => a == b;


export default function reducer(state = initialState, action = {}) {
  const { type = '', payload = {}, meta = {} } = action;
  console.log(actions);
  switch (true) {
    case loose(actions.addUser, type):
      return state.concat(
        [UserCard.reducer(undefined, UserCard.actions.init(payload))]
      );
    case loose(actions.removeUser, type):
      return state.filter(
        userCardState => userCardState.data.email !== payload.email
      );
    case loose(actions.expandAll, type):
      return state.map(
        userCardState => UserCard.reducer(userCardState, UserCard.actions.expand())
      );
    case loose(actions.collapseAll, type):
      return state.map(
        userCardState => UserCard.reducer(userCardState, UserCard.actions.collapse())
      );
    default:
      return state.map((userCardState, index) => {
        if (meta.userId === UserCard.selectors.getUserId(userCardState)) {
          return UserCard.reducer(userCardState, UserCard.actions[camelize(type)](payload))
        }
        return userCardState;
      });
  }
}
