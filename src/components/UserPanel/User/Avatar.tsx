import React from 'react';
import {
  Link,
  Cell,
  Avatar,
  Group
} from "@vkontakte/vkui";

import styles from '../UserPanel.scss';

export interface IProps {
  className?: string,
  name: string,
  ratingNumber: number,
  src: string,
  reportsCount: number
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      name,
      ratingNumber,
      src,
      reportsCount
    } = this.props;

    return (
      <Group className={className ? className : ''}>
        <Cell before={<Avatar size={80} src={src} />}>
          <div className={styles.name}>{name}</div>
          <div className={styles.rating}>#{ratingNumber} в общем рейтинге, <Link>{reportsCount} отчётов</Link></div>
        </Cell>
      </Group>
    );
  }
}
