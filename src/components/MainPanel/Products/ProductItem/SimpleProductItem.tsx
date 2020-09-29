import React from 'react';
import {
  Cell,
  Avatar,
  Group
} from "@vkontakte/vkui";

import styles from './ProductItem.scss';

export interface IProps {
  name: string,
  report: string,
  src: string,
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      report,
      src,
    } = this.props;

    return (
      <Group>
        <Cell
          asideContent={report}
          before={<Avatar className={styles.avatar} size={48} src={src} />}
          //onClick={go}
          multiline
        >
          {name}
        </Cell>
      </Group>
    );
  }
}