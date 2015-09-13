import { createReducer } from 'redux-immutablejs';
import { Map } from 'immutable';
import { actionTypes } from '../constants';

const initialState = new Map({
  signingIn: false,
  signInError: null,
  signingOut: false,
  changingPassword: false,
  changePasswordError: null,
  changePasswordSuccess: false,
  jwt: null,
});

export default createReducer(initialState, {
  [actionTypes.SIGNING_IN] (state, action) {
    return initialState.set('signingIn', true);
  },

  [actionTypes.SIGN_IN_ERROR] (state, action) {
    const error = new Map({
      type: action.data.error.error,
      message: action.data.error.error_description,
    });

    return initialState.set('signInError', error);
  },

  [actionTypes.SIGNED_IN] (state, action) {
    return initialState.set('jwt', action.data.jwt);
  },

  [actionTypes.SIGNING_OUT] (state, action) {
    return state.set('signingOut', true);
  },

  [actionTypes.SIGNED_OUT] (state, action) {
    return initialState;
  },

  [actionTypes.CHANGING_PASSWORD] (state, action) {
    return state
      .set('changingPassword', true)
      .set('changePasswordError', null)
      .set('changePasswordSuccess', false);
  },

  [actionTypes.CHANGE_PASSWORD_ERROR] (state, action) {
    const error = new Map({
      type: action.data.error.code,
      message: action.data.error.error || action.data.error.description,
    });

    return state
      .set('changingPassword', false)
      .set('changePasswordError', error)
      .set('changePasswordSuccess', false);
  },

  [actionTypes.CHANGED_PASSWORD] (state, action) {
    return state
      .set('changingPassword', false)
      .set('changePasswordError', null)
      .set('changePasswordSuccess', true);
  }
});
