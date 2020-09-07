import React from 'react';
import axios from 'axios';
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  Placeholder,
  Button,
  platform,
  IOS
} from '@vkontakte/vkui';

import Icon24Back from '@vkontakte/icons/dist/24/back';

import Icon28GhostOutline from '@vkontakte/icons/dist/28/ghost_outline';
import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

import ReviewList from '../components/ReviewList/ReviewList.jsx';

import isset from '../functions/isset.jsx';

const osname = platform();

let timer;

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      reviews: {
        items: null,
        itemsLastId: null,
        itemsShowMore: true
      },
      isOwn: false
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
      if (!panelData && !panelData.id) {
        this.state.isOwn = true;
      } else {
        this.getReviewList(false);
      }
    }

    this.getReviewList = this.getReviewList.bind(this);
  }

  componentWillUnmount() {
    const { setGlobalData } = this.props;
    const { key } = this.state;
    setGlobalData(key, this.state);

    clearTimeout(timer);
  }

  getReviewList(callbackNeed, loaded, isUpdate) {
    const { panelData } = this.props;
    const { reviews } = this.state;

    // console.log(`getReviewList isUpdate=${isUpdate}`);
    if (reviews.itemsShowMore || isUpdate) {
      axios.get(`https://reviews.skyreglis.studio/review/own/?user_id=${panelData.user_id}${reviews.itemsLastId !== null && !isUpdate ? `&last_id=${reviews.itemsLastId}` : ''}`)
        .then(async (res) => {
          const response = res.data;

          if (!isset(response.error)) {
            const { array, lastArrayId, showMore } = response;

            // Соединяем два массива, новый и старый
            let oldArray = [];
            let newArray = [];

            // Если массив есть, то указываем его, если нет, оставляем пустым
            if (reviews.items !== null && !isUpdate) {
              oldArray = reviews.items;
            }

            newArray = oldArray.concat(array);

            // Добавляем небольшую загрузку
            timer = setTimeout(() => {
              if (callbackNeed) {
                loaded();
              }
            }, 100);

            const newReviewList = {
              items: newArray,
              itemsLastId: lastArrayId,
              itemsShowMore: showMore
            };

            console.log(newReviewList);

            this.setState({
              reviews: newReviewList
            });
          } else if (response.error === 'Array is empty') {
            if (callbackNeed) {
              loaded();
            }

            this.setState({
              reviews: {
                items: [],
                itemsLastId: null,
                itemsShowMore: true
              }
            });
          }
        });
    } else {
      if (callbackNeed) {
        loaded();
      }
    }
  }

  render() {
    const {
      id,
      reviewList,
      getReviewList,
      onPanelChange,
      onStoryAndPanelChange,
      changePopout
    } = this.props;
    const { isOwn, reviews } = this.state;

    return (
      <Panel id={id}>
        <PanelHeader
          left={
            <PanelHeaderButton onClick={() => window.history.back()}>
              {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderButton>
          }
        >
          {isOwn ? 'Мои отзывы' : 'Отзывы пользователя'}
        </PanelHeader>

        {/* Список отзывов */}
        <ReviewList
          isControl={isOwn}
          list={isOwn ? reviewList.items : reviews.items}
          listLoad={isOwn ? getReviewList : this.getReviewList}
          showMore={isOwn ? reviewList.itemsShowMore : reviews.itemsShowMore}
          changePopout={changePopout}
          onPanelChange={onPanelChange}
        >
          <Placeholder
            icon={<Icon28GhostOutline width={56} height={56} />}
            header="Упс, похоже, тут пустовато"
            action={
              <Button
                size="l"
                onClick={() => onStoryAndPanelChange('add', 'add')}
              >
                Написать отзыв
              </Button>
            }
            stretched
          >
            В этой вкладке будут показываться все Ваши отзывы, приходите, как напишете
          </Placeholder>
        </ReviewList>
      </Panel>
    );
  }
}
