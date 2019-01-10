import authReducer from './auths';
import { combineReducers } from 'redux';
import { firestoreReducer } from 'redux-firestore'
import {firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auths: authReducer,
    firebase: firebaseReducer,
    firestore: firestoreReducer
})

export default rootReducer