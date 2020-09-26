import React from 'react';
import {
  List
} from "@vkontakte/vkui";
import NotificationItem from './NotificationItem/NotificationItem';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <List>
        <NotificationItem
          name={"Модкратор #1"}
          comment={"Спасибо, забрали"}
          src="https://sun2.velcom-by-minsk.userapi.com/c853528/v853528146/149624/K8N6X2dCoOA.jpg"
          date="10.10.2020 в 20:10"
          title="Название"
          status="На рассмотрении"
          priority="Высокий"
        />
        <NotificationItem
          name={"Модкратор #1"}
          comment={"Спасибо, забрали"}
          src="https://sun2.velcom-by-minsk.userapi.com/c853528/v853528146/149624/K8N6X2dCoOA.jpg"
          date="10.10.2020 в 20:10"
          title="Название"
          status="На рассмотрении"
          priority="Высокий"
        />
      </List>
    );
  }
}
