import actions from './actions';

export const initialState = {
  ui: { isCollapsed: true },
  data: {}
}

const loose = (a, b) => a == b;

export default (state = initialState, action = {}) => {
  const { type = '', payload = {}, meta = {} } = action;
  switch (true) {
    case loose(actions.init, type):
      return {
        ui: { isCollapsed: state.ui.isCollapsed },
        data: payload, 
      };
    case loose(actions.toggle, type):
      return {
        ui: { isCollapsed: !state.ui.isCollapsed },
        data: state.data,
      };
    case loose(actions.expand, type):
      return {
        ui: { isCollapsed: false },
        data: state.data,
      };
    case loose(actions.collapse, type):
      return {
        ui: { isCollapsed: true },
        data: state.data,
      };
    default:
      return state;
  }
}
