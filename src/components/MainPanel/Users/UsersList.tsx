import React from 'react';
import {
  List,
  Div, 
  Search,
  Separator
} from "@vkontakte/vkui";
import UserItem from './UserItem/UserItem';
import styles from './UserItem/UserItem.scss';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Search />
        <Separator />
        <Div>
          <div className={styles.tableBlock}>
            <div className={styles.tableRating}>
              Рейтинг
            </div>
            <div className={styles.tableReport}>
              Отчёты
            </div>
          </div>
          <UserItem
            name="Александр Тихонович"
            number="1"
            report="100"
            rating="284"
            src="https://sun9-7.userapi.com/9Q1jTOy6p-oTAPkNQIosGOYt4jP95eLueJwgCg/zlQ_yVUn2G8.jpg"
          />
          <UserItem
            name="Артем Петрунин"
            number="2"
            report="98"
            rating="274"
            src="https://sun9-68.userapi.com/hT7OVKhVJBuNCaURI2x-q-ESoQKoUCES7iKwIw/EvSXxluvOCs.jpg"
          />
        </Div>
      </div>
    );
  }
}
