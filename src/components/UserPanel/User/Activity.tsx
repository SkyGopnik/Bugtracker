import React from 'react';
import {
  Header,
  Group
} from "@vkontakte/vkui";

export interface IProps {
  className?: string,
  date: string
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      date
    } = this.props;

    return (
      <Group className={className ? className : ''} header={<Header indicator={date}>Активность</Header>}>

      </Group>
    );
  }
}
