import authReducer from './auths';
import { combineReducers } from 'redux';

import {firebaseReducer, firestoreReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auths: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer