import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './container/App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux';
import rootReducer from './store/reducers/rootReducer.js';
import thunk from 'redux-thunk';
import { getFirestore, reduxFirestore, createFirestoreInstance } from 'redux-firestore';
import { Provider , useSelector} from 'react-redux'
import {ReactReduxFirebaseProvider,getFirebase, isLoaded } from 'react-redux-firebase';
import { db } from './firebase/firebaseConfig';
import firebase from 'firebase/app';

const store = createStore( rootReducer, 
  compose(
    applyMiddleware(thunk.withExtraArgument({ getFirestore, getFirebase })),
    reduxFirestore( firebase, db),
  )
);

const profileSpecificProps = {
  userProfile: 'users',
  useFirestoreForProfile: true,
  enableRedirectHandling: false,
  resetBeforeLogin: false
}

const dbProps = {
  firebase,
  config: db,
  dispatch: store.dispatch,
  config: profileSpecificProps,
  createFirestoreInstance
}

function AuthIsLoaded({ children }) {
  const auth = useSelector(state => state.firebase.auth)
  if (!isLoaded(auth)) return <div>Loading Screen...</div>;
      return children
}

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}> 
      <ReactReduxFirebaseProvider {...dbProps}>
        <AuthIsLoaded>
         <App />
        </AuthIsLoaded>
      </ReactReduxFirebaseProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

serviceWorker.unregister();
