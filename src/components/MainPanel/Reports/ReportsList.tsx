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
    data: Array<{
      id?: string,
      userId: string,
      product: string,
      platform: string,
      osnameAndroid: string | null,
      osnameIOS: string | null,
      title: string,
      steps: string,
      result: string,
      oresult: string,
      tags: string,
      priority: string,
      type: string,
      status?: {
        text: string
      },
      userInfo?: {
        uid: string,
        first_name: string,
        last_name: string,
        gender: string,
        pic_1: string
      },
      createdAt?: Date,
      updatedAt?: Date
    }>
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
