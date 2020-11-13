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
import Icon20CheckCircleOutline from '@vkontakte/icons/dist/20/check_circle_outline';
import Icon20ErrorCircleOutline from '@vkontakte/icons/dist/20/error_circle_outline';

import styles from './Product.scss';

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
              <Button size="m" stretched style={{ marginRight: 8 }}>Добавить отчет</Button>
              <Button size="m" stretched>Запустить</Button>
            </Div>
        </Group>

        <Group header={<Header>Описание</Header>}>
          <Div>Сервис с кулинарными рецептами.</Div>
        </Group>

        <Group
          header={
            <Header aside={<Link>Показать все</Link>}>
              Версии
            </Header>
          }
        >
          <Header
            className={styles.version}
            aside={
              <div className={styles.icons}>
                <div className={styles.icon}>
                  <Icon20ArticleBoxOutline/> 1
                </div>
                <div className={styles.icon}>
                  <Icon20CheckCircleOutline/> 1
                </div>
                <div className={styles.icon}>
                  <Icon20ErrorCircleOutline/> 1
                </div>
              </div>
            }
            indicator
          >
            9.9.9.9.9 <Link><Icon24PenOutline height={16} width={16}/> Изменить</Link>
          </Header>
          <Div>
            -текст<br/>-текст<br/>-текст<br/>-текст-текст<br/>-текст-текст<br/>-текст
          </Div>
          <Div className={styles.footer}>
            17 сентября 2020 в 20:35
          </Div>
        </Group>
      </div>
    );
  }
}
