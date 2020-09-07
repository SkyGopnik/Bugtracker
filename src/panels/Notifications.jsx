import React from 'react';
import axios from 'axios';
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  platform,
  IOS,
  Link,
  Placeholder,
  PullToRefresh, Spinner
} from '@vkontakte/vkui';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';

import Notification from '../components/Notification/Notification.jsx';

import isset from '../functions/isset.jsx';

const osname = platform();

let timer;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      ptrLoading: false,
      notifications: null,
      showMore: false,
      moreLoading: false,
      page: 1,
      load: false
    };

    const { id, panelData, globalData } = props;

    this.state.key = JSON.stringify({
      type: id
    });

    const { key } = this.state;

    if (panelData.isBack) {
      this.state = globalData[key];
    } else {
      this.state.load = true;
    }

    this.getNotifications = this.getNotifications.bind(this);
  }

  componentDidMount() {
    const { page, load } = this.state;

    if (load) {
      this.setState({
        load: false
      });

      this.getNotifications(page);
    }
  }

  componentWillUnmount() {
    const { setGlobalData } = this.props;
    const { key } = this.state;
    setGlobalData(key, this.state);

    clearTimeout(timer);
  }

  getNotifications(page, update) {
    const { notifications } = this.state;

    if (update) {
      this.setState({
        ptrLoading: true
      });
    } else {
      if (page !== 1) {
        this.setState({
          moreLoading: true
        });
      }
    }

    axios.get(`https://reviews.skyreglis.studio/notifications/get/?page=${page}`)
      .then(async (res) => {
        const response = res.data;

        if (!isset(response.error)) {
          const { list, showMore } = response;

          const oldArray = notifications !== null && !update ? notifications : [];
          const newArray = oldArray.concat(list);

          timer = setTimeout(() => {
            this.setState({
              ptrLoading: false
            });
          }, 500);

          this.setState({
            notifications: newArray,
            showMore: showMore,
            moreLoading: false,
            page: page + 1
          });
        }
      });
  }

  render() {
    const { id, onPanelChange } = this.props;
    const {
      ptrLoading,
      notifications,
      showMore,
      page,
      moreLoading
    } = this.state;

    return (
      <Panel id={id}>
        <PanelHeader
          left={
            <PanelHeaderButton onClick={() => window.history.back()}>
              {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderButton>
          }
        >
          Уведомления
        </PanelHeader>

        <PullToRefresh onRefresh={() => this.getNotifications(1, true)} isFetching={ptrLoading}>
          {notifications !== null ? (
            notifications.length !== 0 ? (
              notifications.map((item, index) => (
                <Notification
                  key={`notification-${index}`}
                  type={item.type}
                  params={JSON.parse(item.params)}
                  date={item.created_date}
                  onPanelChange={onPanelChange}
                />
              ))
            ) : (
              <Placeholder
                icon={<Icon28GhostOutline width={56} height={56} />}
                header="Упс, похоже тут пустовато"
                stretched
              >
                В этой вкладке будут показываться все Ваши уведомления, возможно, они скоро появятся
              </Placeholder>
            )
          ) : (
            <>
              <Notification load />
              <Notification load />
              <Notification load />
            </>
          )}
          {!moreLoading && showMore && (
            <div className="show-more">
              <Link onClick={() => this.getNotifications(page)}>Показать больше</Link>
            </div>
          )}
          {moreLoading && (<Spinner className="more-loading" />)}
        </PullToRefresh>
      </Panel>
    );
  }
}
