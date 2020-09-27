import React from 'react';
import {
  Panel,
  Button
} from '@vkontakte/vkui';

import MenuList from "../../components/MainPanel/Menu/MenuList";
import DesktopContent from "../../components/MainPanel/DesktopContent/DesktopContent";

import AddReport from "../../components/MainPanel/Reports/AddReport";
import Reports from "../../components/MainPanel/Reports/ReportsList";
import Products from "../../components/MainPanel/Products/ProductsList";
import Users from "../../components/MainPanel/Users/UsersList";
import Notifications from "../../components/MainPanel/Notifications/NotificationsList";
import User from "../../components/UserPanel/UserPanel";

import styles from './Main.scss';
import ReportItem from "../../components/MainPanel/Reports/ReportItem/ReportItem";

interface IProps {
  id: string,
  activeContent: string,
  changeActiveContent(name: string)
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
      activeContent,
      changeActiveContent
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
              <div>
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
                  <>
                    <DesktopContent className={styles.content} title="Участник">
                      <User
                        name="Test"
                        rating="1"
                        src="3"
                        activity="4"
                        date="7"
                        products={[]}

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
                      <User
                        name="Test"
                        rating="1"
                        src="3"
                        activity="4"
                        date="7"
                        products={[]}
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
                  </>
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
