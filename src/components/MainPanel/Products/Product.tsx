import React from 'react';
import {
  Group,
  Header,
  SimpleCell,
  Avatar,
  IconButton,
  Div,
  Button,
  HorizontalScroll,
  Title
} from "@vkontakte/vkui";

import Icon16MoreVertical from '@vkontakte/icons/dist/16/more_vertical';

interface IProps {}

interface IState {}

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <div>

    <Group>
      <SimpleCell before={<Avatar size={72} />} after={<IconButton icon={<Icon16MoreVertical />} />} description="Версия 9.9.9.9.9">CooK - рецепты</SimpleCell>
        <Div style={{display: 'flex'}}>
          <Button size="l" stretched style={{ marginRight: 8 }}>Добавить отчет</Button>
          <Button size="l" stretched>Запустить</Button>
        </Div>
    </Group>

    <Group>
    <Header mode="secondary">Описание</Header>
    <Div>
    <Title level="3" weight="regular" >Сервис с кулинарными рецептами.</Title>
    </Div>
    </Group>

    </div>
    );
  }
}
