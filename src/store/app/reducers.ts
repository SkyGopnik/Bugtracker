import {
  APP_CHANGE_VIEW,
  APP_CHANGE_PANEL,
  APP_CHANGE_VIEW_AND_PANEL,
  APP_CHANGE_MODAL
} from './actions';

export interface AppReducerIterface {
  view: string,
  panel: string,
  panelData: any,
  modal: string,
  modalData: any,
  changeView(view: string),
  changePanel(panel: string, panelData?: any),
  changeViewAndPanel(view: string, panel: string, panelData?: any),
  changeModal(modal: null | string, modalData?: any)
}

const defaultState = {
  view: 'main',
  panel: 'main',
  panelData: null,
  modal: null,
  modalData: null
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

  case APP_CHANGE_MODAL:
    return {
      ...state,
      modal: action.payload.modal,
      modalData: action.payload.modalData
    };

  default:
    break;
  }

  return state;
};
