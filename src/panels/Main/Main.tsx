import React from 'react';
import {
  Panel,
  Button, PanelHeader
} from '@vkontakte/vkui';

import MenuList from "src/components/MainPanel/Menu/MenuListContainer";
import DesktopContent from "src/components/MainPanel/DesktopContent/DesktopContent";

import AddReport from "src/components/MainPanel/Reports/AddReport";
import Reports from "src/components/MainPanel/Reports/ReportsList";
import Products from "src/components/MainPanel/Products/ProductsList";
import Users from "src/components/MainPanel/Users/UsersList";
import Notifications from "src/components/MainPanel/Notifications/NotificationsList";
import User from "src/components/UserPanel/UserPanel";

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
                <User
                  groupClassName={styles.content}
                  title="Участник"
                  avatar={{
                    name: 'test',
                    ratingNumber: 5,
                    src: '',
                    reportsCount: 10
                  }}
                  activity={{
                    date: 'test'
                  }}
                  reports={{
                    list: [
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
                    ]
                  }}
                  products={{
                    list: [

                    ]
                  }}
                />
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
