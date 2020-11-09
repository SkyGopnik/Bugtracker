import axios from 'axios';

export const GET_REPORT_LIST_STARTED = 'GET_REPORT_LIST_STARTED';
export const GET_REPORT_LIST_SUCCESS = 'GET_REPORT_LIST_SUCCESS';
export const GET_REPORT_LIST_FAILURE = 'GET_REPORT_LIST_FAILURE';

export const getReportList = (page = 1) => {
  return dispatch => {
    dispatch(getReportListStarted());

    axios.get('/report/list?page=1&limit=20').then((res) => {
      dispatch(getReportListSuccess({ list: res.data, isFirst: page === 1 }));
    })
    .catch((err) => {
      dispatch(getReportListFailure(err.message));
    });
  }
};

const getReportListSuccess = (data) => ({
  type: GET_REPORT_LIST_SUCCESS,
  payload: data
});

const getReportListStarted = () => ({
  type: GET_REPORT_LIST_STARTED
});

const getReportListFailure = error => ({
  type: GET_REPORT_LIST_FAILURE,
  payload: {
    error
  }
});
