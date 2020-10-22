import React, { ReactNode } from 'react';
import {
  Avatar,
  Cell,
  Group,
  Link,
  SimpleCell
} from "@vkontakte/vkui";

import styles from './NotificationItem.scss';

import Icon28ChevronRightOutline from '@vkontakte/icons/dist/28/chevron_right_outline';

interface IProps {
  name: string,
  comment?: string,
  icon?: ReactNode,
  src: string,
  date: string,
  title: string,
  status?: string,
  priority?: string
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      comment,
      src,
      date,
      title,
      status,
      priority,
      icon //скрыть на телефоне
    } = this.props;

    return (
      <Group>
        <SimpleCell
          before={<Avatar size={48} src={src} />}
          after={<Icon28ChevronRightOutline />}
          multiline
        >
          <div className={styles.name}>
            {name}
          </div>
          {(status || priority) && (
            <div className={styles.status}>
            {status && (<div>Новый статус отчета — <b>{status}</b></div>)}
            {priority && (<div>Приоритет отчета — <b>{priority}</b></div>)}
            </div>
          )}
          <div className={styles.comment}>
            {comment}
          </div>
          <div className={styles.data}>
            {date}, <Link>{title}</Link>
          </div>
        </SimpleCell>
      </Group>
    );
  }
}
