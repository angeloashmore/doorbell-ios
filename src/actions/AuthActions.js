import config from '../config';
import * as actionTypes from '../constants/actionTypes';

// Sign in actions

export function signingIn() {
  return { type: actionTypes.SIGNING_IN };
}

export function signInError(error) {
  return { type: actionTypes.SIGN_IN_ERROR, error };
}

export function signedIn(jwt) {
  return { type: actionTypes.SIGNED_IN, jwt };
}

export function signIn(email, password) {
  return dispatch => {
    dispatch(signingIn());

    const options = {
      connection: 'Username-Password-Authentication',
      client_id: config.Auth0.CLIENT_ID,
      username: email,
      password,
      grant_type: 'password',
      scope: 'openid',
    };

    fetch(`${config.Auth0.DOMAIN}/v2/oauth/ro`, options)
      .then(res => res.json())
      .then(json => dispatch(signedIn({ jwt: json.id_token })));
  };
}

// Sign out actions

export function signOut() {
  return { type: actionTypes.SIGN_OUT };
}
