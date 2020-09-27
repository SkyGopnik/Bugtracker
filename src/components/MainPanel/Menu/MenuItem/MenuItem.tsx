import React, { ReactNode } from 'react';
import { Cell } from "@vkontakte/vkui";

// @ts-ignore
import styles from './MenuItem.scss';

interface IProps {
  name: string,
  indicator?: string,
  icon: ReactNode,
  active?: boolean,
  onClick?: Function,
  expandable?: boolean,
  changePanel?(panel: string)
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
      active,
      onClick,
      expandable
    } = this.props;

    return (
      <Cell
        before={icon}
        indicator={
          indicator && (
            <div className={styles.indicator}>
              {indicator}
            </div>
          )
        }
        onClick={() => onClick && onClick()}
        expandable={expandable && expandable}
        multiline
      >
        <div className={styles.item}>
          {!active ? name : <b>{name}</b>}
        </div>
      </Cell>
    );
  }
}
