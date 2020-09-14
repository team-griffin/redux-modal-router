import { REDUCER_MOUNT_POINT } from './constants';
import { createSelector } from 'reselect';

export const getModal = (state) => state[REDUCER_MOUNT_POINT];

export const isOpen = createSelector(
  getModal,
  (modal) => modal.open,
);
