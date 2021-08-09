import { Map } from 'immutable';
import { CHANGE_USER_INFO, UPDATE_ORDER } from './content';
const initialState = Map({
  userInfo: {},
  orider: []
});

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case CHANGE_USER_INFO:
      return initialState.set('userInfo', payload);
    case UPDATE_ORDER:
      return initialState.update('orider', (x) => [...x, payload]);
    default:
      return state;
  }
};
