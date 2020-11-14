import {
  GET_PRODUCT_LIST_STARTED,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILURE,
  GET_PRODUCT_STARTED,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE, getProduct
} from './actions';

interface Product {
  id?: string,
  title?: string,
  description?: string,
  image?: string,
  href?: string,
  type?: {
    text: string
  },
  createdAt?: Date,
  updatedAt?: Date
}

export interface ProductReducerIterface {
  list: {
    loading: boolean,
    data: Array<Product>,
    error: any
  },
  single: {
    loading: boolean,
    data: Product,
    error: any
  },
  getProductList(page?: number),
  getProduct(id: string)
}

const defaultState = {
  list: {
    loading: false,
    data: [],
    error: null
  },
  single: {
    loading: false,
    data: {},
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
  case GET_PRODUCT_STARTED:
    return {
      ...state,
      single: {
        ...state.single,
        loading: true
      }
    };
  case GET_PRODUCT_SUCCESS:
    return {
      ...state,
      single: {
        loading: false,
        error: null,
        data: payload
      }
    };
  case GET_PRODUCT_FAILURE:
    return {
      ...state,
      single: {
        ...state.single,
        loading: false,
        error: payload.error
      }
    };

  default:
    break;
  }

  return state;
};
