import React from 'react';
import {
  List,
  SimpleCell,
  Avatar,
  Separator
} from "@vkontakte/vkui";

import styles from './Comment.scss';

interface IProps{}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <>
      <List>
        <SimpleCell
          before={<Avatar size={48}/>}
          multiline
        >
          <div className={styles.name}>
            Модератор
          </div>
            <div className={styles.status}>
              <div>Новый статус отчета — <b>Исправлен</b></div>
            </div>
          <div className={styles.comment}>
            Спасибо, исправили.
          </div>
          <div className={styles.data}>
            01.01.2020
          </div>
        </SimpleCell>
        </List>
        <Separator wide/>
        </>
    );
  }
}
