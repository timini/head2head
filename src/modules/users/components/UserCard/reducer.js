import * as actions from './actions';

export const initialState = {
  ui: { isCollapsed: true },
  data: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actions.INIT:
      return {
        ui: { isCollapsed: state.ui.isCollapsed },
        data: action.user, 
      };
    case actions.TOGGLE:
      return {
        ui: { isCollapsed: !state.ui.isCollapsed },
        data: state.data,
      };
    case actions.EXPAND:
      return {
        ui: { isCollapsed: false },
        data: state.data,
      };
    case actions.COLLAPSE:
      return {
        ui: { isCollapsed: true },
        data: state.data,
      };
    default:
      return state;
  }
}
