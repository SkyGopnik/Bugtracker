import axios from 'axios';

export const GET_PRODUCT_LIST_STARTED = 'GET_PRODUCT_LIST_STARTED';
export const GET_PRODUCT_LIST_SUCCESS = 'GET_PRODUCT_LIST_SUCCESS';
export const GET_PRODUCT_LIST_FAILURE = 'GET_PRODUCT_LIST_FAILURE';

export const getProductList = (page = 1) => {
  return dispatch => {
    dispatch(getProductListStarted());

    axios.get('/product/list?page=1&limit=20').then((res) => {
      dispatch(getProductListSuccess({ list: res.data, isFirst: page === 1 }));
    })
    .catch((err) => {
      dispatch(getProductListFailure(err.message));
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
