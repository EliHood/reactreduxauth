import { auth as firebaseAuth } from '../firebaseConfig'
import { push } from 'react-router-redux';
import { history } from '../components/Navbar';

export const signUp = (user) => { return (dispatch) => {
    firebaseAuth.createUserWithEmailAndPassword(user.email, user.password)
        .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' })
        }).then((response) => {
            history.push('/');
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err});
        });

 
    }
    
}

export const signIn = (user) => { return (dispatch) => {

        firebaseAuth.signInWithEmailAndPassword(user._email, user._password)
            .then(() =>  dispatch({ type: 'SIGNUP_SUCCESS' }))
                .catch( function (error) {
                        let errorCode = error.code;
                        let errorMessage = error.message;
                        alert(errorMessage)
                });
    
    
    
        }
        
}

    