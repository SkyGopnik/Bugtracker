import React from 'react';
import {
  Header,
  Group
} from "@vkontakte/vkui";

import ReportItem, { IProps as ReportItemProps } from '../../MainPanel/Reports/ReportItem/ReportItem';

interface IProps {
  reports: Array<ReportItemProps>,
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      reports
    } = this.props;

    return (
      <Group header={<Header indicator={reports.length}>Отчеты</Header>} separator="hide">
        {reports.map((report, index) => (
          <ReportItem
            key={`user-panel-report-item-${index}`}
            name={report.name}
            tags={report.tags}
            author={report.author}
            date={report.date}
            status={report.status}
          />
        ))}
      </Group>
    );
  }
}
