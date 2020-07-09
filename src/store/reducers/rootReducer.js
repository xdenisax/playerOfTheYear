import authReducer from './authReducer.js';
import matchReducer from './matchReducer.js';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';

const rootReducer = combineReducers({
    auth: authReducer,
    match: matchReducer, 
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;