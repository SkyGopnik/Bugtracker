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
  changeActive(name: string)
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
      changeActive
    } = this.props;

    return (
      <Group>
        <SimpleCell
          before={<Avatar className={styles.avatar} size={80} src={src} />}
          onClick={() => changeActive('product')}
          after={
            button && (
              <Button>
                {button}
              </Button>
            )
          }
          description={version}
          //onClick={go}
          multiline
        >
          {name}
          <div className={styles.statistic}>{statistic}</div>
        </SimpleCell>
      </Group>
    );
  }
}
