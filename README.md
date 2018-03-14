# redux-modal-router

```sh
yarn add @team-griffin/redux-modal-router

npm i --save @team-griffin/redux-modal-router
```

## Usage
```jsx
import { ModalRoute } from '@team-griffin/redux-modal-router';

const openFoo = () => store.dispatch(signals.open({
  route: 'FOO',
  params: {
    text: 'Hello World, I am FOO!',
  },
}));

const openBar = () => store.dispatch(signals.open({
  route: 'BAR',
}));

return (
  <div>
    <div>
      <ModalRoute path="FOO" render={({
        closeModal,
        params,
      }) => (
        <Modal
          isOpen={true}
          onRequestClose={closeModal}
        >
          <div>
            {params.text}
          </div>
        </Modal>
      )}/>
    </div>

    <ModalRoute path="BAR" render={({ closeModal }) => (
      <Modal
        isOpen={true}
        onRequestClose={closeModal}
      >
        <div>Hello World, I am BAR!</div>
      </Modal>
    )}/>

    <button type="button" onClick={openFoo}>
      Open FOO
    </button>

    <button type="button" onClick={openBar}>
      Open BAR
    </button>
  </div>
);
```

## Setup

### Method 1 - As an isolated middleware
```jsx
import {
  reducer as modalReducer,
  middleware,
  REDUCER_MOUNT_POINT,
} from '@team-griffin/redux-modal-router';

const reducer = combineReducers({
  [REDUCER_MOUNT_POINT]: modalReducer,
});

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      middleware,
    ),
  )
);
```

### Method 2 - As an redux-most epic
```jsx
import {
  reducer as modalReducer,
  epic,
  REDUCER_MOUNT_POINT,
} from '@team-griffin/redux-modal-router';

const epicMiddleware = createEpicMiddleware(combineEpics([
  epic,
]));

const reducer = combineReducers({
  [REDUCER_MOUNT_POINT]: modalReducer,
});

const store = createStore(
  reducer,
  composeEnhancers(
    applyMiddleware(
      epicMiddleware,
    ),
  )
);
```