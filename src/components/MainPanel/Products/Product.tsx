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
  Title,
  Link
} from "@vkontakte/vkui";

import Icon16MoreVertical from '@vkontakte/icons/dist/16/more_vertical';
import Icon24PenOutline from '@vkontakte/icons/dist/24/pen_outline';
import Icon20ArticleBoxOutline from '@vkontakte/icons/dist/20/article_box_outline';
// import Icon20CheckCircleOutline from '@vkontakte/icons/dist/20/check_circle_outline'; Почему то не может импортировать
// import Icon20ErrorCircleOutline from '@vkontakte/icons/dist/20/error_circle_outline';

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

    <Group>
      <Header aside={<Link>Показать все</Link>}>
        Версии
      </Header>
      <Header aside={<Link>тут иконки</Link>}>
        9.9.9.9.9 <Link><Icon24PenOutline height={16} width={16}/> Изменить</Link>
      </Header>
      <Div>
        <Title level="3" weight="regular">-текст<br/>-текст<br/>-текст<br/>-текст-текст<br/>-текст-текст<br/>-текст</Title>
      </Div>
    </Group>

    </div>
    );
  }
}
