import React, {ReactChild, ReactNode} from 'react';
import {
  Header,
  Separator
} from "@vkontakte/vkui";

import styles from './DesktopContent.scss';

interface IProps {
  title: string,
  children: ReactChild
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      title,
      children
    } = this.props;

    return (
      <div>
        <Header className={styles.header}>{title}</Header>
        <Separator />
        {children}
      </div>
    );
  }
}
