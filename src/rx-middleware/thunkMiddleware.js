import Rx from 'rx';

export default function thunkMiddleware(getState) {
  return action => {
    if (typeof action === 'function') {
      return Rx.Observable.just(action(getState));
    }

    // Don't know how to handle this thing, pass to next rx-middleware
    return Rx.Observable.just(action);
  };
}
