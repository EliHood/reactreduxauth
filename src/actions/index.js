import { auth as firebaseAuth } from '../firebaseConfig'
import {fire} from '../firebaseConfig'
import { history } from '../components/Navbar';

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

export const createPost = (post) => {
    return (dispatch, getState) => {
        // async call to the database
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth;
        fire.collection('posts').add({
            description: post.description,
            username: post.username,
            createdAt: new Date()
        }).then(() => {
            dispatch({type: 'CREATE_POST', post})
        }).catch((err) => {
            dispatch({type: 'CREATE_POST_ ERROR', err})
        })
    }
}


const _getPosts = (posts) => ({
    type: 'GET_POSTS',
    posts
})

export const getPosts = () => { return(dispatch) =>{
    return fire.collection('posts').get().then(snapshot => {
        const posts = [];

        snapshot.forEach(item => {
            posts.push(item.data());
        });

        // console.log(posts)

        dispatch(_getPosts(posts));
    })

 }
}
