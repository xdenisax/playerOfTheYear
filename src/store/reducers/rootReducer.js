import authReducer from './authReducer.js';
import matchReducer from './matchReducer.js';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';

const rootReducer = combineReducers({
    auth: authReducer,
    match: matchReducer, 
    firestore: firestoreReducer

});

export default rootReducer;