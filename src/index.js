import reducer from './reducer';
import * as signals from './signals';
import * as messages from './messages';
import { rootEpic } from './epics';
import ConnectedModalRouter from './components/ConnectedModalRouter';

export {
  reducer,
  signals,
  messages,
};

export const epic = rootEpic();
export const ModalRouter = ConnectedModalRouter;
