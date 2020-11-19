import React from 'react';
import {
  Panel,
  Button,
  PanelHeader,
  Cell,
  Group
} from '@vkontakte/vkui';

import Icon28EditOutline from '@vkontakte/icons/dist/28/edit_outline';

import MenuList from "src/components/MainPanel/Menu/MenuListContainer";
import DesktopContent from "src/components/MainPanel/DesktopContent/DesktopContent";
import MenuItem from "src/components/MainPanel/Menu/MenuItem/MenuItem";

import AddReport from "src/components/MainPanel/Reports/AddReport/AddReportContainer";
import AddProduct from "src/components/MainPanel/Products/AddProduct/AddProductContainer";
import Reports from "src/components/MainPanel/Reports/ReportListContainer";
import Products from "src/components/MainPanel/Products/ProductListContainer";
import Users from "src/components/MainPanel/Users/UsersList";
import Notifications from "src/components/MainPanel/Notifications/NotificationsList";
import User from "src/components/UserPanel/UserPanel";
import Product from "src/components/MainPanel/Products/Product/ProductContainer";
import Report from "src/components/MainPanel/Reports/Report/ReportContainer";

import {AppReducerIterface} from "src/store/app/reducers";
import {Product as ProductI} from "src/store/productList/reducers";
import {Report as ReportI} from "src/store/reportList/reducers";

import queryGet from '../../functions/query_get';

import styles from './Main.scss';

interface IProps extends AppReducerIterface {
  id: string,
  singleProduct: {
    loading: boolean,
    data: ProductI,
    error: any
  },
  singleReport: {
    loading: boolean,
    data: ReportI,
    error: any,
    isBtnShown: boolean
  },
  userProducts: Array<{
    id: string,
    title: string
  }>
}

interface IState {}

export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {};
  }

  render() {
    const {
      id,
      panel,
      singleProduct,
      singleReport,
      userProducts,
      changePanel,
      changeModal
    } = this.props;
    const isDesktop = queryGet('type') === 'desktop';

    return (
      <Panel id={id} className={isDesktop ? 'desktop-panel' : 'mobile-panel'}>
        {!isDesktop && (
          <PanelHeader>
            Баг-трекер
          </PanelHeader>
        )}
        <div className={isDesktop ? styles.desktop : ''}>
          {isDesktop ? (
            <div className={styles.contentWrapper}>
              <div className={styles.menu}>
                {userProducts.length !== 0 && (
                  <Button
                    className={styles.addReportBtn}
                    onClick={() => changePanel('add-report', panel === 'product' ? singleProduct.data.id : '')}
                  >
                    Добавить отчёт
                  </Button>
                )}
                <MenuList className={styles.menuGroup} />
                {singleReport.isBtnShown && (
                  <Group className={styles.menuGroup}>
                    <MenuItem
                      name="Изменить статус"
                      icon={<Icon28EditOutline />}
                      onClick={() => changeModal('change-status')}
                    />
                  </Group>
                )}
              </div>
              {panel === 'main' && (
                <DesktopContent className={styles.content} title="Все отчёты">
                  <Reports />
                </DesktopContent>
              )}
              {panel === 'add-report' && (
                <DesktopContent className={styles.content} title="Добавить отчёт">
                  <AddReport />
                </DesktopContent>
              )}
              {panel === 'add-product' && (
                <DesktopContent className={styles.content} title="Добавить продукт">
                  <AddProduct />
                </DesktopContent>
              )}
              {panel === 'report' && (
                <DesktopContent className={styles.content} title="Отчёт">
                  <Report />
                </DesktopContent>
              )}
              {panel === 'products' && (
                <DesktopContent className={styles.content} title="Продукты">
                  <Products />
                </DesktopContent>
              )}
              {panel === 'users' && (
                <DesktopContent className={styles.content} title="Участники">
                  <Users />
                </DesktopContent>
              )}
              {panel === 'product' && (
                <DesktopContent className={styles.content} title="Продукт">
                  <Product />
                </DesktopContent>
              )}
              {panel === 'notifications' && (
                <DesktopContent className={styles.content} title="Обновления">
                  <Notifications />
                </DesktopContent>
              )}
              {panel === 'user' && (
                '1'
                // <User
                //   groupClassName={styles.content}
                //   title="Участник"
                //   avatar={{
                //     name: 'test',
                //     ratingNumber: 5,
                //     src: '',
                //     reportsCount: 10
                //   }}
                //   activity={{
                //     date: 'test'
                //   }}
                //   reports={{
                //     list: [
                //       {
                //         name: 'Обычное название',
                //         tags: ['Лента'],
                //         author: 'Артём Петрунин',
                //         date: '24 сентября 2020',
                //         status: 'В работе'
                //       },
                //       {
                //         name: 'Обычное название',
                //         tags: ['Лента'],
                //         author: 'Артём Петрунин',
                //         date: '24 сентября 2020',
                //         status: 'В работе'
                //       },
                //       {
                //         name: 'Обычное название',
                //         tags: ['Лента'],
                //         author: 'Артём Петрунин',
                //         date: '24 сентября 2020',
                //         status: 'В работе'
                //       }
                //     ]
                //   }}
                //   products={{
                //     list: [
                //       {
                //         name: 'Отзывы',
                //         report: '600 отчётов',
                //         src: 'https://sun9-43.userapi.com/c858128/v858128351/21df17/vl_dTIxR1X4.jpg'
                //       },
                //       {
                //         name: 'Отзывы',
                //         report: '600 отчётов',
                //         src: 'https://sun9-43.userapi.com/c858128/v858128351/21df17/vl_dTIxR1X4.jpg'
                //       },
                //       {
                //         name: 'Отзывы',
                //         report: '600 отчётов',
                //         src: 'https://sun9-43.userapi.com/c858128/v858128351/21df17/vl_dTIxR1X4.jpg'
                //       },
                //       {
                //         name: 'Отзывы',
                //         report: '600 отчётов',
                //         src: 'https://sun9-43.userapi.com/c858128/v858128351/21df17/vl_dTIxR1X4.jpg'
                //       }
                //     ]
                //   }}
                // />
              )}
            </div>
          ) : (
            <MenuList
              isMobile
            />
          )}
        </div>
      </Panel>
    );
  }
}
