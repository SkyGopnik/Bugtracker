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
  Компоненты
*/
import TabbarLight from '../components/TabbarLight';

/*
  Функции
*/
import queryGet from '../functions/query_get';
import isset from '../functions/isset';
import unixTime from '../functions/unixtime';

import '../styles/all.scss';

let isExit = false;
let historyDelay = Number(new Date().getTime() / 1000);

interface IProps {}

interface IState {
  active: {
    story: string,
    panel: string
  },
  scheme: 'client_light' | 'client_dark' | 'space_gray' | 'bright_light'
}

interface Scheme {
  status: 'light' | 'dark',
  color: string
}

interface SchemeArray {
  bright_light: Scheme,
  space_gray: Scheme
}

export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      active: {
        story: 'main',
        panel: 'main'
      },
      scheme: 'bright_light'
    };

    this.onStoryChange = this.onStoryChange.bind(this);
    this.onPanelChange = this.onPanelChange.bind(this);
    this.onStoryAndPanelChange = this.onStoryAndPanelChange.bind(this);
    this.menu = this.menu.bind(this);
  }

  componentDidMount() {
    const { active } = this.state;

    // Навешиваем обработчик кнопку вперёд/назад
    window.addEventListener('popstate', (e) => {
      // Отменяем стандартное событие
      e.preventDefault();
      // Выполняем наш переход внутри приложения
      this.menu(e);
    });

    // Обновляем историю переходов (Ставим начальную страницу)
    this.updateHistory(active.story, active.panel);

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

  onStoryChange(e) {
    const { active } = this.state;

    // Id нужного View
    const id = e.currentTarget.dataset.story;

    if (
      id !== active.panel
      && (
        id === 'main'
      )
    ) {
      // Поднимаем контент вверх
      window.scroll({ top: 0 });
    }

    // Проверяем на Tap to top
    if (id !== active.panel) {
      // Обновляем историю переходов
      this.updateHistory(id, id);

      // Устанавливаем новый View
      this.setState({
        active: {
          story: id,
          panel: id
        }
      });
    } else {
      // Поднимаем контент вверх
      window.scroll({ top: 0, behavior: 'smooth' });
    }
  }

  onPanelChange(e, panel, data) {
    const { active } = this.state;
    const panelName = e ? e.currentTarget.dataset.to : panel;
    const panelData = e ? (
      isset(e.currentTarget.dataset.params) && e.currentTarget.dataset.params
    ) : data;

    if (active.panel !== panelName) {
      // Обновляем историю переходов
      this.updateHistory(active.story, panelName, JSON.parse(panelData));

      // Устанавливаем новую панель
      this.setState({
        active: {
          story: active.story,
          panel: panelName
        }
      });
    }
  }

  onStoryAndPanelChange(story, panel, data) {
    // Обновляем историю переходов
    this.updateHistory(story, panel, data);

    if (
      story === 'main'
    ) {
      // Поднимаем контент вверх
      window.scroll({ top: 0 });
    }

    // Устанавливаем новую панель
    this.setState({
      active: {
        story: story,
        panel: panel
      }
    });
  }

  updateHistory(s, p, panelData = null) {
    // Записываем новое значение истории переходов
    window.history.pushState({ story: s, panel: p, data: panelData }, `${s}/${p}`);
  }

  menu(e) {
    // Если история переходов существует
    if (e.state) {
      const { story, panel, data } = e.state;

      if (historyDelay < unixTime()) {
        // Обновляем блокировку
        historyDelay = unixTime() + 1;

        // Снимаем блокировку скрола у body
        const body = document.getElementsByTagName('body')[0];
        body.style.overflowY = 'scroll';

        const newData = { ...data };
        newData.isBack = true;

        // Устанавливаем новые значения для View и Panel
        this.setState({
          active: {
            story: story,
            panel: panel
          }
        });
      } else {
        this.updateHistory(story, panel, data);
      }
    } else {
      this.updateHistory('main', 'main');

      this.setState({
        active: {
          story: 'main',
          panel: 'main'
        }
      });

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
    const {
      active,
      scheme
    } = this.state;

    return (
      <ConfigProvider scheme={scheme}>
        <Root activeView={active.story}>
          <MainView
            id="main"
            active={active}
          />
        </Root>
      </ConfigProvider>
    );
  }
}
