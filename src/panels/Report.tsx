import React from 'react';
import {
  Panel,
  PanelHeader
} from '@vkontakte/vkui';

import Report from "src/components/MainPanel/Reports/Report/ReportContainer";
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
          Отчёт
        </PanelHeader>
        <Report />
      </Panel>
    );
  }
}
