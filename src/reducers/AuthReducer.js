import * as actionTypes from '../constants/actionTypes';

const initialState = {
  signingIn: false,
  error: null,
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
      error: action.error,
    });

  case actionTypes.SIGNED_IN:
    return Object.assign({}, initialState, {
      jwt: action.jwt,
    });

  case actionTypes.SIGN_OUT:
    return initialState;

  default:
    return state;
  }
}
