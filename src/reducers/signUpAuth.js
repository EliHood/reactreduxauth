import { PASSWORD_SIGN_UP_CHANGE, EMAIL_SIGN_UP_CHANGE, EMPTY_SIGN_UP_EMAIL, EMPTY_SIGN_UP_PASSWORD} from '../actions';

const initialState = {
    emailSignUp: '',
    passwordSignUp: '',
    errorTextEmailSignUp: '',
    errorTextPasswordSignUp: ''

}

export default (state = initialState, action) => {
    switch (action.type) {
        case EMAIL_SIGN_UP_CHANGE:
            return {
                ...state,
                _email: action.email
            }
        case PASSWORD_SIGN_UP_CHANGE:
            return {
                ...state,
                _password: action.password
            }
        case EMPTY_SIGN_UP_EMAIL:
            return {
                ...state,
                errorTextEmailSignUp: 'This field is required'
            }
        case EMPTY_SIGN_UP_PASSWORD:
            return {
                ...state,
                errorTextPasswordSignUp: 'This field is required'
            }
        default:
            return state
    }
}