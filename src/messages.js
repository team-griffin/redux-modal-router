import { createAction } from 'redux-actions';

const prefix = '@@team-griffin/redux-modal-router/M_';

// Types
export const OPENED = prefix + 'OPENED';
export const CLOSED = prefix + 'CLOSED';
export const NAVIGATED = prefix + 'NAVIGATED';

// Creators
export const opened = createAction(OPENED);
export const closed = createAction(CLOSED);
export const navigated = createAction(NAVIGATED);
