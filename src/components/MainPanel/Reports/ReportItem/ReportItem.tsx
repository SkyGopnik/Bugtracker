import React from 'react';
import { Cell, Group } from "@vkontakte/vkui";

// @ts-ignore
import styles from './ReportItem.scss';

interface IProps {
  name: string,
  tags: Array<string>,
  author: string,
  date: string,
  status: string
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
      status
    } = this.props;

    return (
      <Group className={styles.reportItem}>
        <Cell>
          <div className={styles.title}>
            {name}
          </div>
          <div className={styles.tags}>
            {tags.map((tag) => (
              <span className={styles.buttonTags}>{tag}</span>
            ))}
          </div>
          <div className={styles.footer}>
            <div className={styles.nameAndDate}>
              {author} · {date}
            </div>
            <div className={styles.status}>
              {status}
            </div>
          </div>
        </Cell>
      </Group>
    );
  }
}
