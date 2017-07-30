import { select, combineEpics } from 'redux-most';
import r from 'ramda';
import * as most from 'most';
import { OPEN, CLOSE, NAVIGATE } from './signals';
import { opened, closed } from './messages';

const curry2 = r.curryN(2);
const mmapc = curry2(most.map);

export const openEpic = (actions$) => r.pipe(
  select(OPEN),
  mmapc((action) => opened(action.payload)),
)(actions$);

export const closeEpic = (actions$) => r.pipe(
  select(CLOSE),
  mmapc((action) => closed(action.payload)),
)(actions$);

export const rootEpic = () => combineEpics([
  openEpic,
  closeEpic,
]);