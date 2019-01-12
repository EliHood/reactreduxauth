import { SET_USER} from '../actions/';
import { actionTypes } from 'react-redux-firebase';
const initialState = {
    authError: null,
    isAuthenticated: false,
    userId: null,
    user: [],
    myPosts:[]
}

export default (state = initialState, action) => {
    switch (action.type) {
        case SET_USER:
            return ({
                ...state,
                userId: action.payload.uid || null,
                user:action.user,
                isAuthenticated: true
            })


        case 'LOGOUT_SUCCESS':
            console.log('signout success')
            return ({
                ...state,
                userId: null,
                isAuthenticated: false
            })   
        case 'GET_POSTS':
            return ({
                ...state,
                myPosts: action.posts
            })


        case 'CREATE_POST': 
            console.log('created post', action.post)
            return state;

        case 'CREATE_POST_ERROR':
            console.log('create post error', action.err)
            return state;   

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