import React from 'react';
import {
  List,
  Separator
} from "@vkontakte/vkui";
import MenuItem from './MenuItem/MenuItem';

import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';

interface IProps {
  className: string,
  activeItem: string,
  changeActive(name: string)
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      activeItem,
      changeActive
    } = this.props;

    return (
      <List className={className}>
        <MenuItem
          name="Отчёты"
          icon={<Icon28ArticleOutline />}
          onClick={() => changeActive('reports')}
          active={activeItem === 'reports'}
        />
        <MenuItem
          name="Продукты"
          icon={<Icon28ServicesOutline />}
          onClick={() => changeActive('products')}
          active={activeItem === 'products'}
        />
        <MenuItem
          name="Участники"
          icon={<Icon28UsersOutline />}
          onClick={() => changeActive('users')}
          active={activeItem === 'users'}
        />
        <MenuItem
          name="Обновления"
          icon={<Icon28Notifications />}
          onClick={() => changeActive('notifications')}
          active={activeItem === 'notifications'}
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
      </List>
    );
  }
}
