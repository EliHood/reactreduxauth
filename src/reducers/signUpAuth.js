import { PASSWORD_SIGN_UP_CHANGE, EMAIL_SIGN_UP_CHANGE} from '../actions';

const initialState = {
    emailSignUp: '',
    passwordSignUp: ''

}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_SIGN_UP_CHANGE:
            return {
                ...state,
                emailSignUp: action.email
            }
        case PASSWORD_SIGN_UP_CHANGE:
            return {
                ...state,
                passwordSignUp: action.password
            }
        default:
            return state
    }
}