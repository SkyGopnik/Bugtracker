import React from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
  ConfigProvider,
  Root
} from '@vkontakte/vkui';

/*
  View
*/
import MainView from '../views/MainContainer';

import { AppReducerIterface } from "src/store/app/reducers";
import { ProductReducerIterface } from "src/store/productList/reducers";

/*
  Функции
*/
import unixTime from '../functions/unixtime';

import '../styles/all.scss';

let historyDelay = Number(new Date().getTime() / 1000);

interface IProps extends AppReducerIterface, ProductReducerIterface {}

interface IState {
  scheme: 'client_light' | 'client_dark' | 'space_gray' | 'bright_light'
}

export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      scheme: 'bright_light'
    };

    this.menu = this.menu.bind(this);
  }

  componentDidMount() {
    const { getUserProductList } = this.props;

    // Получаем список продуктов пользователя для селекта и скрытия кнопки
    getUserProductList();

    // Навешиваем обработчик кнопку вперёд/назад
    window.addEventListener('popstate', (e) => {
      // Отменяем стандартное событие
      e.preventDefault();
      // Выполняем наш переход внутри приложения
      this.menu(e);
    });

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

  menu = (e) => {
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
    }
  }

  render() {
    const { view } = this.props;
    const { scheme } = this.state;

    return (
      <ConfigProvider
        scheme={scheme}
        // @ts-ignore
        platform="vkcom"
      >
        <Root activeView={view}>
          <MainView id="main" />
        </Root>
      </ConfigProvider>
    );
  }
}
