import {
  GET_PRODUCT_LIST_STARTED,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILURE
} from './actions';

const defaultState = {
  list: {
    loading: false,
    data: [],
    error: null
  }
};

export const productListReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
  case GET_PRODUCT_LIST_STARTED:
    return {
      ...state,
      list: {
        ...state.list,
        loading: true
      }
    };
  case GET_PRODUCT_LIST_SUCCESS:
    return {
      ...state,
      list: {
        loading: false,
        error: null,
        data: payload.isFirst ? payload.list : state.list.data.concat(payload.list)
      }
    };
  case GET_PRODUCT_LIST_FAILURE:
    return {
      ...state,
      list: {
        ...state.list,
        loading: false,
        error: payload.error
      }
    };

  default:
    break;
  }

  return state;
};
