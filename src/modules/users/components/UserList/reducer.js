import * as actions from './actions';
import * as UserCard from '../UserCard';

export const initialState = [];

export default function reducer(state = initialState, { action, action: { payload }}) {
  switch (action.type) {
    case actions.ADD_USER:
      return state.concat(
        [UserCard.reducer(undefined, UserCard.actions.init(payload))]
      );
    case actions.REMOVE_USER:
      return state.filter(
        userCardState => userCardState.data.email !== payload.email
      );
    case actions.EXPAND_USER:
      return state.map((userCardState, index) => {
        if (payload.userId === index) {
          return UserCard.reducer(userCardState, UserCard.actions.expand())
        }
        return userCardState;
      });
    case actions.COLLAPSE_USER:
      return state.map((userCardState, index) => {
        if (payload.userId === index) {
          return UserCard.reducer(userCardState, UserCard.actions.collapse())
        }
        return userCardState;
      });
    case actions.EXPAND_ALL:
      return state.map(
        userCardState => UserCard.reducer(userCardState, UserCard.actions.expand())
      );
    case actions.COLLAPSE_ALL:
      return state.map(
        userCardState => UserCard.reducer(userCardState, UserCard.actions.collapse())
      );
  }
}
