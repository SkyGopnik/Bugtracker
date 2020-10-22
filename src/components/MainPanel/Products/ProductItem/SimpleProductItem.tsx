import React from 'react';
import {
  SimpleCell,
  Avatar
} from "@vkontakte/vkui";

import styles from './ProductItem.scss';

export interface IProps {
  name: string,
  report: string,
  src: string
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      report,
      src
    } = this.props;

    return (
      <div className={styles.productItem}>
        <SimpleCell
          before={<Avatar className={styles.avatar} size={48} src={src} />}
          after={report}
          //onClick={go}
          multiline
        >
          {name}
        </SimpleCell>
      </div>
    );
  }
}

