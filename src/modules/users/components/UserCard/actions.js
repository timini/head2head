import { createActions } from 'redux-actions';
import { identity, map  } from 'ramda';
import { actionWithMeta } from 'utils/actions';

export default map(actionWithMeta,
  createActions({
    INIT: identity,
    TOGGLE: identity,
    EXPAND: identity,
    COLLAPSE: identity,
  }),
);
