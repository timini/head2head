import {combineReducers} from 'redux';
import {
  NAME as usersName,
  reducer as usersReducer,
  Users
} from './users'

const reducer = combineReducers({
  [usersName]: usersReducer
});

export {
  reducer,
  Users,
}
