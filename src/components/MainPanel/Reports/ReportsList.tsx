import React from 'react';
import {
  Search,
  Separator
} from "@vkontakte/vkui";
import ReportItem from './ReportItem/ReportItem';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <Search />
        <Separator />
        <div>
          <ReportItem
            name={"Длинное название. Длинное название. Длинное название. Длинное название. Длинное название. Длинное название. Длинное название. Длинное название. Длинное название. Длинное название. Длинное название. Длинное название. Длинное название. Длинное название. Длинное название. Длинное название."}
            tags={"Сервисы"}
            author={"Александр Тихонович"}
            date={"25 сентября 2020"}
            status={"На рассмотрении"}
          />
          <ReportItem
            name={"Обычное название"}
            tags={"Лента"}
            author={"Артём Петрунин"}
            date={"24 сентября 2020"}
            status={"В работе"}
          />
          <ReportItem
            name={"Обычное название"}
            tags={"Лента"}
            author={"Артём Петрунин"}
            date={"24 сентября 2020"}
            status={"В работе"}
          />
          <ReportItem
            name={"Обычное название"}
            tags={"Лента"}
            author={"Артём Петрунин"}
            date={"24 сентября 2020"}
            status={"В работе"}
          />
          <ReportItem
            name={"Обычное название"}
            tags={"Лента"}
            author={"Артём Петрунин"}
            date={"24 сентября 2020"}
            status={"В работе"}
          />
          <ReportItem
            name={"Обычное название"}
            tags={"Лента"}
            author={"Артём Петрунин"}
            date={"24 сентября 2020"}
            status={"В работе"}
          />
          <ReportItem
            name={"Обычное название"}
            tags={"Лента"}
            author={"Артём Петрунин"}
            date={"24 сентября 2020"}
            status={"В работе"}
          />
          <ReportItem
            name={"Обычное название"}
            tags={"Лента"}
            author={"Артём Петрунин"}
            date={"24 сентября 2020"}
            status={"В работе"}
          />
          <ReportItem
            name={"Обычное название"}
            tags={"Лента"}
            author={"Артём Петрунин"}
            date={"24 сентября 2020"}
            status={"В работе"}
          />
          <ReportItem
            name={"Обычное название"}
            tags={"Лента"}
            author={"Артём Петрунин"}
            date={"24 сентября 2020"}
            status={"В работе"}
          />
          <ReportItem
            name={"Обычное название"}
            tags={"Лента"}
            author={"Артём Петрунин"}
            date={"24 сентября 2020"}
            status={"В работе"}
          />
          <ReportItem
            name={"Обычное название"}
            tags={"Лента"}
            author={"Артём Петрунин"}
            date={"24 сентября 2020"}
            status={"В работе"}
          />
          <ReportItem
            name={"Обычное название"}
            tags={"Лента"}
            author={"Артём Петрунин"}
            date={"24 сентября 2020"}
            status={"В работе"}
          />
        </div>
      </div>
    );
  }
}
