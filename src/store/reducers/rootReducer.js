import authReducer from './authReducer.js';
import matchReducer from './matchReducer.js';
import gameReducer from './gameReducer.js';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore';
import { firebaseReducer } from 'react-redux-firebase';
import playerReducer from './playerReducer.js';

const rootReducer = combineReducers({
    auth: authReducer,
    match: matchReducer, 
    player: playerReducer,
    game: gameReducer,
    firestore: firestoreReducer,
    firebase: firebaseReducer
});

export default rootReducer;