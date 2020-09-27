import React from 'react';
import {
  List,
  Separator,
  Tabs,
  TabsItem,
  Placeholder
} from "@vkontakte/vkui";
import NotificationItem from './NotificationItem/NotificationItem';

import Icon28CommentOutline from '@vkontakte/icons/dist/28/comment_outline';

interface IProps {}

interface IState {
  activeTab: 'own' | 'favorites'
}

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'own'
    };

  }

  render() {
    const { activeTab } = this.state;

    return (
      <div>
        <Tabs>
          <TabsItem
            onClick={() => this.setState({ activeTab: 'own' })}
            selected={activeTab === 'own'}
          >
            В моих отчётах
          </TabsItem>
          <TabsItem
            onClick={() => this.setState({ activeTab: 'favorites' })}
            selected={activeTab === 'favorites'}
          >
            В закладках
          </TabsItem>
        </Tabs>

        <Separator />

        {activeTab === 'own' && (
          <List>
            <NotificationItem
              name={"Модератор #1"}
              comment={"Спасибо, забрали"}
              src="https://sun2.velcom-by-minsk.userapi.com/c853528/v853528146/149624/K8N6X2dCoOA.jpg"
              date="10.10.2020 в 20:10"
              title="Название"
              status="На рассмотрении"
              priority="Высокий"
            />
            <NotificationItem
              name={"Александр Тихонович"}
              comment={"Да, у меня тоже воспроизвелось!"}
              src="https://sun9-7.userapi.com/9Q1jTOy6p-oTAPkNQIosGOYt4jP95eLueJwgCg/zlQ_yVUn2G8.jpg"
              date="10.10.2020 в 20:10"
              title="Название"
            />
          </List>
        )}

        {activeTab === 'favorites' && (
          <Placeholder
            icon={<Icon28CommentOutline width={56} height={56} />}
          >
            Здесь будут отображаться комментарии к отчётам, на которые Вы подписались.
          </Placeholder>
        )}
      </div>
    );
  }
}
