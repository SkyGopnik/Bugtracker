import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  ConfigProvider,
  Epic,
  Root
} from '@vkontakte/vkui';

/*
  View
*/
import MainView from '../views/Main';

/*
  Функции
*/
import unixTime from '../functions/unixtime';
import queryGet from '../functions/query_get';

import { AppReducerIterface } from "src/store/app/reducers";

import '../styles/all.scss';

let isExit = false;
let historyDelay = Number(new Date().getTime() / 1000);

interface IProps extends AppReducerIterface {}

interface IState {
  scheme: 'client_light' | 'client_dark' | 'space_gray' | 'bright_light'
}

export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    console.log(props);

    this.state = {
      scheme: 'bright_light'
    };

    this.menu = this.menu.bind(this);
  }

  componentDidMount() {
    const { view, panel } = this.props;

    // Навешиваем обработчик кнопку вперёд/назад
    window.addEventListener('popstate', (e) => {
      // Отменяем стандартное событие
      e.preventDefault();
      // Выполняем наш переход внутри приложения
      this.menu(e);
    });

    // Обновляем историю переходов (Ставим начальную страницу)
    this.updateHistory(view, panel);

    const vars = [
      '--button_secondary_foreground',
      '--accent',
      '--tabbar_active_icon',
      '--header_tint',
      '--button_primary_background',
      '--action_sheet_action_foreground'
    ];
    const color = '#EE8208';

    vars.forEach((name) => document.documentElement.style.setProperty(name, color));
  }

  updateHistory(view: string, panel: string) {
    // Записываем новое значение истории переходов
    window.history.pushState({ view: view, panel: panel }, `${view}/${panel}`);
  }

  menu(e) {
    const { changeViewAndPanel } = this.props;
    // Если история переходов существует
    if (e.state) {
      // Отменяем стандартное событие
      e.preventDefault();

      const { view, panel } = e.state;

      if (historyDelay < unixTime()) {
        // Обновляем блокировку
        historyDelay = unixTime() + 1;

        // Устанавливаем новые значения для View и Panel
        changeViewAndPanel(view, panel);
      } else {
        changeViewAndPanel(view, panel);
      }
    } else {
      changeViewAndPanel('main', 'main');

      if (!isExit) {
        isExit = true;
        bridge.sendPromise('VKWebAppClose', {
          'status': 'success',
          'payload': 'Ждём Вас снова! :3'
        });
      }
    }
  }

  render() {
    const { view, panel } = this.props;
    const { scheme } = this.state;

    return (
      <ConfigProvider scheme={scheme}>
        <Root activeView={view}>
          <MainView
            id="main"
            activePanel={queryGet('type') !== 'desktop' ? panel : 'main'}
          />
        </Root>
      </ConfigProvider>
    );
  }
}
