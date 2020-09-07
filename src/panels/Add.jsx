import React from 'react';
import {
  Panel,
  PanelHeader,
  Avatar,
  Snackbar
} from '@vkontakte/vkui';

import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon16Clear from '@vkontakte/icons/dist/16/clear';

import ReviewForm from '../components/AddReviewForm/ReviewForm.jsx';

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
      globalData,
      setGlobalData
    } = this.props;
    const { snackbar } = this.state;

    return (
      <Panel id={id}>
        <PanelHeader>
          Добавить
        </PanelHeader>
        <ReviewForm
          globalData={globalData}
          setGlobalData={setGlobalData}
          changePopout={changePopout}
          changeSnackbar={this.changeSnackbar}
        />
        {snackbar}
      </Panel>
    );
  }
}
