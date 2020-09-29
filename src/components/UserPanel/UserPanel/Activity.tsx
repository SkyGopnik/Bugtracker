import React from 'react';
import {
  Header,
  Group
} from "@vkontakte/vkui";

interface IProps {
  date: string
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      date
    } = this.props;

    return (
      <div>
        <Group header={<Header indicator={date}>Активность</Header>}>

        </Group>
      </div>
    );
  }
}