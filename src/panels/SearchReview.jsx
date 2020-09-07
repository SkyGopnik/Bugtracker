import React from 'react';
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

export default class extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const {
      id,
      searchList,
      getSearchList,
      onPanelChange,
      onStoryAndPanelChange,
      changePopout
    } = this.props;

    return (
      <Panel id={id}>
        <PanelHeader
          left={
            <PanelHeaderButton onClick={() => window.history.back()}>
              {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderButton>
          }
        >
          Поиск
        </PanelHeader>

        {/* Список отзывов */}
        <ReviewList
          list={
            isset(searchList) ? (
              searchList.array !== null ? searchList.array.items : null
            ) : null
          }
          listLoad={getSearchList}
          showMore={
            isset(searchList) ? (
              searchList.array !== null ? searchList.array.itemsShowMore : null
            ) : null
          }
          changePopout={changePopout}
          onPanelChange={onPanelChange}
        >
          <Placeholder
            icon={<Icon28GhostOutline width={56} height={56} />}
            header="Упс, похоже тут пустовато"
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
            Мы не смогли ничего найти, но Вы можете оставить свой отзыв, чтобы помочь остальным
          </Placeholder>
        </ReviewList>
      </Panel>
    );
  }
}
