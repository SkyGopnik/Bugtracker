import React from 'react';
import {
  Panel,
  PanelHeader,
  Group,
  List,
  Cell,
  Button
} from '@vkontakte/vkui';

import MenuList from "../../components/MainPanel/Menu/MenuList";
import ReportList from "../../components/MainPanel/Report/ReportList";
import ServicesList from "../../components/MainPanel/Services/ServicesList";
import UserList from "../../components/MainPanel/User/UserList";
import NotificationList from "../../components/MainPanel/Notification/NotificationList";
import PanelList from "../../components/MainPanel/Panel/PanelList";

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
                <MenuList className={styles.menuGroup} />
              </div>
              <div className={styles.content}>
                <PanelList />
                <UserList />
                <NotificationList />
                <ServicesList />
                {activeMenu === 'reports' && (
                  <ReportList />
                )}
                {activeMenu === 'products' && (
                  <ServicesList />
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
