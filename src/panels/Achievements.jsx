import React from 'react';
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  platform,
  IOS
} from '@vkontakte/vkui';

import Icon24Back from '@vkontakte/icons/dist/24/back';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28ChatsOutline from '@vkontakte/icons/dist/28/chats_outline';
import Icon28ShareOutline from '@vkontakte/icons/dist/28/share_outline';
import Icon28ChainOutline from '@vkontakte/icons/dist/28/chain_outline';
import Icon28LikeOutline from '@vkontakte/icons/dist/28/like_outline';
import Icon28AddSquareOutline from '@vkontakte/icons/dist/28/add_square_outline';
import Icon28BugOutline from '@vkontakte/icons/dist/28/bug_outline';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28SmileOutline from '@vkontakte/icons/dist/28/smile_outline';

import Achievement from '../components/Achievement/Achievement.jsx';

const osname = platform();
const achivements = [
  {
    icon: Icon28ChatsOutline,
    title: 'Комментатор',
    discription: 'Оставь комментарии к 5 отзывам',
    color: 'linear-gradient(92.46deg, #3494E6 0.33%, #EC6EAD 109.31%)'
  },
  {
    icon: Icon28ChainOutline,
    title: 'Любитель поделиться',
    discription: 'Поделись ссылкой на 5 отзывов',
    color: 'linear-gradient(92.96deg, #12C2E9 -7.1%, #C471ED 102.73%, #F64F59 102.74%)'
  },
  {
    icon: Icon28ShareOutline,
    title: 'Любитель поделиться на стене',
    discription: 'Поделись отзывом на стене 5 раз',
    color: 'linear-gradient(91.9deg, #E45F21 4.24%, #F64F59 94.28%)'
  },
  {
    icon: Icon28LikeOutline,
    title: 'Лайкер',
    discription: 'Лайкни 10 отзывов',
    color: 'linear-gradient(97.95deg, #F5AF19 0.99%, #F12711 127.51%)'
  },
  {
    icon: Icon28AddSquareOutline,
    title: 'Отзыватор',
    discription: 'Оставь 5 отзывов',
    color: 'linear-gradient(92.34deg, #7B4397 0.32%, #DC2430 102.56%)'
  },
  {
    icon: Icon28BugOutline,
    title: 'Помогатор',
    discription: 'Найди 5 багов',
    color: 'linear-gradient(99.86deg, #4568DC 0.26%, #B06AB3 100%)'
  },
  {
    icon: Icon28AddOutline,
    title: 'Дружелюбный',
    discription: 'Подпишись на 5 авторов',
    color: 'linear-gradient(102.74deg, #00F260 -39.37%, #0575E6 100%)'
  },
  {
    icon: Icon28SmileOutline,
    title: 'Популярный',
    discription: 'Собери 10 подписок на себя',
    color: 'linear-gradient(99.58deg, #833AB4 -48.41%, #FA6767 29%, #FCB045 103.99%)'
  }
];

export default class extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { id } = this.props;

    return (
      <Panel id={id}>
        <PanelHeader
          left={
            <PanelHeaderButton onClick={() => window.history.back()}>
              {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderButton>
          }
        >
          Достижения
        </PanelHeader>
        {achivements.map((item, index) => (
          <Achievement
            key={`achivement-${index}`}
            icon={item.icon}
            title={item.title}
            discription={item.discription}
            bgColor={item.color}
          />
        ))}
      </Panel>
    );
  }
}
