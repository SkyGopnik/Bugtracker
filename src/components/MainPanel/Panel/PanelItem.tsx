import React, { ReactNode } from 'react';
import { Header } from "@vkontakte/vkui";
import styles from './PanelItem.scss';

interface IProps {
  name: string,
  icon?: ReactNode,
  tabs?: string,
  search?: string
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name
    } = this.props;

    return (
      <div className={styles.header}>
        <Header>{name}</Header>
      </div>
    );
  }
}