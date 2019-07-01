import { select, combineEpics } from 'redux-most';
import * as r from 'ramda';
import * as most from 'most';
import { OPEN, CLOSE, NAVIGATE } from './signals';
import { opened, closed, navigated } from './messages';

const curry2 = r.curryN(2);
const mmapc = curry2(most.map);

export const openEpic = (actions$) => r.pipe(
  select(OPEN),
  mmapc((action) => opened(action.payload)),
)(actions$);

export const closeEpic = (actions$) => r.pipe(
  select(CLOSE),
  mmapc((action) => closed()),
)(actions$);

export const navigateEpic = (actions$) => r.pipe(
  select(NAVIGATE),
  mmapc((action) => navigated(action.payload)),
)(actions$);

export const rootEpic = combineEpics([
  openEpic,
  closeEpic,
  navigateEpic,
]);
