import config from '../config';
import * as actionTypes from '../constants/actionTypes';

// Sign in actions

function signingIn() {
  return { type: actionTypes.SIGNING_IN };
}

function signInError(error) {
  return { type: actionTypes.SIGN_IN_ERROR, error };
}

function signedIn(jwt) {
  return { type: actionTypes.SIGNED_IN, jwt };
}

export function signIn(username, password) {
  return dispatch => {
    dispatch(signingIn());

    const options = {
      connection: 'Username-Password-Authentication',
      client_id: config.Auth0.CLIENT_ID,
      grant_type: 'password',
      scope: 'openid',
      username,
      password,
    };

    fetch(`https://${config.Auth0.DOMAIN}/oauth/ro`, options)
      .then(res => res.json())
      .then(json => {
        if (!!json.error) {
          dispatch(signInError(json));
        } else {
          dispatch(signedIn(json.id_token));
        }
      });
  };
}

// Sign out actions

export function signOut() {
  return { type: actionTypes.SIGN_OUT };
}
