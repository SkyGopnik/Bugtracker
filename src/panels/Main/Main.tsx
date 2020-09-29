import React from 'react';
import {
  Panel,
  Button, PanelHeader
} from '@vkontakte/vkui';

import MenuList from "../../components/MainPanel/Menu/MenuListContainer";
import DesktopContent from "../../components/MainPanel/DesktopContent/DesktopContent";

import AddReport from "../../components/MainPanel/Reports/AddReport";
import Reports from "../../components/MainPanel/Reports/ReportsList";
import Products from "../../components/MainPanel/Products/ProductsList";
import Users from "../../components/MainPanel/Users/UsersList";
import Notifications from "../../components/MainPanel/Notifications/NotificationsList";
import User from "../../components/UserPanel/UserPanel";
import UserActivity from "../../components/UserPanel/UserPanel/Activity";
import UserProducts from "../../components/UserPanel/UserPanel/Products";
import UserReports from "../../components/UserPanel/UserPanel/Reports";

import styles from './Main.scss';

interface IProps {
  id: string,
  activeContent: string,
  changeActiveContent(name: string)
}

interface IState {
  width: null | number,
  isDesktop: boolean
}

export default class extends React.Component<IProps, IState> {
  private mainBlock: React.RefObject<HTMLInputElement>;

  constructor(props: IProps) {
    super(props);

    this.state = {
      width: null,
      isDesktop: true
    };

    console.log('test');

    this.mainBlock = React.createRef();
  }

  componentDidMount() {
    const { clientWidth } = this.mainBlock.current;

    this.setState({
      width: clientWidth,
      isDesktop: clientWidth > 700
    });
  }

  render() {
    const {
      id,
      activeContent,
      changeActiveContent
    } = this.props;
    const { width, isDesktop } = this.state;

    return (
      <Panel id={id} className={isDesktop ? 'desktop-panel' : 'mobile-panel'}>
        {!isDesktop && (
          <PanelHeader>
            Баг-трекер
          </PanelHeader>
        )}
        <div ref={this.mainBlock} className={isDesktop ? styles.desktop : ''}>
          {width && width > 700 ? (
            <div className={styles.contentWrapper}>
              <div className={styles.menu}>
                <Button
                  className={styles.addReportBtn}
                  onClick={() => changeActiveContent('add-report')}
                >
                  Добавить отчёт
                </Button>
                <MenuList
                  className={styles.menuGroup}
                  activeItem={activeContent}
                  changeActive={changeActiveContent}
                />
              </div>
              {activeContent === 'add-report' && (
                <DesktopContent className={styles.content} title="Добавить отчёт">
                  <AddReport />
                </DesktopContent>
              )}
              {activeContent === 'reports' && (
                <DesktopContent className={styles.content} title="Все отчёты">
                  <Reports />
                </DesktopContent>
              )}
              {activeContent === 'products' && (
                <DesktopContent className={styles.content} title="Продукты">
                  <Products />
                </DesktopContent>
              )}
              {activeContent === 'users' && (
                <DesktopContent className={styles.content} title="Участники">
                  <Users changeUser={() => changeActiveContent('user')} />
                </DesktopContent>
              )}
              {activeContent === 'notifications' && (
                <DesktopContent className={styles.content} title="Обновления">
                  <Notifications />
                </DesktopContent>
              )}
              {activeContent === 'user' && (
                <div>
                  <DesktopContent className={styles.content} title="Участник">
                    <User
                      name="Test"
                      rating="1"
                      src="2"
                      reports="3"
                    />
                  </DesktopContent>
                  <DesktopContent className={styles.content}>
                    <UserActivity
                      activity="4"
                      date="7"
                    />
                  </DesktopContent>
                  <DesktopContent className={styles.content}>
                    <UserReports
                      reports={[
                        {
                          name: 'Обычное название',
                          tags: ['Лента'],
                          author: 'Артём Петрунин',
                          date: '24 сентября 2020',
                          status: 'В работе'
                        },
                        {
                          name: 'Обычное название',
                          tags: ['Лента'],
                          author: 'Артём Петрунин',
                          date: '24 сентября 2020',
                          status: 'В работе'
                        },
                        {
                          name: 'Обычное название',
                          tags: ['Лента'],
                          author: 'Артём Петрунин',
                          date: '24 сентября 2020',
                          status: 'В работе'
                        }
                      ]}
                    />
                  </DesktopContent>
                  <DesktopContent className={styles.content}>
                    <UserProducts
                      products={[]}
                    />
                  </DesktopContent>
                </div>
              )}
            </div>
          ) : (
            <MenuList
              activeItem={activeContent}
              changeActive={changeActiveContent}
              isMobile
            />
          )}
        </div>
      </Panel>
    );
  }
}
