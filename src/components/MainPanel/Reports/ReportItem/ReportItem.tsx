import React from 'react';
import {
  Cell,
  Group
} from "@vkontakte/vkui";

// @ts-ignore
import styles from './ReportItem.scss';

export interface IProps {
  name: string,
  tags: Array<string>,
  author: string,
  date: Date,
  status: string,
  changeActive(name: string)
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  getDate = (timestamp: Date) => {
    const a = new Date(timestamp);
    const months = ['января', 'февраля', 'марта', 'апреля', 'мая', 'июня', 'июля', 'августа', 'сентября', 'октября', 'ноября', 'декабря'];
    const month = months[a.getMonth()];
    const date = a.getDate();
    const hour = a.getHours();
    let min;
    if (a.getMinutes() > 9) {
      min = a.getMinutes();
    } else {
      min = '0' + a.getMinutes();
    }
    const time = date + ' ' + month + ' в ' + hour + ':' + min;
    return time;
  }

  render() {
    const {
      name,
      tags,
      author,
      date,
      status,
      changeActive
    } = this.props;

    return (
      <div className={styles.reportItem}>
        <Cell onClick={() => changeActive('report')}>
          <div className={styles.title}>
            {name}
          </div>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={`report-item-tag-${index}`} className={styles.buttonTags}>{tag}</span>
            ))}
          </div>
          <div className={styles.footer}>
            <div className={styles.nameAndDate}>
              {author} · {this.getDate(date)}
            </div>
            <div className={styles.status}>
              {status}
            </div>
          </div>
        </Cell>
      </div>
    );
  }
}
