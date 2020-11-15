import axios from 'axios';

export const GET_PRODUCT_LIST_STARTED = 'GET_PRODUCT_LIST_STARTED';
export const GET_PRODUCT_LIST_SUCCESS = 'GET_PRODUCT_LIST_SUCCESS';
export const GET_PRODUCT_LIST_FAILURE = 'GET_PRODUCT_LIST_FAILURE';
export const GET_PRODUCT_STARTED = 'GET_PRODUCT_STARTED';
export const GET_PRODUCT_SUCCESS = 'GET_PRODUCT_SUCCESS';
export const GET_PRODUCT_FAILURE = 'GET_PRODUCT_FAILURE';
export const GET_PRODUCT_VERSIONS_STARTED = 'GET_PRODUCT_VERSIONS_STARTED';
export const GET_PRODUCT_VERSIONS_SUCCESS = 'GET_PRODUCT_VERSIONS_SUCCESS';
export const GET_PRODUCT_VERSIONS_FAILURE = 'GET_PRODUCT_VERSIONS_FAILURE';

export const getProductList = (page: number = 1) => {
  return dispatch => {
    dispatch(getProductListStarted());

    axios.get(`/product/list?page=${page}&limit=20`).then((res) => {
      dispatch(getProductListSuccess({ list: res.data, isFirst: page === 1 }));
    })
    .catch((err) => {
      dispatch(getProductListFailure(err.message));
    });
  }
};

export const getProduct = (id: string) => {
  return dispatch => {
    dispatch(getProductStarted());

    axios.get(`/product/single?id=${id}`).then((res) => {
      dispatch(getProductSuccess(res.data));
      dispatch(getProductVersions(id));
    })
    .catch((err) => {
      dispatch(getProductFailure(err.message));
    });
  }
};

export const getProductVersions = (id: string, page: number = 1) => {
  return dispatch => {
    dispatch(getProductVersionsStarted());

    axios.get(`/product/versions?productId=${id}&page=${page}&limit=20`).then((res) => {
      dispatch(getProductVersionsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getProductVersionsFailure(err.message));
    });
  }
};

const getProductListSuccess = (data) => ({
  type: GET_PRODUCT_LIST_SUCCESS,
  payload: data
});

const getProductListStarted = () => ({
  type: GET_PRODUCT_LIST_STARTED
});

const getProductListFailure = error => ({
  type: GET_PRODUCT_LIST_FAILURE,
  payload: {
    error
  }
});

const getProductSuccess = (data) => ({
  type: GET_PRODUCT_SUCCESS,
  payload: data
});

const getProductStarted = () => ({
  type: GET_PRODUCT_STARTED
});

const getProductFailure = error => ({
  type: GET_PRODUCT_FAILURE,
  payload: {
    error
  }
});

const getProductVersionsSuccess = (data) => ({
  type: GET_PRODUCT_VERSIONS_SUCCESS,
  payload: data
});

const getProductVersionsStarted = () => ({
  type: GET_PRODUCT_VERSIONS_STARTED
});

const getProductVersionsFailure = error => ({
  type: GET_PRODUCT_VERSIONS_FAILURE,
  payload: {
    error
  }
});
