import { TEST_CHANGE_COUNT_NUMBER } from './actions';

const defaultState = {
  count: 1
};

export const testReducer = (state = defaultState, action) => {
  switch (action.type) {
  case TEST_CHANGE_COUNT_NUMBER:
    return {
      ...state,
      count: action.payload
    };

  default:
    break;
  }

  return state;
};
