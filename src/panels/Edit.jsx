import React from 'react';
import {
  Panel,
  PanelHeader,
  Avatar,
  Snackbar,
  PanelHeaderButton,
  IOS,
  platform
} from '@vkontakte/vkui';

import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon16Clear from '@vkontakte/icons/dist/16/clear';

import Icon24Back from '@vkontakte/icons/dist/24/back';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

import ReviewForm from '../components/AddReviewForm/ReviewForm.jsx';

const osname = platform();

let timerId;

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      snackbar: null
    };

    this.changeSnackbar = this.changeSnackbar.bind(this);
  }

  componentWillUnmount() {
    clearTimeout(timerId);
  }

  changeSnackbar(snackText, error) {
    const { snackbar } = this.state;

    if (snackbar) return;
    timerId = setTimeout(() => {
      this.setState({ snackbar: null });
    }, 11000);

    let snackbarComp;

    if (!error) {
      snackbarComp = (
        <Snackbar
          duration="10000"
          layout="vertical"
          onClose={() => this.setState({ snackbar: null })}
          before={
            <Avatar size={24} style={{ background: '#528bcc' }}>
              <Icon16Done fill="#fff" width={14} height={14} />
            </Avatar>
          }
        >
          {snackText}
        </Snackbar>
      );
    } else {
      snackbarComp = (
        <Snackbar
          layout="vertical"
          onClose={() => this.setState({ snackbar: null })}
          before={
            <Avatar size={24} style={{ background: '#e64646' }}>
              <Icon16Clear fill="#fff" width={14} height={14} />
            </Avatar>
          }
        >
          {snackText}
        </Snackbar>
      );
    }

    this.setState({
      snackbar: snackbarComp
    });
  }

  render() {
    const {
      id,
      changePopout,
      panelData,
      updateList
    } = this.props;
    const { snackbar } = this.state;

    return (
      <Panel id={id}>
        <PanelHeader
          left={
            <PanelHeaderButton onClick={() => window.history.back()}>
              {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderButton>
          }
        >
          Редактирование
        </PanelHeader>
        <ReviewForm
          type="edit"
          panelData={panelData}
          changePopout={changePopout}
          changeSnackbar={this.changeSnackbar}
          updateList={updateList}
        />
        {snackbar}
      </Panel>
    );
  }
}
