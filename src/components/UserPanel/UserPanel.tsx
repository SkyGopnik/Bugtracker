import React from 'react';
import {
  Link,
  Cell,
  Avatar,
  Group
} from "@vkontakte/vkui";

import styles from './UserPanel.scss';

interface IProps {
  name: string,
  rating: string,
  src: string,
  reports: string
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      rating,
      reports,
      src,
    } = this.props;

    return (
      <div>
        <Group>
          <Cell before={<Avatar size={80} src={src} />}>
            <div className={styles.name}>{name}</div>
            <div className={styles.rating}>#{rating} в общем рейтинге, <Link>{reports.length} отчётов</Link></div>
          </Cell>
        </Group>
      </div>
    );
  }
}