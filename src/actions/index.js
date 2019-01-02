import { auth as firebaseAuth } from '../firebaseConfig'

export const EMAIL_SIGN_UP_CHANGE = 'EMAIL_SIGN_UP_CHANGE';
export const PASSWORD_SIGN_UP_CHANGE = 'PASSWORD_SIGN_UP_CHANGE';

export const onEmailSignUpChangeAction = value => ({
    type: EMAIL_SIGN_UP_CHANGE,
    email: value
})

export const onPasswordSignUpChangeAction = value => ({
    type: PASSWORD_SIGN_UP_CHANGE,
    password: value
})



export const onEmptySignUpEmailClick = () => ({
    type: 'EMPTY_SIGN_UP_EMAIL'
})

export const onEmptySignUpPasswordClick = () => ({
    type: 'EMPTY_SIGN_UP_PASSWORD'
})

export const signUp = () => (dispatch, getState) => {
    const {signUpAuth} = getState();
    if (signUpAuth.emailSignUp === '') {
        dispatch(onEmptySignUpEmailClick())
    }
    if (signUpAuth.passwordSignUp === '') { 
        dispatch(onEmptySignUpPasswordClick())
     }
    else {

        firebaseAuth.createUserWithEmailAndPassword(signUpAuth.emailSignUp, signUpAuth.passwordSignUp)
            .then(() => console.log('signUpok'))
                .catch( function (error) {
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        alert(errorMessage)
                });
            
   

    }

}



