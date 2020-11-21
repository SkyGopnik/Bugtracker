import React from 'react';
import {
  Div,
  FormItem,
  FormLayout,
  Group,
  WriteBar,
  WriteBarIcon
} from "@vkontakte/vkui";

import isset from 'src/functions/isset';

interface IProps{}

interface IState{
  text: {
    value: string,
    error?: string
    rules: {
      minLength: number,
      maxLength: number
    }
  }
}

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      text: {
        value: '',
        rules: {
          minLength: 5,
          maxLength: 1000
        }
      }
    }
  }

  handleFormChange = (name: string, value: string) => {
    const newItem = { ...this.state[name] };

    newItem.value = value;
    newItem.error = '';

    if(newItem.rules) {
      if(newItem.rules.minLength && (value.length < newItem.rules.minLength)) {
        newItem.error = `Минимальная длина ${newItem.rules.minLength} символов`;
      }

      if(newItem.rules.maxLength && (value.length > newItem.rules.maxLength)) {
        newItem.error = `Максимальная длина ${newItem.rules.maxLength} символов`;
      }

      if (newItem.rules.required && (value.length === 0)) {
        newItem.error = 'Это обязательное поле для заполения';
      }
    }

    this.setState({
      ...this.state,
      [name]: newItem
    });
  }

  componentDidMount() {
  }

  render() {
    const { text } = this.state;
    return (

      <Group>
      <FormLayout>
      <FormItem
        status={isset(text.error) ? (text.error ? 'error' : 'valid') : 'default'}
        bottom={text.error ? text.error : ''}
      >
      <WriteBar
        value={text.value}
        onChange={() => this.handleFormChange('text', text.value)}
        after={
          <WriteBarIcon
          mode="send"
        />
        }
        placeholder="Сообщение"
      />
      </FormItem>
      </FormLayout>
    </Group>

    );
  }
}
