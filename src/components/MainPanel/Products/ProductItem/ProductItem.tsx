import React from 'react';
import {
  Cell,
  Button,
  Avatar,
  Group
} from "@vkontakte/vkui";

import styles from './ProductItem.scss';

interface IProps {
  name: string,
  statistic: string,
  version: string,
  src: string,
  button?: string
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
      button
    } = this.props;

    return (
      <Group>
        <Cell
          asideContent={
            button && (
              <Button>
                {button}
              </Button>
            )
          }
          before={<Avatar className={styles.avatar} size={80} src={src} />}
          description={version}
          //onClick={go}
          multiline
        >
          {name}
          <div className={styles.statistic}>{statistic}</div>
        </Cell>
      </Group>
    );
  }
}
