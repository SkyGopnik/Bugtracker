import {
  APP_CHANGE_VIEW,
  APP_CHANGE_PANEL,
  APP_CHANGE_VIEW_AND_PANEL
} from './actions';

const defaultState = {
  view: 'main',
  panel: 'main'
};

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
  case APP_CHANGE_VIEW:
    return {
      ...state,
      view: action.payload
    };

  case APP_CHANGE_PANEL:
    return {
      ...state,
      panel: action.payload
    };

  case APP_CHANGE_VIEW_AND_PANEL:
    const { view, panel } = action.payload;

    return {
      ...state,
      view,
      panel
    };

  default:
    break;
  }

  return state;
};
