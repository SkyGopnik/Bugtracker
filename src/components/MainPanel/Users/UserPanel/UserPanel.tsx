import React from 'react';
import {
  Link,
  Cell,
  Avatar,
  Header,
  Group
} from "@vkontakte/vkui";

import styles from './UserPanel.scss';

interface IProps {
  name: string,
  rating: string,
  report: string,
  src: string,
  activity,
  product: string,
  date: string
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      rating,
      report,
      src,
      product,
      date
    } = this.props;

    return (
      <div>
        <Group>
          <Cell
            before={<Avatar size={80} src={src} />}
          >
            <div className="name">{name}</div>
            <div className="rating">#{rating} в общем рейтинге, <Link>{report} отчётов</Link></div>
        </Cell>
        </Group>
        <Group header={<Header indicator={date}>Активность</Header>}>
          
        </Group>
        <Group header={<Header indicator={product}>Продукты</Header>}>
          
        </Group>
        <Group header={<Header indicator={report}>Отчеты</Header>}>
          
        </Group>
      </div>
    );
  }
}
