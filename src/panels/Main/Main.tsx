import React from 'react';
import {
  Panel,
  Button
} from '@vkontakte/vkui';

import MenuList from "../../components/MainPanel/Menu/MenuList";
import DesktopContent from "../../components/MainPanel/DesktopContent/DesktopContent";

import Reports from "../../components/MainPanel/Reports/ReportsList";
import Products from "../../components/MainPanel/Products/ProductsList";
import Users from "../../components/MainPanel/Users/UsersList";
import Notifications from "../../components/MainPanel/Notifications/NotificationsList";

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
      <Panel id={id}>
        <div ref={this.mainBlock} className={styles.desktop}>
          {width && width > 700 ? (
            <div className={styles.contentWrapper}>
              <div className={styles.menu}>
                <Button
                  className={styles.addReportBtn}
                >
                  Добавить отчёт
                </Button>
                <MenuList
                  className={styles.menuGroup}
                  activeItem={activeMenu}
                  changeActive={changeActiveMenu}
                />
              </div>
              <div className={styles.content}>
                {activeMenu === 'reports' && (
                  <DesktopContent title="Все отчёты">
                    <Reports />
                  </DesktopContent>
                )}
                {activeMenu === 'products' && (
                  <DesktopContent title="Продукты">
                    <Products />
                  </DesktopContent>
                )}
                {activeMenu === 'users' && (
                  <DesktopContent title="Участники">
                    <Users />
                  </DesktopContent>
                )}
                {activeMenu === 'notifications' && (
                  <DesktopContent title="Обновления">
                    <Notifications />
                  </DesktopContent>
                )}
              </div>
            </div>
          ) : (
            <div>Mobile</div>
          )}
        </div>
      </Panel>
    );
  }
}
