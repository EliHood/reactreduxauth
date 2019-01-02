import authReducer from './signUpAuth';
import { combineReducers } from 'redux';
import auth, { initAuthStateListening } from './auth'


const rootReducer = combineReducers({
    signUpAuth: authReducer,
    auth
})

export default rootReducer