import {
  APP_CHANGE_VIEW,
  APP_CHANGE_PANEL,
  APP_CHANGE_VIEW_AND_PANEL,
  APP_CHANGE_MODAL,
  updateHistory
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
  changeModal(modal: null | string, modalData?: any),
  updateHistory(view: string, panel: string, history?: any)
}

const defaultState = {
  view: 'main',
  panel: 'main',
  panelData: null,
  modal: null,
  modalData: null
};

// Обновляем историю переходов (Ставим начальную страницу)
updateHistory(defaultState.view, defaultState.panel);

export const appReducer = (state = defaultState, action) => {
  switch (action.type) {
  case APP_CHANGE_VIEW:
    return {
      ...state,
      view: action.payload.view
    };

  case APP_CHANGE_PANEL:
    updateHistory(state.view, action.payload.panel, action.payload.panelData);

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
