import * as types from './actionTypes';

export function signInUser() {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(this.onLoginSuccess.bind(this))
        .catch(() => {
            firebase.auth().createUserWithEmailAndPassword(email, password)
                .then(this.onLoginSuccess.bind(this))
                .catch(this.onLoginFail.bind(this));
        });
}

export function signInUserSuccess(user) {
    return { type: types.SIGN_IN_USER_SUCCESS, user };
}

export function signInUserFail() {
    return { type: types.SIGN_IN_USER_FAIL, user: null };
}