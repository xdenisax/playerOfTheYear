import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer.js';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import { getFirebase, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { db } from './firebase/firebaseConfig';
import firebase, { firestore } from 'firebase/app';

const store = createStore( rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore( firebase, db)
  )
);

  const dbProps = {
    firebase,
    config: db,
    dispatch: store.dispatch,
    createFirestoreInstance 
  }

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <ReactReduxFirebaseProvider {...dbProps}>
        <App /> 
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
