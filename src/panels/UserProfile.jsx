import React from 'react';
import axios from 'axios';
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  platform,
  IOS,
  Group,
  SimpleCell,
  Avatar,
  Title,
  Caption,
  Header,
  Link,
  Placeholder, ScreenSpinner
} from '@vkontakte/vkui';
import Skeleton from 'react-skeleton-loader';

import Icon24NarrativeOutline from '@vkontakte/icons/dist/24/narrative_outline';
import Icon24NarrativeActiveOutline from '@vkontakte/icons/dist/24/narrative_active_outline';
import Icon24Back from '@vkontakte/icons/dist/24/back';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';
import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';

import ReviewBlock from '../components/ReviewBlock/ReviewBlock.jsx';

import isset from '../functions/isset.jsx';
import timeNormalConverter from '../functions/time_normal_converter.jsx';
import declNum from '../functions/decl_num.jsx';

const osname = platform();

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      stats: {
        reviews_count: 0,
        comments_count: 0,
        subscribers_count: 0,
        achievements_count: 0
      },
      info: null,
      reviews: null,
      isSub: false
    };

    const { id, panelData, globalData } = props;

    this.state.key = JSON.stringify({
      type: id,
      panelData: {
        user_id: panelData.user_id
      }
    });

    const { key } = this.state;

    if (panelData.isBack) {
      this.state = globalData[key];
    } else {
      this.loadUser();
    }
  }

  componentWillUnmount() {
    const { setGlobalData } = this.props;
    const { key } = this.state;
    setGlobalData(key, this.state);
  }

  getHref(type, id) {
    let text;

    switch (type) {
    case 'vk':
      text = `https://vk.com/id${id}`;
      break;

    case 'ok':
      text = `https://ok.ru/profile/${id}`;
      break;

    default:
      break;
    }

    return text;
  }

  loadUser() {
    const { panelData } = this.props;

    axios.get(`https://reviews.skyreglis.studio/user/single/?user_id=${panelData.user_id}`)
      .then((res) => {
        const response = res.data;

        if (!isset(response.error)) {
          const {
            stats,
            info,
            reviews,
            isSub
          } = response;
          console.log(response);
          this.setState({
            stats: stats,
            info: info,
            reviews: reviews,
            isSub: isSub
          });
        }
      }).catch((err) => console.log(err));
  }

  subscribe(type, id) {
    const { changePopout } = this.props;
    const { isSub } = this.state;

    changePopout(<ScreenSpinner />);

    axios.post(`https://reviews.skyreglis.studio/subscribers/${type}`, {
      user_id: id
    })
      .then((res) => {
        const response = res.data;

        changePopout(null);

        if (!isset(response.error)) {
          this.loadUser();

          this.setState({
            isSub: !isSub
          });
        }
      }).catch((err) => console.log(err));
  }

  render() {
    const {
      panelData,
      id,
      changePopout,
      onPanelChange
    } = this.props;
    const {
      stats,
      info,
      reviews,
      isSub
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
          Профиль
        </PanelHeader>
        <Group separator="hide">
          {info && stats ? (
            <SimpleCell
              before={
                <Avatar
                  size={48}
                  src={info.photo}
                  onClick={() => window.open(this.getHref(info.type, info.user_id), '_blank')}
                />
              }
              description={`Дата регистрации ${timeNormalConverter(stats.first_join)}`}
              after={
                !isSub ? (
                  <Icon24NarrativeOutline onClick={() => this.subscribe('sub', info.user_id)} width={28} height={28} />
                ) : (
                  <Icon24NarrativeActiveOutline onClick={() => this.subscribe('unsub', info.user_id)} width={28} height={28} />
                )
              }
              multiline
            >
              <span onClick={() => window.open(this.getHref(info.type, info.user_id), '_blank')}>
                {info.first_name} {info.last_name}
              </span>
            </SimpleCell>
          ) : (
            <SimpleCell
              className="profile-user"
              before={
                <div className="avatar-skeleton">
                  <Skeleton borderRadius="50%" />
                </div>
              }
              description={<Skeleton width="60%" />}
            >
              <Skeleton width="60%" />
            </SimpleCell>
          )}
        </Group>
        <Group>
          <div className="profile-stats">
            <div className="stat">
              <Title level="2" weight="bold">
                {stats.reviews_count < 100 ? stats.reviews_count : '99+'}
              </Title>
              <Caption level="3" weight="regular">
                {stats.reviews_count < 100 ? (
                  declNum(stats.reviews_count, ['отзыв', 'отзыва', 'отзывов'])
                ) : 'отзывов'}
              </Caption>
            </div>
            <div className="stat">
              <Title level="2" weight="bold">
                {stats.comments_count < 100 ? stats.comments_count : '99+'}
              </Title>
              <Caption level="3" weight="regular">
                {stats.comments_count < 100 ? (
                  declNum(stats.comments_count, ['комментарий', 'комментария', 'комментариев'])
                ) : 'комментариев'}
              </Caption>
            </div>
            <div className="stat">
              <Title level="2" weight="bold">
                {stats.subscribers_count < 100 ? stats.subscribers_count : '99+'}
              </Title>
              <Caption level="3" weight="regular">
                {stats.subscribers_count < 100 ? (
                  declNum(stats.subscribers_count, ['подписчик', 'подписчика', 'подписчиков'])
                ) : 'подписчиков'}
              </Caption>
            </div>
            {/*<div className="stat">*/}
            {/*  <Title level="2" weight="bold">*/}
            {/*    {stats.achievements_count < 100 ? stats.achievements_count : '99+'}*/}
            {/*  </Title>*/}
            {/*  <Caption level="3" weight="regular">*/}
            {/*    {stats.achievements_count < 100 ? (*/}
            {/*      declNum(stats.achievements_count, ['достижение', 'достижения', 'достижений'])*/}
            {/*    ) : 'достижений'}*/}
            {/*  </Caption>*/}
            {/*</div>*/}
          </div>
        </Group>
        <Group
          header={
            <Header
              mode="secondary"
              aside={
                reviews !== null && reviews.length > 1 && (
                  <Link
                    data-to="userReviews"
                    data-params={JSON.stringify({
                      user_id: panelData.user_id
                    })}
                    onClick={onPanelChange}
                  >
                    Показать все
                  </Link>
                )
              }
            >
              Отзывы
            </Header>
          }
        >
          {reviews !== null ? (
            reviews.length !== 0 ? (
              reviews.map((item, index) => (
                <ReviewBlock
                  key={`review-block-${index}`}
                  editType="editProfile"
                  review={item}
                  changePopout={changePopout}
                  onPanelChange={onPanelChange}
                />
              ))
            ) : (
              <Placeholder
                icon={<Icon28GhostOutline width={56} height={56} />}
                header="Упс, похоже тут пустовато"
              >
                В этой вкладке будут показываться все отзывы автора
              </Placeholder>
            )
          ) : (
            <>
              <ReviewBlock load />
              <ReviewBlock load />
              <ReviewBlock load />
            </>
          )}
        </Group>
      </Panel>
    );
  }
}
