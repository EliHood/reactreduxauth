import { auth as firebaseAuth } from '../firebaseConfig'

export const EMAIL_SIGN_UP_CHANGE = 'EMAIL_SIGN_UP_CHANGE';
export const PASSWORD_SIGN_UP_CHANGE = 'PASSWORD_SIGN_UP_CHANGE';
export const EMPTY_SIGN_UP_EMAIL = 'EMPTY_SIGN_UP_EMAIL';
export const EMPTY_SIGN_UP_PASSWORD = 'EMPTY_SIGN_UP_PASSWORD';

export const onEmailSignUpChangeAction = value => ({
    type: EMAIL_SIGN_UP_CHANGE,
    email: value
})

export const onPasswordSignUpChangeAction = value => ({
    type: PASSWORD_SIGN_UP_CHANGE,
    password: value
})



export const onEmptySignUpEmailClick = () => ({
    type:  EMPTY_SIGN_UP_EMAIL
})

export const onEmptySignUpPasswordClick = () => ({
    type: EMPTY_SIGN_UP_PASSWORD
})

export const signUp = (user) => { return (dispatch) => {

    if (user.email === '') {
        dispatch( onEmptySignUpEmailClick())
    }
    else if (user.password === '') { 
        dispatch( onEmptySignUpPasswordClick())
    }
    else {
        firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
            .then(userInfo => userInfo )
                .catch( function (error) {
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        alert(errorMessage)
                });
    
    
    
        }
    }
}

export const signIn = (user) => { return (dispatch) => {

    if (user._email === '') {
        dispatch( onEmptySignUpEmailClick())
    }
    else if (user._password === '') { 
        dispatch( onEmptySignUpPasswordClick())
        }
    else {
        firebaseAuth.signInWithEmailAndPassword(user._email, user._password)
            .then(() =>  dispatch({ type: 'SIGNUP_SUCCESS' }))
                .catch( function (error) {
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        alert(errorMessage)
                });
    
    
    
        }
        }
    }

    