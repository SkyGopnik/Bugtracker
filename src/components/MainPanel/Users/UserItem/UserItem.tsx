import React from 'react';
import {
  Div,
  SimpleCell,
  Avatar,
  Separator,
  Group
} from "@vkontakte/vkui";

import styles from './UserItem.scss';

interface IProps {
  name: string,
  rating: string,
  report: string,
  src: string,
  number: string,
  onClick?: Function
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      rating,
      report,
      src,
      number,
      onClick
    } = this.props;

    return (
      <Group className={styles.block}>
        <div className={styles.number}>{number}</div>
        <SimpleCell
          className={styles.name}
          before={<Avatar size={40} className={styles.avatar} src={src} />}
          onClick={() => onClick && onClick()}
        >
          {name}
        </SimpleCell>
        <div className={styles.rating}>
          {rating}
        </div>
        <div className={styles.report}>
          {report}
        </div>
      </Group>
    );
  }
}
