export const APP_CHANGE_VIEW = 'APP_CHANGE_VIEW';
export const APP_CHANGE_PANEL = 'APP_CHANGE_PANEL';
export const APP_CHANGE_VIEW_AND_PANEL = 'APP_CHANGE_VIEW_AND_PANEL';
export const APP_CHANGE_MODAL = 'APP_CHANGE_MODAL';

export const changeView = (view: string) => {
  return {
    type: APP_CHANGE_VIEW,
    payload: {
      view
    }
  };
};

export const changePanel = (panel: string, panelData: Object = null) => {
  return {
    type: APP_CHANGE_PANEL,
    payload: {
      panel,
      panelData
    }
  };
};

export const changeViewAndPanel = (view: string, panel: string, panelData: Object = null) => {
  return {
    type: APP_CHANGE_VIEW_AND_PANEL,
    payload: {
      view,
      panel,
      panelData
    }
  };
};

export const changeModal = (modal: null | string, modalData: Object = null) => {
  return {
    type: APP_CHANGE_MODAL,
    payload: {
      modal,
      modalData
    }
  };
};

export const updateHistory = (view: string, panel: string, history?: any) => {
  window.history.pushState({ view, panel, history: history ? JSON.stringify(history) : null }, `${view}/${panel}`);
}
