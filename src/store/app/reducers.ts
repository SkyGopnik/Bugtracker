import {
  APP_CHANGE_VIEW,
  APP_CHANGE_PANEL,
  APP_CHANGE_VIEW_AND_PANEL
} from './actions';

export interface AppReducerIterface {
  view: string,
  panel: string,
  panelData: any,
  changeView(view: string),
  changePanel(panel: string, panelData?: Object),
  changeViewAndPanel(view: string, panel: string, panelData?: Object)
}

const defaultState = {
  view: 'main',
  panel: 'main',
  panelData: null
};

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
  case APP_CHANGE_VIEW:
    return {
      ...state,
      view: action.payload.view
    };

  case APP_CHANGE_PANEL:
    return {
      ...state,
      panel: action.payload.panel,
      panelData: action.payload.panelData
    };

  case APP_CHANGE_VIEW_AND_PANEL:
    return {
      ...state,
      view: action.payload.view,
      panel: action.payload.panel,
      panelData: action.payload.panelData
    };

  default:
    break;
  }

  return state;
};
