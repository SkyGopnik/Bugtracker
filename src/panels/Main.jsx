import React from 'react';
import {
  Panel,
  PanelHeader
} from '@vkontakte/vkui';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {
      id
    } = this.props;

    return (
      <Panel id={id}>
        <PanelHeader>
          Главная
        </PanelHeader>

        1
      </Panel>
    );
  }
}
