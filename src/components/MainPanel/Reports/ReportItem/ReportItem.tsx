import React from 'react';
import {Cell} from "@vkontakte/vkui";

import getDate from "src/functions/getDate";

import styles from './ReportItem.scss';

export interface IProps {
  name: string,
  tags: Array<string>,
  author: string,
  date: Date,
  status: string,
  onClick?: Function
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      tags,
      author,
      date,
      status,
      onClick
    } = this.props;

    return (
      <div className={styles.reportItem}>
        <Cell onClick={() => onClick && onClick()}>
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
              {author} · {getDate(date)}
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
