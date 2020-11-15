import React from 'react';
import axios from 'axios';
import {
  Group,
  Header,
  RichCell,
  Avatar,
  Div,
  Button,
  Link,
  Spinner,
  Separator, Placeholder
} from "@vkontakte/vkui";

import Icon16MoreVertical from '@vkontakte/icons/dist/16/more_vertical';
import Icon24PenOutline from '@vkontakte/icons/dist/24/pen_outline';
import Icon20ArticleBoxOutline from '@vkontakte/icons/dist/20/article_box_outline';
import Icon20CheckCircleOutline from '@vkontakte/icons/dist/20/check_circle_outline';
import Icon20ErrorCircleOutline from '@vkontakte/icons/dist/20/error_circle_outline';
import Icon24Play from '@vkontakte/icons/dist/24/play';
import Icon56GhostOutline from "@vkontakte/icons/dist/56/ghost_outline";

import {ProductReducerIterface} from "src/store/productList/reducers";
import {AppReducerIterface} from "src/store/app/reducers";

import getDate from "src/functions/getDate";

import styles from './Product.scss';


interface IProps extends ProductReducerIterface, AppReducerIterface {}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { panelData, getProduct } = this.props;

    getProduct(panelData);
  }

  manageUserProduct = async (productId: string, type: 'enter' | 'leave') => {
    const { panelData, getProduct } = this.props;

    const { data } = await axios.put(`/product/${type}Product`, {
      productId
    });

    getProduct(panelData);

    console.log(data);
  }

  render() {
    const {
      single,
      versions,
      panelData,
      changeModal
    } = this.props;
    const {
      id,
      title,
      description,
      image,
      href,
      type,
      users
    } = single.data;

    return (
      Object.keys(single.data).length !== 0 && panelData === id ? (
        <div>
          <Group>
            <RichCell
              before={
                <Avatar
                  size={72}
                  src={`https://cloudskyreglis.ru/files/${image}`}
                />
              }
              actions={
                <>
                  {users.length === 0 && (
                    <Button size="s" onClick={() => this.manageUserProduct(id, 'enter')}>
                      Присоединиться
                    </Button>
                  )}
                  {users[0] && (
                    <>
                      {(users[0].type === 'consideration' || users[0].type === 'accepted') && (
                        <Button size="s" onClick={() => this.manageUserProduct(id, 'leave')}>
                          {users[0].type === 'consideration' ? 'Отменить заявку' : 'Покинуть продукт'}
                        </Button>
                      )}
                      {(users[0].type === 'rejected') && (
                        <Button size="s" disabled>
                          Отказано
                        </Button>
                      )}
                      {(users[0].type === 'accepted') && (
                        <Button size="s" href={href}>
                          Запустить
                        </Button>
                      )}
                    </>
                  )}
                </>
              }
              // after={<IconButton icon={<Icon16MoreVertical />} />}
              caption={(versions.data && versions.data[0]) ? `Версия ${versions.data[0].title}` : ''}
              disabled
            >
              {title}
            </RichCell>
          </Group>

          <Group header={<Header>Описание</Header>}>
            <Div>{description}</Div>
          </Group>

          {versions.data && (
            <Group
              className={styles.versionList}
              header={
                <Header aside={<Link onClick={() => changeModal('add-version', id)}>Добавить</Link>}>
                  Версии
                </Header>
              }
            >
              {versions.data.length !== 0 ? (
                versions.data.map((item, index) => (
                  <div key={index}>
                    <div className={styles.version}>
                      <Header
                        className={styles.header}
                        // aside={
                        //   <div className={styles.icons}>
                        //     <div className={styles.icon}>
                        //       <Icon20ArticleBoxOutline/>
                        //       <span>1</span>
                        //     </div>
                        //     <div className={styles.icon}>
                        //       <Icon20CheckCircleOutline/>
                        //       <span>1</span>
                        //     </div>
                        //     <div className={styles.icon}>
                        //       <Icon20ErrorCircleOutline/>
                        //       <span>1</span>
                        //     </div>
                        //   </div>
                        // }
                        indicator
                      >
                        {item.title} <Link><Icon24PenOutline height={16} width={16}/> Изменить</Link>
                      </Header>
                      <Div>
                        {item.description}
                      </Div>
                      <Div className={styles.footer}>
                        {getDate(item.createdAt)}
                      </Div>
                    </div>
                    {(versions.data.length - 1) !== index && <Separator />}
                  </div>
                ))
              ) : (
                <Placeholder
                  icon={<Icon56GhostOutline />}
                  header="Версии"
                >
                  Похоже, тут ничего нет
                </Placeholder>
              )}
            </Group>
          )}
        </div>
      ) : (
        <Div>
          <Spinner />
        </Div>
      )
    );
  }
}
