export const APP_CHANGE_VIEW = 'APP_CHANGE_VIEW';
export const APP_CHANGE_PANEL = 'APP_CHANGE_PANEL';
export const APP_CHANGE_VIEW_AND_PANEL = 'APP_CHANGE_VIEW_AND_PANEL';

export const changeView = (view: string) => {
  return {
    type: APP_CHANGE_VIEW,
    payload: view
  };
};

export const changePanel = (panel: string) => {
  return {
    type: APP_CHANGE_PANEL,
    payload: panel
  };
};

export const changeViewAndPanel = (view: string, panel: string) => {
  return {
    type: APP_CHANGE_VIEW_AND_PANEL,
    payload: {
      view,
      panel
    }
  };
};
