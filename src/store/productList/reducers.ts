import {
  GET_PRODUCT_LIST_STARTED,
  GET_PRODUCT_LIST_SUCCESS,
  GET_PRODUCT_LIST_FAILURE,
  GET_PRODUCT_STARTED,
  GET_PRODUCT_SUCCESS,
  GET_PRODUCT_FAILURE,
  GET_PRODUCT_VERSIONS_STARTED,
  GET_PRODUCT_VERSIONS_SUCCESS,
  GET_PRODUCT_VERSIONS_FAILURE,
  GET_USER_PRODUCT_LIST_SUCCESS
} from './actions';

export interface Product {
  id?: string,
  title?: string,
  description?: string,
  image?: string,
  href?: string,
  type?: {
    text: string
  },
  versions?: Array<Versions>
  users?: Array<{
    type: 'consideration'| 'accepted' | 'rejected'
  }>
  createdAt?: Date,
  updatedAt?: Date
}

interface Versions {
  id?: string,
  title?: string,
  description?: string,
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
  versions: {
    loading: false,
    data: Array<Versions> | null,
    error: null
  },
  userProducts: Array<{
    id: string,
    title: string
  }>,
  getProductList(type?: 'all' | 'own' | 'moderated', page?: number),
  getProduct(id: string),
  getProductVersions(id: string, page?: number),
  getUserProductList()
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
  },
  versions: {
    loading: false,
    data: null,
    error: null
  },
  userProducts: []
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
      },
      versions: {
        loading: false,
        error: null,
        data: null
      }
    };
  case GET_PRODUCT_SUCCESS:
    return {
      ...state,
      single: {
        loading: false,
        error: null,
        data: payload
      },
      versions: {
        loading: false,
        error: null,
        data: null
      }
    };
  case GET_PRODUCT_FAILURE:
    return {
      ...state,
      single: {
        ...state.single,
        loading: false,
        error: payload.error
      },
      versions: {
        loading: false,
        error: null,
        data: null
      }
    };
  case GET_PRODUCT_VERSIONS_STARTED:
    return {
      ...state,
      versions: {
        ...state.versions,
        loading: true
      }
    };
  case GET_PRODUCT_VERSIONS_SUCCESS:
    return {
      ...state,
      versions: {
        loading: false,
        error: null,
        data: payload
      }
    };
  case GET_PRODUCT_VERSIONS_FAILURE:
    return {
      ...state,
      versions: {
        ...state.versions,
        loading: false,
        error: payload.error
      }
    };
  case GET_USER_PRODUCT_LIST_SUCCESS:
    return {
      ...state,
      userProducts: payload
    };

  default:
    break;
  }

  return state;
};
