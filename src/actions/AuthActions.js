import config from '../config';

const signingIn = () => ({
  name: 'SIGNING_IN',
});

const signInError = error => ({
  name: 'SIGN_IN_ERROR',
  data: { error },
});

const signedIn = jwt => ({
  name: 'SIGNED_IN',
  data: { jwt },
});

export const signIn = (username, password) => (dispatch => {
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
});

const signingOut = () => ({
  name: 'SIGNING_OUT',
});

const signedOut = () => ({
  name: 'SIGNED_OUT',
});

export const signOut = () => (dispatch => {
  dispatch(signingOut());
  fetch(`https://${config.Auth0.DOMAIN}/logout`)
    .then(dispatch(signedOut()));
});

const changingPassword = () => ({
  name: 'CHANGING_PASSWORD',
});

const changePasswordError = error => ({
  name: 'CHANGE_PASSWORD_ERROR',
  data: { error },
});

export const changePassword = (email, password) => (dispatch => {
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
});
