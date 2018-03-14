import { createReducer } from 'redux-create-reducer';
import { OPENED, CLOSED, NAVIGATED } from './messages';
import { assoc, pipe } from 'ramda';

export const initialState = {
  open: false,
  route: null,
  params: {},
};

export default createReducer(initialState, {
  [OPENED]: (state, action) => pipe(
    assoc('open', true),
    assoc('route', action.payload.route),
    assoc('params', action.payload.params),
  )(state),
  [CLOSED]: (state, action) => pipe(
    assoc('open', false),
    assoc('route', null),
    assoc('params', {}),
  )(state),
  [NAVIGATED]: (state, action) => pipe(
    assoc('open', true),
    assoc('route', action.payload.route),
    assoc('params', action.payload.params),
  )(state),
});