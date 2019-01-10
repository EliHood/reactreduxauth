import { auth as firebaseAuth } from '../firebaseConfig'
import {fire} from '../firebaseConfig'
import { push } from 'react-router-redux';
import { history } from '../components/Navbar';
import { getFirebase } from 'react-redux-firebase';

export const SET_USER = "SET_USER";

export const signUp = (user) => { return (dispatch) => {
    firebaseAuth.createUserWithEmailAndPassword(user.email.trim(), user.password)
     .then(resp => {
            return fire.collection('users').doc(resp.user.uid).set({
              username:user.username,
              email: user.email,
              password: user.password,
              uid: resp.user.uid
             
            });
          })
        .then(() => {
            dispatch({ type: 'SIGNUP_SUCCESS' });
          })
        .then((response) => {
            history.push('/dashboard');
        }).catch((err) => {
            dispatch({ type: 'SIGNUP_ERROR', err});
        });

 
    }
    
}

export const signIn = (user) => { return (dispatch) => {

    firebaseAuth.signInWithEmailAndPassword(user.email, user.password)
        .then(()=> {
            dispatch({type: 'SIGNIN_SUCCESS'})
        }).then((response) => {
            history.push('/dashboard');
        }).catch( (err) => {
            dispatch({ type: 'SIGNIN_ERROR', err});
        });
    }
   
}

export const signOut = () => { return (dispatch) => {

        firebaseAuth.signOut().then(() => {
            dispatch({ type: 'LOGOUT_SUCCESS'})
        })
    }
}


export const CurrentUser = () => dispatch => {
    firebaseAuth.onAuthStateChanged((user) => {
        if (user) {
            dispatch({
                type: SET_USER, 
                payload: user
            })
        }
      });
    
}



