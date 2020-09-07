import React from 'react';
import {
  IOS,
  Panel,
  PanelHeader,
  PanelHeaderButton,
  PullToRefresh,
  platform
} from '@vkontakte/vkui';

import Icon24Back from '@vkontakte/icons/dist/24/back';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28Notifications from '@vkontakte/icons/dist/28/notifications';

// Компоненты
import Profile from '../components/Profile/Profile.jsx';

import isset from '../functions/isset.jsx';

const osname = platform();

let timer;

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      ptrLoading: false
    };

    this.onRefresh = this.onRefresh.bind(this);
  }

  componentDidMount() {
    const { getOwnUser } = this.props;

    getOwnUser(false);
  }

  componentWillUnmount() {
    clearTimeout(timer);
  }

  onRefresh() {
    const { getReviewList, getOwnUser } = this.props;

    this.setState({ ptrLoading: true });

    const getReviewListPromise = new Promise((resolve) => {
      getReviewList(true, () => {
        resolve(true);
      }, true);
    });

    const getOwnUserPromise = new Promise((resolve) => {
      getOwnUser(true, () => {
        resolve(true);
      });
    });

    Promise.all([getReviewListPromise, getOwnUserPromise]).then(() => {
      timer = setTimeout(() => {
        this.setState({
          ptrLoading: false
        });
      }, 500);
    });
  }

  render() {
    const {
      id,
      user,
      userReviewList,
      onPanelChange,
      onStoryAndPanelChange,
      getUserReviewList,
      changePopout,
      getReviewList,
      panelData
    } = this.props;
    const { ptrLoading } = this.state;

    return (
      <Panel id={id}>
        <PanelHeader
          left={
            <>
              {panelData !== null && isset(panelData) && isset(panelData.showBack) && (
                <PanelHeaderButton onClick={() => window.history.back()}>
                  {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
                </PanelHeaderButton>
              )}
              <PanelHeaderButton
                data-to="notifications"
                onClick={onPanelChange}
              >
                <Icon28Notifications />
              </PanelHeaderButton>
            </>
          }
        >
          Профиль
        </PanelHeader>

        <PullToRefresh onRefresh={this.onRefresh} isFetching={ptrLoading}>
          {/* Профиль */}
          <Profile
            user={user}
            userReviewList={userReviewList}
            onPanelChange={onPanelChange}
            onStoryAndPanelChange={onStoryAndPanelChange}
            getUserReviewList={getUserReviewList}
            getReviewList={getReviewList}
            changePopout={changePopout}
          />
        </PullToRefresh>
      </Panel>
    );
  }
}
