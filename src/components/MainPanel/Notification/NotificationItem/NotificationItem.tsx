import React, { ReactNode } from 'react';
import {
  Avatar,
  Cell,
  Group,
  Link
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
  status: string,
  prioritet: string
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
      prioritet,
      icon //скрыть на телефоне
    } = this.props;

    return (
      <Group>
        <Cell
          before={<Avatar className={styles.avatar} size={48} src={src} />}
          asideContent={<Icon28ChevronRightOutline />}
          multiline
        >
          <div className={styles.name}>
              {name}
          </div>
          <div className={styles.status}>
              <span className={styles.button}>Новый статус отчета — <b>{status}</b><br></br>Приоритет отчета — <b>{prioritet}</b></span>
          </div>
          <div className={styles.comment}>
              {comment}
          </div>
          <div className={styles.data}>
              {date}, <Link>{title}</Link>
          </div>
        </Cell>
      </Group>
    );
  }
}
