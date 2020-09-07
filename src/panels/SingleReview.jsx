import React from 'react';
import axios from 'axios';
import bridge from '@vkontakte/vk-bridge';
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  platform,
  IOS,
  Snackbar,
  Avatar,
  PanelHeaderContent,
  PanelHeaderContext,
  Cell,
  List,
  Placeholder,
  Button
} from '@vkontakte/vkui';

import Icon16Done from '@vkontakte/icons/dist/16/done';
import Icon16Clear from '@vkontakte/icons/dist/16/clear';
import Icon16Dropdown from '@vkontakte/icons/dist/16/dropdown';

import Icon24Back from '@vkontakte/icons/dist/24/back';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28ReportOutline from '@vkontakte/icons/dist/28/report_outline';
import Icon28ShareOutline from '@vkontakte/icons/dist/28/share_outline';
import Icon28LinkOutline from '@vkontakte/icons/dist/28/link_outline';

import Icon56ErrorOutline from '@vkontakte/icons/dist/56/error_outline';

import SingleReview from '../components/SingleReview/SingleReview.jsx';

import queryGet from '../functions/query_get.jsx';
import isset from '../functions/isset.jsx';

const osname = platform();

let timer;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      status: null,
      review: null,
      author: null,
      snackbar: null,
      contextOpened: false
    };

    const { id, panelData, globalData } = props;

    this.state.key = JSON.stringify({
      type: id,
      panelData: {
        id: panelData.id
      }
    });

    const { key } = this.state;

    if (panelData.isBack) {
      this.state = globalData[key];
    } else {
      this.loadSingleReview();
    }

    this.changeSnackbar = this.changeSnackbar.bind(this);
    this.toggleContext = this.toggleContext.bind(this);
    this.reportReview = this.reportReview.bind(this);
    this.loadSingleReview = this.loadSingleReview.bind(this);
  }

  componentWillUnmount() {
    const { setGlobalData } = this.props;
    const { key } = this.state;
    setGlobalData(key, this.state);

    clearTimeout(timer);
  }

  getPlaceholder(status) {
    const { onStoryAndPanelChange } = this.props;

    let placeholder;

    switch (status) {
    case 1:
      placeholder = (
        <Placeholder
          icon={<Icon56ErrorOutline fill="var(--destructive)" />}
          header="Мы не смогли найти этот отзыв :c"
          action={
            <Button
              size="l"
              onClick={() => onStoryAndPanelChange('review', 'review')}
            >
              К отзывам!
            </Button>
          }
          stretched
        >
          Похоже, отзыв был удалён или ещё не создан, но у нас есть другие
        </Placeholder>
      );
      break;

    case 2:
      placeholder = (
        <Placeholder
          icon={<Icon56ErrorOutline fill="var(--destructive)" />}
          header="Мы не смогли найти этот отзыв :c"
          action={
            <Button
              size="l"
              onClick={() => onStoryAndPanelChange('review', 'review')}
            >
              К отзывам!
            </Button>
          }
          stretched
        >
          Похоже, отзыв пока что находится на модерации, но у нас есть другие
        </Placeholder>
      );
      break;

    case 3:
      placeholder = (
        <Placeholder
          icon={<Icon56ErrorOutline fill="var(--destructive)" />}
          header="Ой, какая бяка"
          action={
            <Button
              size="l"
              onClick={() => onStoryAndPanelChange('review', 'review')}
            >
              К отзывам!
            </Button>
          }
          stretched
        >
          Похоже, отзыв был отклонён нашими модераторами
           за нарушение правил или неправильное оформление,
           но у нас есть другие
        </Placeholder>
      );
      break;

    default:
      break;
    }

    return placeholder;
  }

  getStringList(array) {
    let textList = '';

    JSON.parse(array).forEach((text, index) => {
      if (index !== (JSON.parse(array).length - 1)) {
        textList += `— ${text} \n`;
      } else {
        textList += `— ${text}`;
      }
    });

    return textList;
  }

  toggleContext() {
    const { contextOpened } = this.state;

    this.setState({
      contextOpened: !contextOpened
    });
  }

  reportReview() {
    const { panelData, changeActiveModal } = this.props;

    this.toggleContext();
    changeActiveModal('report-modal', { type: 'review', id: panelData.id });
  }

  changeSnackbar(snackText, error) {
    const { snackbar } = this.state;

    if (snackbar) return;
    timer = setTimeout(() => {
      this.setState({ snackbar: null });
    }, 1000);

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

  shareWall(review) {
    const {
      id,
      name,
      advantages,
      disadvantages,
      description,
      stars_count
    } = review;

    const advantagesText = this.getStringList(advantages);
    const disadvantagesText = this.getStringList(disadvantages);
    const wallText = `${name} (${stars_count}/5)\n\n${description}\n\nДостоинства:\n${advantagesText}\n\nНедостатки:\n${disadvantagesText}\n\nБольше отзывов смотрите в приложении Отзывы!`;

    if (queryGet('platform') === 'vk') {
      bridge.sendPromise(
        'VKWebAppShowWallPostBox',
        {
          'message': wallText,
          'attachments': `https://vk.com/app7526083#review_id=${id}`
        }
      );
    }
  }

  shareLink(review) {
    const { id } = review;

    if (queryGet('platform') === 'vk') {
      bridge.sendPromise(
        'VKWebAppShare',
        {
          'link': encodeURI(`https://vk.com/app7526083#review_id=${id}`)
        }
      );
    }
  }

  loadSingleReview() {
    const { panelData } = this.props;

    axios.get(`https://reviews.skyreglis.studio/review/single/?id=${panelData.id}`)
      .then((res) => {
        const response = res.data;
        console.log(response);

        if (!isset(response.error)) {
          const { review, author, authorInfo } = response;
          const {
            last_activity,
            reviews_count,
            comments_count,
            subscribers_count
          } = author;
          const {
            type,
            user_id,
            first_name,
            last_name,
            photo,
            sex,
            city
          } = authorInfo;

          this.setState({
            review: review,
            author: {
              type: type,
              user_id: user_id,
              first_name: first_name,
              last_name: last_name,
              photo: photo,
              sex: sex,
              city: city,
              last_activity: last_activity,
              reviews_count: reviews_count,
              comments_count: comments_count,
              subscribers_count: subscribers_count
            }
          });
        } else {
          const { error } = response;

          if (error === 'Nothing was found') {
            // Status - 1, Отзыв не найден
            this.setState({
              status: 1
            });
          } else if (error === 'Error by moderation status') {
            const { status } = response;

            if (status === 0) {
              // Status - 2, Отзыв на рассмотрении
              this.setState({
                status: 2
              });
            }

            if (status === 2) {
              // Status - 3, Отзыв на отклонён
              this.setState({
                status: 3
              });
            }
          }
        }
      }).catch((err) => console.log(err));
  }

  render() {
    const {
      id,
      changePopout,
      user,
      changeActiveModal,
      panelData,
      onPanelChange,
      onStoryAndPanelChange
    } = this.props;
    const {
      status,
      review,
      author,
      snackbar,
      contextOpened
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
          {status === null ? (
            <PanelHeaderContent
              aside={<Icon16Dropdown style={{ transform: `rotate(${contextOpened ? '180deg' : '0'})` }} />}
              onClick={this.toggleContext}
            >
              Отзыв
            </PanelHeaderContent>
          ) : (
            <PanelHeaderContent>
              Отзыв
            </PanelHeaderContent>
          )}
        </PanelHeader>
        {status === null && (
          <PanelHeaderContext opened={contextOpened} onClose={this.toggleContext}>
            <List>
              <Cell
                before={<Icon28ShareOutline />}
                onClick={() => this.shareWall(review)}
                multiline
              >
                Поделиться на стене
              </Cell>
              <Cell
                before={<Icon28LinkOutline />}
                onClick={() => this.shareLink(review)}
                multiline
              >
                Поделиться ссылкой
              </Cell>
              {author && user && user.info.user_id !== author.user_id && (
                <Cell
                  before={<Icon28ReportOutline />}
                  onClick={() => this.reportReview()}
                  multiline
                >
                  Пожаловаться
                </Cell>
              )}
            </List>
          </PanelHeaderContext>
        )}
        {status === null ? (
          <SingleReview
            id={panelData && panelData.id}
            review={review}
            author={author}
            changePopout={changePopout}
            user={user}
            changeActiveModal={changeActiveModal}
            onPanelChange={onPanelChange}
            onStoryAndPanelChange={onStoryAndPanelChange}
            changeSnackbar={this.changeSnackbar}
          />
        ) : this.getPlaceholder(status)}
        {snackbar}
      </Panel>
    );
  }
}
