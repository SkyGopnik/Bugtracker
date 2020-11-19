import {
  GET_REPORT_LIST_STARTED,
  GET_REPORT_LIST_SUCCESS,
  GET_REPORT_LIST_FAILURE,
  GET_REPORT_STARTED,
  GET_REPORT_SUCCESS,
  GET_REPORT_FAILURE,
  CHANGE_REPORT_STATUS_BTN
} from './actions';

import {Product} from "src/store/productList/reducers";

export interface Report {
  id?: string,
  userId?: string,
  platform?: string,
  osnameAndroid?: string | null,
  osnameIOS?: string | null,
  title?: string,
  steps?: string,
  result?: string,
  oresult?: string,
  tags?: string,
  priority?: string,
  type?: string,
  status?: {
    text: string
  },
  product?: Product,
  createdAt?: Date,
  updatedAt?: Date
}

export interface ReportReducerIterface {
  list: {
    loading: boolean,
    data: Array<Report>,
    error: any
  },
  single: {
    loading: boolean,
    data: Report,
    error: any,
    isBtnShown: boolean
  },
  getReportList(page?: number),
  getReport(id: string),
  changeReportStatus(status: boolean)
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
    error: null,
    isBtnShown: false
  }
};

export const reportListReducer = (state = defaultState, { type, payload }) => {
  switch (type) {
  case GET_REPORT_LIST_STARTED:
    return {
      ...state,
      list: {
        ...state.list,
        loading: true
      }
    };
  case GET_REPORT_LIST_SUCCESS:
    return {
      ...state,
      list: {
        loading: false,
        error: null,
        data: payload.isFirst ? payload.list : state.list.data.concat(payload.list)
      }
    };
  case GET_REPORT_LIST_FAILURE:
    return {
      ...state,
      list: {
        ...state.list,
        loading: false,
        error: payload.error
      }
    };
  case GET_REPORT_STARTED:
    return {
      ...state,
      single: {
        ...state.single,
        loading: true
      }
    };
  case GET_REPORT_SUCCESS:
    return {
      ...state,
      single: {
        ...state.single,
        loading: false,
        error: null,
        data: payload
      }
    };
  case GET_REPORT_FAILURE:
    return {
      ...state,
      single: {
        ...state.single,
        loading: false,
        error: payload.error
      }
    };
  case CHANGE_REPORT_STATUS_BTN:
    return {
      ...state,
      single: {
        ...state.single,
        isBtnShown: payload
      }
    };

  default:
    break;
  }

  return state;
};
