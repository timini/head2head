import NAME from './constants';
import { createActions } from 'redux-actions';

const actionMap = {};

const identityActions = [
  `${NAME}-ADD_USER`,
  `${NAME}-REMOVE_USER`,
  `${NAME}-EXPAND_USER`,
  `${NAME}-COLLAPSE_USER`,
  `${NAME}-EXPAND_ALL`,
  `${NAME}-COLLAPSE_ALL`,
];

export default createActions(actionMap, ...identityActions);
