import { SET_USER} from '../actions/';
import { CurrentUser, getUser} from "../actions";

const initialState = {
    authError: null,
    isAuthenticated: false,
    userId: null,
    user: {}
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return ({
                userId: action.payload.uid || null,
                // user:action.payload,
                isAuthenticated: true
            })
        case 'LOGOUT_SUCCESS':
            console.log('signout success')
            return ({
                ...state,
                userId: null,
                isAuthenticated: false
            })    

        case 'SIGNUP_SUCCESS':      
            return ({
                ...state,
                authError: null
            })

        case 'SIGNUP_ERROR':
            console.log('signup error')
            return ({
                ...state,
                authError: action.err.message
            })

        case 'SIGNIN_SUCCESS':
            console.log('signin success')
            return ({
                ...state,
                authError: null
            })

        case 'SIGNIN_ERROR':
            console.log('signin error')
            return ({
                ...state,
                authError: action.err.message
            })
        default:
            return state
    }
}