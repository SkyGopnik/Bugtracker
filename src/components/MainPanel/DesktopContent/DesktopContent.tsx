import React, {ReactChild, ReactNode} from 'react';
import {
  Header,
  Separator
} from "@vkontakte/vkui";

import styles from './DesktopContent.scss';

interface IProps {
  className?: string,
  title?: string,
  children: ReactChild
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      title,
      children
    } = this.props;

    return (
      <div className={className ? className : ''}>
        {title && (
          <>
            <Header className={styles.header}>{title}</Header>
            <Separator />
          </>
        )}
        {children}
      </div>
    );
  }
}
