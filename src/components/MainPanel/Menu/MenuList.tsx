import React from 'react';
import {
  Group,
  Separator
} from "@vkontakte/vkui";

import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';

import MenuItem from './MenuItem/MenuItem';

import { AppReducerIterface } from "src/store/app/reducers";

interface IProps extends AppReducerIterface {
  className?: string,
  isMobile?: boolean
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      isMobile,
      panel,
      changePanel
    } = this.props;

    return (
      <Group
        className={className ? className : ''}
        separator="hide"
      >
        {!isMobile ? (
          <>
            <MenuItem
              name="Отчёты"
              icon={<Icon28ArticleOutline />}
              onClick={() => changePanel('main')}
              active={panel === 'main'}
            />
            <MenuItem
              name="Продукты"
              icon={<Icon28ServicesOutline />}
              onClick={() => changePanel('products')}
              active={panel === 'products'}
            />
            <MenuItem
              name="Участники"
              icon={<Icon28UsersOutline />}
              onClick={() => changePanel('users')}
              active={panel === 'users'}
            />
            <MenuItem
              name="Обновления"
              icon={<Icon28Notifications />}
              onClick={() => changePanel('notifications')}
              active={panel === 'notifications'}
            />
            <MenuItem
              name="Магазин"
              icon={<Icon28MarketOutline />}
              indicator="100 баллов"
            />
            <Separator />
            <MenuItem
              name="Моя карточка"
              icon={<Icon28UserCircleOutline />}
              indicator="Настройки"
            />
            <MenuItem
              name="Мои отчёты"
              icon={<Icon28ArticleOutline />}
            />
            <MenuItem
              name="Мои закладки"
              icon={<Icon28FavoriteOutline />}
            />
          </>
        ) : (
          <>
            <MenuItem
              name="Моя карточка"
              icon={<Icon28UserCircleOutline />}
              onClick={() => changePanel('user')}
              expandable
            />
            <MenuItem
              name="Мои отчёты"
              icon={<Icon28ArticleOutline />}
              expandable
            />
            <MenuItem
              name="Мои закладки"
              icon={<Icon28FavoriteOutline />}
              expandable
            />
            <Separator />
            <MenuItem
              name="Отчёты"
              icon={<Icon28ArticleOutline />}
              onClick={() => changePanel('reports')}
              expandable
            />
            <MenuItem
              name="Продукты"
              icon={<Icon28ServicesOutline />}
              onClick={() => changePanel('products')}
              expandable
            />
            <MenuItem
              name="Участники"
              icon={<Icon28UsersOutline />}
              onClick={() => changePanel('users')}
              expandable
            />
            <MenuItem
              name="Обновления"
              icon={<Icon28Notifications />}
              onClick={() => changePanel('notifications')}
              expandable
            />
            <MenuItem
              name="Магазин"
              icon={<Icon28MarketOutline />}
              indicator="100 баллов"
              expandable
            />
            <MenuItem
              name="Настройки"
              icon={<Icon28SettingsOutline />}
              expandable
            />
          </>
        )}
      </Group>
    );
  }
}
