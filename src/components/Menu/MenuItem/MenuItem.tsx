import React, { ReactNode } from 'react';
import { Cell } from "@vkontakte/vkui";

// @ts-ignore
import styles from './MenuItem.scss';

interface IProps {
  name: string,
  indicator?: string,
  icon: ReactNode,
  active: boolean
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      indicator,
      icon,
      active
    } = this.props;

    return (
      <Cell
        before={icon}
        // onClick={go}
        indicator={
          indicator && (
            <div>
              {indicator}
            </div>
          )
        }
        multiline
      >
        <div className={styles.item}>
          {!active ? name : <b>{name}</b>}
        </div>
      </Cell>
    );
  }
}
