import config from '../config';
import { actionTypes } from '../constants';

function signingIn() {
  return {
    type: actionTypes.SIGNING_IN,
  };
}

function signInError(error) {
  return {
    type: actionTypes.SIGN_IN_ERROR,
    data: { error },
  };
}

function signedIn(jwt) {
  return {
    type: actionTypes.SIGNED_IN,
    data: { jwt },
  };
}

export function signIn(username, password) {
  return dispatch => {
    dispatch(signingIn());

    const body = {
      connection: 'Username-Password-Authentication',
      client_id: config.Auth0.CLIENT_ID,
      grant_type: 'password',
      scope: 'openid',
      username,
      password,
    };

    const options = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
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

function signingOut() {
  return {
    type: actionTypes.SIGNING_OUT,
  };
}

function signedOut() {
  return {
    type: actionTypes.SIGNED_OUT,
  };
}

export function signOut() {
  return dispatch => {
    dispatch(signingOut());
    fetch(`https://${config.Auth0.DOMAIN}/logout`)
      .then(dispatch(signedOut()));
  };
}

function changingPassword() {
  return {
    type: actionTypes.CHANGING_PASSWORD,
  };
}

function changePasswordError() {
  return {
    type: actionTypes.CHANGE_PASSWORD_ERROR,
    data: { error },
  };
}

function changedPassword() {
  return {
    type: actionTypes.CHANGED_PASSWORD,
  };
}

export function changePassword(email, password) {
  return dispatch => {
    dispatch(changingPassword());

    const body = {
      connection: 'Username-Password-Authentication',
      client_id: config.Auth0.CLIENT_ID,
      email,
      password,
    };

    const options = {
      method: 'post',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(body),
    };

    fetch(`https://${config.Auth0.DOMAIN}/dbconnections/change_password`, options)
      .then(res => res.json())
      .then(json => {
        if (!!json.error || !!json.code) {
          dispatch(changePasswordError(json));
        } else {
          dispatch(changedPassword());
        }
      });
  }
}
