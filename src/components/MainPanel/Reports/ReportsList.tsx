import React from 'react';
import {
  Search,
  Separator,
  Spinner,
  Div,
  Placeholder
} from "@vkontakte/vkui";

import Icon56GhostOutline from '@vkontakte/icons/dist/56/ghost_outline';

import ReportItem from './ReportItem/ReportItem';

interface IProps {
  list: {
    loading: boolean,
    error: any | null,
    data: Array<any> // TODO: Описать объект
  },
  getReportList(page?: number)
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const { getReportList } = this.props;

    getReportList();
  }

  render() {
    const { list } = this.props;

    return (
      <div>
        <Search />
        <Separator />
        <div>
          {!list.loading ? (
            list.data.length !== 0 ? (
              list.data.map((item, index) => (
                <ReportItem
                  key={index}
                  name={item.title}
                  tags={JSON.parse(item.tags)}
                  author={`${item.userInfo.first_name} ${item.userInfo.last_name}`}
                  date={item.createdAt}
                  status={item.status.text}
                />
              ))
            ) : (
              <Placeholder
                icon={<Icon56GhostOutline />}
                header="Отчёты"
              >
                Похоже, тут ничего нет
              </Placeholder>
            )
          ) : (
            <Div>
              <Spinner />
            </Div>
          )}
        </div>
      </div>
    );
  }
}
