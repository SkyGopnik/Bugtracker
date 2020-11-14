import React from 'react';
import {
  Cell,
  Button,
  Avatar,
  Group,
  SimpleCell
} from "@vkontakte/vkui";

import styles from './ProductItem.scss';

export interface IProps {
  name: string,
  statistic: string,
  version: string,
  src: string,
  button?: string,
  onClick?: Function
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      statistic,
      version,
      src,
      button,
      onClick
    } = this.props;

    return (
      <SimpleCell
        className={styles.productItem}
        before={<Avatar className={styles.avatar} size={80} src={src} />}
        after={
          button && (
            <Button>
              {button}
            </Button>
          )
        }
        description={version}
        onClick={() => onClick && onClick()}
        multiline
      >
        {name}
        <div className={styles.statistic}>{statistic}</div>
      </SimpleCell>
    );
  }
}
