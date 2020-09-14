import { combineEpics } from 'redux-most';
import { OPEN, CLOSE, NAVIGATE } from './signals';
import { opened, closed, navigated } from './messages';

export const openEpic = (actions$) => actions$
  .filter((action) => action.type === OPEN)
  .map((action) => opened(action.payload));

export const closeEpic = (actions$) => actions$
  .filter((action) => action.type === CLOSE)
  .map(() => closed());

export const navigateEpic = (actions$) => actions$
  .filter((action) => action.type === NAVIGATE)
  .map((action) => navigated(action.payload));

export const rootEpic = combineEpics([
  openEpic,
  closeEpic,
  navigateEpic,
]);
