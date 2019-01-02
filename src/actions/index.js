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

export const signUp = (email, password) => { return (dispatch) => {

    if (email === '') {
        dispatch({ type: EMPTY_SIGN_UP_EMAIL })
    }
    else if (password === '') { 
        dispatch({ type: EMPTY_SIGN_UP_PASSWORD })
     }
    else {
        firebaseAuth.createUserWithEmailAndPassword(email, password)
            .then(() => console.log('signUpok'))
                .catch( function (error) {
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        alert(errorMessage)
                });
    
    
    
        }
      }
    }

