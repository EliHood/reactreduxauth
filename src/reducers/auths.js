
const initialState = {
    emailSignUp: '',
    passwordSignUp: '',
    authError: null

}

export default (state = initialState, action) => {
    switch (action.type) {
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