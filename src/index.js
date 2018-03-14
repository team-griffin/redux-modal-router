import reducer from './reducer';
import * as signals from './signals';
import * as messages from './messages';
import * as selectors from './selectors';
import { rootEpic } from './epics';
import { REDUCER_MOUNT_POINT } from './constants';
import ConnectedModalRoute from './components/ConnectedModalRoute';
import middleware from './middleware';

export {
  reducer,
  signals,
  messages,
  selectors,
  REDUCER_MOUNT_POINT,
  middleware,
};

export const epic = rootEpic;
export const ModalRoute = ConnectedModalRoute;