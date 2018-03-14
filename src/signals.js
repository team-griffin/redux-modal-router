import { createAction } from 'redux-actions';

const prefix = '@@team-griffin/redux-modal-router/S_';

// Types
export const OPEN = prefix + 'OPEN';
export const CLOSE = prefix + 'CLOSE';
export const NAVIGATE = prefix + 'NAVIGATE';

// Creators
export const open = createAction(OPEN);
export const close = createAction(CLOSE);
export const navigate = createAction(NAVIGATE);
