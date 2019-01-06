import authReducer from './auths';
import { combineReducers } from 'redux';
import auth, { initAuthStateListening } from './auth'
import {firebaseReducer } from 'react-redux-firebase';


const rootReducer = combineReducers({
    auths: authReducer,
    firebase: firebaseReducer
})

export default rootReducer