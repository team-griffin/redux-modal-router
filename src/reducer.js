import { createReducer } from 'redux-create-reducer';
import { OPENED, CLOSED, NAVIGATED } from './messages';

export const initialState = {
  open: false,
  route: null,
  params: {},
};

export default createReducer(initialState, {
  [OPENED]: (state, action) => ({
    open: true,
    route: action.payload.route,
    params: action.payload.params,
  }),
  [CLOSED]: (state, action) => ({
    open: false,
    route: null,
    params: {},
  }),
  [NAVIGATED]: (state, action) => ({
    open: true,
    route: action.payload.route,
    params: action.payload.params,
  }),
});
