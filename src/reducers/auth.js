import * as actionTypes from '../constants/actionTypes';

const initialState = {
  signingIn: false,
  signInError: null,
  signingOut: false,
  changingPassword: false,
  changePasswordError: null,
  changePasswordSuccess: false,
  jwt: null,
};

export default function auth(state = initialState, action = {}) {
  switch (action.type) {
  case actionTypes.SIGNING_IN:
    return Object.assign({}, initialState, {
      signingIn: true,
    });

  case actionTypes.SIGN_IN_ERROR:
    return Object.assign({}, initialState, {
      signInError: {
        type: action.error.error,
        message: action.error.error_description,
      },
    });

  case actionTypes.SIGNED_IN:
    return Object.assign({}, initialState, {
      jwt: action.jwt,
    });

  case actionTypes.SIGNING_OUT:
    return Object.assign({}, state, {
      signingOut: true,
    });

  case actionTypes.SIGNED_OUT:
    return initialState;

  case actionTypes.CHANGING_PASSWORD:
    return Object.assign({}, state, {
      changingPassword: true,
      changePasswordError: null,
      changePasswordSuccess: false,
    });

  case actionTypes.CHANGE_PASSWORD_ERROR:
    console.log(action.error)
    return Object.assign({}, state, {
      changingPassword: false,
      changePasswordError: {
        type: action.error.code,
        message: action.error.error || action.error.description,
      },
      changePasswordSuccess: false,
    });

  case actionTypes.CHANGED_PASSWORD:
    return Object.assign({}, state, {
      changingPassword: false,
      changePasswordError: null,
      changePasswordSuccess: true,
    });

  default:
    return state;
  }
}
