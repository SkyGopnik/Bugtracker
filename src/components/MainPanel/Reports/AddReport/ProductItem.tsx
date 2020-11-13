import React from 'react';
import {
  Select,
  FormItem
} from "@vkontakte/vkui";

import { FormItemText } from './AddReport';

import isset from 'src/functions/isset';
import axios from "axios";

interface IProps {
  item: FormItemText,
  onValueChange(value: string)
}

interface IState {
  list: Array<{
    id?: string,
    title: string,
    image: string,
    type?: {
      text: string
    },
    createdAt?: Date
  }>
}

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      list: []
    };
  }

  async componentDidMount() {
    const { data } = await  axios.get('/product/list?page=1&limit=20');

    this.setState({
      list: data
    });
  }

  render() {
    const { item, onValueChange } = this.props;
    const { list } = this.state;

    return (
      <FormItem
        top="Выберите продукт"
        status={isset(item.error) ? (item.error ? 'error' : 'valid') : 'default'}
        bottom={item.error ? item.error : ''}
      >
        <Select
          value={item.value}
          onChange={(result) => onValueChange(String(result.value))}
          placeholder="Выберите продукт"
        >
          {list.map((item, index) => (
            <option key={index} value={item.id}>{item.title}</option>
          ))}
        </Select>
      </FormItem>
    );
  }
}
