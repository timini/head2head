import NAME from './constants';
import { createActions } from 'redux-actions';

const actionMap = {};

const identityActions = [
  `${NAME}-INIT`,
  `${NAME}-TOGGLE`,
  `${NAME}-EXPAND`,
  `${NAME}-COLLAPSE`,
];

export default createActions(actionMap, ...identityActions);
