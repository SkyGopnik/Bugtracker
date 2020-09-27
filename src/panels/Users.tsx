import React from 'react';
import {
  Panel,
  PanelHeader
} from '@vkontakte/vkui';

import HistoryBackBtn from "src/components/HistoryBackBtn";

interface IProps {
  id: string
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      id
    } = this.props;

    return (
      <Panel id={id}>
        <PanelHeader left={<HistoryBackBtn />}>
          Участники
        </PanelHeader>
      </Panel>
    );
  }
}
