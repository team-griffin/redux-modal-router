import { REDUCER_MOUNT_POINT } from './constants';
import { createSelector } from 'reselect';
import * as r from 'ramda';

export const getModal = r.prop(REDUCER_MOUNT_POINT);

export const isOpen = createSelector(
  getModal,
  r.prop('open'),
);
