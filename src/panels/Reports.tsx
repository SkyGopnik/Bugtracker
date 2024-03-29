import React from 'react';
import {
  Panel,
  PanelHeader
} from '@vkontakte/vkui';

import Reports from "src/components/MainPanel/Reports/ReportListContainer";
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
          Все отчёты
        </PanelHeader>
        <Reports />
      </Panel>
    );
  }
}
