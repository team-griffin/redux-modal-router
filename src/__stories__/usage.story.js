import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ModalRoute, reducer as modalReducer, epic, signals, REDUCER_MOUNT_POINT, middleware } from '../';
import {
  createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import { Provider } from 'react-redux';
import Modal from 'react-modal';
import { composeWithDevTools } from 'redux-devtools-extension';

storiesOf('Usage', module)
  .add('default', () => {
    const reducer = combineReducers({
      [REDUCER_MOUNT_POINT]: modalReducer,
    });

    const store = createStore(
      reducer,
      composeWithDevTools(
        applyMiddleware(
          middleware,
        ),
      )
    );

    const openFoo = () => store.dispatch(signals.open({
      route: 'FOO',
    }));

    const openBar = () => store.dispatch(signals.open({
      route: 'BAR',
    }));

    const navigateToBar = () => store.dispatch(signals.navigate({
      route: 'BAR',
    }));

    return (
      <Provider store={store}>
        <div>
          <ModalRoute path="FOO" render={({ closeModal }) => (
            <Modal
              isOpen={true}
              onRequestClose={closeModal}
            >
              <div>
                Hello World, I am FOO!
                <button type="button" onClick={navigateToBar}>
                  Goto BAR
                </button>
              </div>
            </Modal>
          )}/>

          <button type="button" onClick={openFoo}>
            Open FOO
          </button>

          <ModalRoute path="BAR" render={({ closeModal }) => (
            <Modal
              isOpen={true}
              onRequestClose={closeModal}
            >
              <div>Hello World, I am BAR!</div>
            </Modal>
          )}/>
          <button type="button" onClick={openBar}>
            Open BAR
          </button>
        </div>
      </Provider>
    );
  });