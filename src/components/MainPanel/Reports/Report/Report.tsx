import React from 'react';
import {
  Div,
  Title,
  Separator,
  Group,
  Header,
  SimpleCell,
  InfoRow,
  MiniInfoCell, Spinner
} from "@vkontakte/vkui";

import Icon20ServicesOutline from '@vkontakte/icons/dist/20/services_outline';
import Icon20FollowersOutline from '@vkontakte/icons/dist/20/followers_outline';
import Icon20CubeBoxOutline from '@vkontakte/icons/dist/20/cube_box_outline';

import Icon24Linked from '@vkontakte/icons/dist/24/linked';
import Icon24PenOutline from '@vkontakte/icons/dist/24/pen_outline';
import Icon24ErrorCircleOutline from '@vkontakte/icons/dist/24/error_circle_outline';
import Icon24ViewOutline from '@vkontakte/icons/dist/24/view_outline';

import Icon28HistoryForwardOutline from '@vkontakte/icons/dist/28/history_forward_outline';

import getDate from "src/functions/getDate";

import {AppReducerIterface} from "src/store/app/reducers";
import {ReportReducerIterface} from "src/store/reportList/reducers";

import styles from './Report.scss';

interface IProps extends AppReducerIterface, ReportReducerIterface {}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const {
      panelData,
      getReport,
      changeReportStatus
    } = this.props;

    getReport(panelData);
    changeReportStatus(true);
  }

  componentWillUnmount() {
    const { changeReportStatus } = this.props;

    changeReportStatus(false);
  }

  wrap = (text: string) => {
    return <span style={{whiteSpace: 'pre-line'}}>{text}</span>;
  }

  joinArray = (json: string): string => {
    return JSON.parse(json).join(', ');
  }

  render() {
    const { panelData, single } = this.props;
    const {
      id,
      userId,
      platform,
      title,
      steps,
      result,
      oresult,
      tags,
      priority,
      type,
      product,
      status,
      osnameAndroid,
      osnameIOS,
      createdAt,
      updatedAt
    } = single.data;

    return (
      Object.keys(single.data).length !== 0 && panelData === id ? (
        <div>
          <Div className={styles.title}>
            <Title level="2" weight="regular">{title}</Title>
          </Div>
          <Group>
            <SimpleCell disabled>
              <InfoRow header="Шаги воспроизведения">
                {this.wrap(steps)}
              </InfoRow>
            </SimpleCell>
            <SimpleCell disabled>
              <InfoRow header="Фактический результат">
                {this.wrap(result)}
              </InfoRow>
            </SimpleCell>
            <SimpleCell disabled>
              <InfoRow header="Ожидаемый результат">
                {this.wrap(oresult)}
              </InfoRow>
            </SimpleCell>
          </Group>
          <Group>
            <MiniInfoCell
              before={<Icon20ServicesOutline />}
              textWrap="full"
              textLevel="primary"
            >
              {product.title}
            </MiniInfoCell>
            <MiniInfoCell
              before={<Icon20FollowersOutline />}
              textWrap="full"
              textLevel="primary"
            >
              1.0.0
            </MiniInfoCell>
            <MiniInfoCell
              before={<Icon20CubeBoxOutline />}
              textWrap="full"
              textLevel="primary"
            >
              {JSON.parse(platform).map((name, index) => (
                <span key={index}>
                  {name === 'Android' && <div className={styles.version}>Android ({this.joinArray(osnameAndroid)})</div>}
                  {name === 'iOS' && <div className={styles.version}>iOS ({this.joinArray(osnameIOS)})</div>}
                  {name === 'Windows' && <div className={styles.version}>Windows</div>}
                </span>
              ))}
            </MiniInfoCell>
            <MiniInfoCell
              before={<Icon24Linked width={20} height={20} />}
              textWrap="full"
              textLevel="primary"
            >
              {JSON.parse(tags).join('')}
            </MiniInfoCell>
            <MiniInfoCell
              before={<Icon24PenOutline width={20} height={20} />}
              textWrap="full"
              textLevel="primary"
            >
              {status && status.text}
            </MiniInfoCell>
            <MiniInfoCell
              before={<Icon24ErrorCircleOutline width={20} height={20} />}
              textWrap="full"
              textLevel="primary"
            >
              {type}
            </MiniInfoCell>
            <MiniInfoCell
              before={<Icon24ViewOutline width={20} height={20} />}
              textWrap="full"
              textLevel="primary"
            >
              {priority}
            </MiniInfoCell>
            <MiniInfoCell
              before={<Icon28HistoryForwardOutline width={20} height={20} />}
              textWrap="full"
              textLevel="primary"
            >
              {createdAt === updatedAt ? 'Создано' : 'Обновлено'} {getDate(createdAt)}
            </MiniInfoCell>
          </Group>
        </div>
      ) : (
        <Div>
          <Spinner />
        </Div>
      )
    );
  }
}
