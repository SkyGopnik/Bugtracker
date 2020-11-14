import React from 'react';
import axios from 'axios';
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
  Link, Placeholder, Spinner
} from "@vkontakte/vkui";

import Icon16MoreVertical from '@vkontakte/icons/dist/16/more_vertical';
import Icon24PenOutline from '@vkontakte/icons/dist/24/pen_outline';
import Icon20ArticleBoxOutline from '@vkontakte/icons/dist/20/article_box_outline';
import Icon20CheckCircleOutline from '@vkontakte/icons/dist/20/check_circle_outline';
import Icon20ErrorCircleOutline from '@vkontakte/icons/dist/20/error_circle_outline';

import {ProductReducerIterface} from "src/store/productList/reducers";
import {AppReducerIterface} from "src/store/app/reducers";

import styles from './Product.scss';
import {getProduct} from "src/store/productList/actions";
import ProductItem from "src/components/MainPanel/Products/ProductItem/ProductItem";
import Icon56GhostOutline from "@vkontakte/icons/dist/56/ghost_outline";

interface IProps extends ProductReducerIterface, AppReducerIterface {}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { panelData, getProduct } = this.props;

    getProduct(panelData);
  }

  render() {
    const { single } = this.props;
    const {
      id,
      title,
      description,
      image,
      href,
      type
    } = single.data;

    return (
      !single.loading ? (
        <div>
          <Group>
            <SimpleCell
              before={
                <Avatar
                  size={72}
                  src={`https://cloudskyreglis.ru/files/${image}`}
                />
              }
              // after={<IconButton icon={<Icon16MoreVertical />} />}
              description="Версия 9.9.9.9.9"
              disabled
            >
              {title}
            </SimpleCell>
            <Div style={{display: 'flex'}}>
              <Button size="m" stretched style={{ marginRight: 8 }}>Добавить отчет</Button>
              <Button size="m" href={href} stretched>Запустить</Button>
            </Div>
          </Group>

          <Group header={<Header>Описание</Header>}>
            <Div>{description}</Div>
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
      ) : (
        <Div>
          <Spinner />
        </Div>
      )
    );
  }
}
