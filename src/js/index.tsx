import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import {createStore} from 'redux';
import { Provider } from 'react-redux';

// Import scroll helper for safari
import mVKMiniAppsScrollHelper from '@vkontakte/mvk-mini-apps-scroll-helper';

// Главный файл
import App from '../pages/App';

// Главный reducer
import rootReducer from '../store/reducers';

// Стили VKUI
import '@vkontakte/vkui/dist/vkui.css';

// Главный объект стора
const store = createStore(rootReducer);

// Use scroll helper
const root = document.getElementById('root');
mVKMiniAppsScrollHelper(root);

if (document.location.href) {
  axios.defaults.headers.common.user = document.location.href;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  root
);
