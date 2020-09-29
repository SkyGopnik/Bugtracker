import React from 'react';

import { Icon28ChevronRightOutline } from "@vkontakte/icons";

import Avatar, { IProps as AvatarProps } from "./User/Avatar";
import Activity, { IProps as ActivityProps } from "./User/Activity";
import Products, { IProps as ProductsProps } from "./User/Products";
import Reports, { IProps as ReportsProps } from "./User/Reports";
import { Header, Separator } from "@vkontakte/vkui";

import styles from "src/components/MainPanel/DesktopContent/DesktopContent.scss";

interface IProps {
  groupClassName?: string,
  title?: string,
  avatar: AvatarProps,
  activity: ActivityProps,
  products: ProductsProps,
  reports: ReportsProps
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      groupClassName,
      title,
      avatar,
      activity,
      products,
      reports
    } = this.props;

    return (
      <div>
        {title ? (
          <div className={groupClassName ? groupClassName : ''}>
            <Header className={styles.header}>
              <div className={styles.title}>{title}</div>
              <Icon28ChevronRightOutline width={20} height={20} />
              <div>test</div>
            </Header>
            <Separator />
            <Avatar
              name={avatar.name}
              ratingNumber={avatar.ratingNumber}
              src={avatar.src}
              reportsCount={avatar.reportsCount}
            />
          </div>
        ) : (
          <Avatar
            className={groupClassName}
            name={avatar.name}
            ratingNumber={avatar.ratingNumber}
            src={avatar.src}
            reportsCount={avatar.reportsCount}
          />
        )}
        <Activity
          className={groupClassName}
          date={activity.date}
        />
        <Products
          className={groupClassName}
          list={products.list}
        />
        <Reports
          className={groupClassName}
          list={reports.list}
        />
      </div>
    );
  }
}
