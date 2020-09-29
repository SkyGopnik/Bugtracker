import React from 'react';
import {
  Header,
  Group,
  Link,
  Separator
} from "@vkontakte/vkui";

import ReportItem, { IProps as ReportItemProps } from '../../MainPanel/Reports/ReportItem/ReportItem';

export interface IProps {
  className?: string,
  list: Array<ReportItemProps>
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      list
    } = this.props;

    return (
      <Group className={className ? className : ''} header={<Header indicator={list.length} aside={<Link>Показать все</Link>}>Отчеты</Header>} separator="hide">
        <Separator />
        {list.map((report, index) => (
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
