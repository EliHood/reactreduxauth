import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import thunk from 'redux-thunk'
import fbConfig from './firebaseConfig';
import { BrowserRouter as Router } from 'react-router-dom';
import { reactReduxFirebase, getFirebase } from 'react-redux-firebase'
import { reduxFirestore, getFirestore } from 'redux-firestore';
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);

const store = createStore(rootReducer,
    compose(
        applyMiddleware(thunk.withExtraArgument({ getFirebase, getFirestore })),
        reactReduxFirebase(fbConfig, {useFirestoreForProfile: true, userProfile: 'users' ,attachAuthIsReady: true}),
        reduxFirestore(fbConfig)
    ) 
)



store.firebaseAuthIsReady.then(() => {
    ReactDOM.render(
        <Provider store={store}>
        <Router >
        <App />
        </Router>
        </Provider>
        
    ,document.getElementById('root'));
})



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
