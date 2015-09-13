import Immutable from 'immutable';

const initialState = {
  signingIn: false,
  signInError: null,
  signingOut: false,
  changingPassword: false,
  changePasswordError: null,
  changePasswordSuccess: false,
  jwt: null,
};

export const CONSTRUCT = () => Immutable.fromJS(initialState);

export const SIGNING_IN = (domain, action) => {
  return CONSTRUCT()
    .set('signingIn', true);
};

export const SIGN_IN_ERROR = (domain, action) => {
  const error = {
    type: action.data.error.error,
    message: action.data.error.error_description,
  };

  return CONSTRUCT()
    .set('signInError', Immutable.fromJS(error));
};

export const SIGNED_IN = (domain, action) => {
  return CONSTRUCT()
    .set('jwt', action.data.jwt);
};

export const SIGNING_OUT = (domain, action) => {
  return domain
    .set('signingOut', true);
};

export const SIGNED_OUT = (domain, action) => {
  return CONSTRUCT();
};

export const CHANGING_PASSWORD = (domain, action) => {
  return domain
    .set('changingPassword', true)
    .set('changePasswordError', null)
    .set('changePasswordSuccess', false);
};

export const CHANGE_PASSWORD_ERROR = (domain, action) => {
  const error = {
    type: action.data.error.code,
    message: action.data.error.error || action.data.error.description,
  };

  return domain
    .set('changingPassword', false)
    .set('changePasswordError', Immutable.fromJS(error))
    .set('changePasswordSuccess', false);
};

export const CHANGED_PASSWORD = (domain, action) => {
  return domain
    .set('changingPassword', false)
    .set('changePasswordError', null)
    .set('changePasswordSuccess', true);
};
