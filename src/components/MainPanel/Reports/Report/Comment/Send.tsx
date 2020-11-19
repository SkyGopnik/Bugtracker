import React from 'react';
import {
  Div,
  Group,
  WriteBar,
  WriteBarIcon
} from "@vkontakte/vkui";

interface IProps{}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (

      <Group>
        <Div>
      <WriteBar
        value='text'
        after={
          <WriteBarIcon
          mode="send"
        />
        }
        placeholder="Сообщение"
      />
      </Div>
    </Group>

    );
  }
}
