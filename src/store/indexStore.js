import { compose, createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
import { db } from '../firebase/firebaseConfig.js';
import firebase from 'firebase/app';
import  { getFirebase } from 'react-redux-firebase';
import { reduxFirestore, getFirestore, createFirestoreInstance } from 'redux-firestore';


const composeEnhancers = process.env.NODE_ENV === 'development' 
 ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
 : compose;

const profileSpecificProps = {
    userProfile: 'users',
    useFirestoreForProfile: true,
    enableRedirectHandling: false,
    resetBeforeLogin: false
}

export const store = createStore(
    rootReducer,
    composeEnhancers(
        reduxFirestore(firebase, db),
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })))
)


export const rrfProps = {
    firebase,
    config: db,
    config: profileSpecificProps,
    dispatch: store.dispatch,
    createFirestoreInstance
}
