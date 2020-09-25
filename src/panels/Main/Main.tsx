import React from 'react';
import {
  Panel,
  PanelHeader,
  Group,
  List,
  Cell,
  Button
} from '@vkontakte/vkui';

import Icon28UserCircleOutline from '@vkontakte/icons/dist/28/user_circle_outline';
import Icon28ArticleOutline from '@vkontakte/icons/dist/28/article_outline';
import Icon28FavoriteOutline from '@vkontakte/icons/dist/28/favorite_outline';
import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import Icon28UsersOutline from '@vkontakte/icons/dist/28/users_outline';
import Icon28MarketOutline from '@vkontakte/icons/dist/28/market_outline';
import Icon28SettingsOutline from '@vkontakte/icons/dist/28/settings_outline';
import Icon28AddOutline from '@vkontakte/icons/dist/28/add_outline';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';

import MenuItem from "../../components/Menu/MenuItem/MenuItem";

// @ts-ignore
import styles from './Main.scss';

interface IProps {
  id: string,
  activeMenu: string,
  changeActiveMenu(name: string)
}

interface IState {
  width: null | number
}

export default class extends React.Component<IProps, IState> {
  private mainBlock: React.RefObject<HTMLInputElement>;

  constructor(props: IProps) {
    super(props);

    this.state = {
      width: null
    };

    this.mainBlock = React.createRef();
  }

  componentDidMount() {
    const { clientWidth } = this.mainBlock.current;

    this.setState({
      width: clientWidth
    });
  }

  render() {
    const {
      id,
      activeMenu,
      changeActiveMenu
    } = this.props;
    const { width } = this.state;

    return (
      <Panel id={id} className={styles.test}>
        <div ref={this.mainBlock} className={styles.desktop}>
          {width && width > 700 ? (
            <div className={styles.contentWrapper}>
              <div className={styles.menu}>
                <Button
                  className={styles.addReportBtn}
                  // onClick={go}
                  data-to="addReviews"
                  onClick={() => console.log(this.mainBlock.current.clientWidth)}
                >
                  Добавить отчёт
                </Button>
                <List className={styles.menuGroup}>
                  <MenuItem
                    name="Отчёты"
                    icon={<Icon28ArticleOutline />}
                    active
                  />
                  <Cell
                    before={<Icon28ArticleOutline />}
                    // onClick={go}
                    onClick={() => changeActiveMenu('reports')}
                    multiline
                  >
                    <div className={styles.menuItem}>
                      <b>Отчёты</b>
                    </div>
                  </Cell>
                  <Cell
                    before={<Icon28ServicesOutline />}
                    // onClick={go}
                    onClick={() => changeActiveMenu('products')}
                    multiline
                  >
                    <div className={styles.menuItem}>Продукты</div>
                  </Cell>
                  <Cell
                    className="cell-menu-left-block"
                    before={<Icon28UsersOutline />}
                    // onClick={go}
                    data-to="users"
                    multiline
                  >
                    <div className={styles.menuItem}>Участники</div>
                  </Cell>
                  <Cell
                    className="cell-menu-left-block"
                    before={<Icon28Notifications />}
                    // onClick={go}
                    data-to="notifications"
                    multiline
                  >
                    <div className={styles.menuItem}>Обновления</div>
                  </Cell>
                  <Cell
                    before={<Icon28MarketOutline />}
                    //onClick={go}
                    //data-to="market"
                    indicator={
                      <div>
                        100 баллов
                      </div>
                    }
                    multiline
                  >
                    <div className={styles.menuItem}>Магазин</div>
                  </Cell>
                </List>
              </div>
              <div className={styles.content}>
                {activeMenu === 'reports' && (
                  <div>Reports</div>
                )}
                {activeMenu === 'products' && (
                  <div>products</div>
                )}
              </div>
            </div>
          ) : (
            <div>Mobile</div>
          )}
        </div>
        {/*<Group>*/}
        {/*  <List>*/}
        {/*    <Cell*/}
        {/*      // before={<Icon28ArticleOutline />}*/}
        {/*      // onClick={go}*/}
        {/*      data-to="reviews"*/}
        {/*      multiline*/}
        {/*    >*/}
        {/*      Отчёты*/}
        {/*    </Cell>*/}
        {/*    <Cell*/}
        {/*      // before={<Icon28ServicesOutline />}*/}
        {/*      // onClick={go}*/}
        {/*      data-to="services"*/}
        {/*      multiline*/}
        {/*    >*/}
        {/*      Продукты*/}
        {/*    </Cell>*/}
        {/*    <Cell*/}
        {/*      // before={<Icon28UsersOutline />}*/}
        {/*      // onClick={go}*/}
        {/*      data-to="users"*/}
        {/*      multiline*/}
        {/*    >*/}
        {/*      Участники*/}
        {/*    </Cell>*/}
        {/*    <Cell*/}
        {/*      // before={<Icon28Notifications />}*/}
        {/*      // onClick={go}*/}
        {/*      data-to="notifications"*/}
        {/*      multiline*/}
        {/*    >*/}
        {/*      Обновления*/}
        {/*    </Cell>*/}
        {/*    <Cell*/}
        {/*      // before={<Icon28MarketOutline />}*/}
        {/*      //onClick={go}*/}
        {/*      //data-to="market"*/}
        {/*      indicator="100 баллов"*/}
        {/*      multiline*/}
        {/*    >*/}
        {/*      Магазин*/}
        {/*    </Cell>*/}
        {/*    <Cell*/}
        {/*      // before={<Icon28SettingsOutline />}*/}
        {/*      // onClick={go}*/}
        {/*      data-to="settings"*/}
        {/*      multiline*/}
        {/*    >*/}
        {/*      Настройки*/}
        {/*    </Cell>*/}
        {/*  </List>*/}
        {/*</Group>*/}
      </Panel>
    );
  }
}
