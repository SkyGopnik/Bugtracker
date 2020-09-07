import React from 'react';
import axios from 'axios';
import {
  Panel,
  PanelHeader,
  PanelHeaderButton,
  List,
  SimpleCell,
  Avatar,
  platform,
  IOS,
  Group,
  Spinner
} from '@vkontakte/vkui';

import Icon24Back from '@vkontakte/icons/dist/24/back';

import Icon28ChevronBack from '@vkontakte/icons/dist/28/chevron_back';

import isset from '../functions/isset.jsx';

const osname = platform();

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      data: null
    };
  }

  componentDidMount() {
    axios.get('https://reviews.skyreglis.studio/user/testers/')
      .then(async (res) => {
        const response = res.data;

        if (!isset(response.error)) {
          this.setState({
            data: response
          });
        }
      });
  }

  render() {
    const { id } = this.props;
    const { data } = this.state;

    return (
      <Panel id={id}>
        <PanelHeader
          left={
            <PanelHeaderButton onClick={() => window.history.back()}>
              {osname === IOS ? <Icon28ChevronBack /> : <Icon24Back />}
            </PanelHeaderButton>
          }
        >
          Тестеры
        </PanelHeader>

        <Group>
          {data !== null ? (
            <List>
              {data.map((item, index) => (
                <SimpleCell
                  key={`tester-cell-${index}`}
                  target="_blank"
                  href={`https://vk.com/id${item.id}`}
                  before={<Avatar size={40} src={item.photo_100} />}
                >
                  {item.first_name} {item.last_name}
                </SimpleCell>
              ))}
            </List>
          ) : <Spinner />}
        </Group>
      </Panel>
    );
  }
}
