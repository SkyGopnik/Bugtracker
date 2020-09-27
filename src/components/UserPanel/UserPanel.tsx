import React from 'react';
import {
  Link,
  Cell,
  Avatar,
  Header,
  Group
} from "@vkontakte/vkui";

import ProductItem, { IProps as ProductItemProps } from "../MainPanel/Products/ProductItem/ProductItem";
import ReportItem, { IProps as ReportItemProps } from '../MainPanel/Reports/ReportItem/ReportItem';

interface IProps {
  name: string,
  rating: string,
  src: string,
  activity: string,
  date: string,
  products: Array<ProductItemProps>,
  reports: Array<ReportItemProps>,
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      rating,
      reports,
      src,
      products,
      date
    } = this.props;

    return (
      <div>
        <Group>
          <Cell before={<Avatar size={80} src={src} />}>
            <div className="name">{name}</div>
            <div className="rating">#{rating} в общем рейтинге, <Link>{reports.length} отчётов</Link></div>
          </Cell>
        </Group>
        <Group header={<Header indicator={date}>Активность</Header>}>

        </Group>
        <Group header={<Header indicator="test">Продукты</Header>}>
          {products.map((product, index) => (
            'test'
          ))}
        </Group>
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
      </div>
    );
  }
}

