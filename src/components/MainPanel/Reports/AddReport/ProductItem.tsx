import React from 'react';
import {
  Select,
  FormItem
} from "@vkontakte/vkui";

import { FormItemText } from './AddReport';

import {ProductReducerIterface} from "src/store/productList/reducers";

import isset from 'src/functions/isset';

interface IProps extends ProductReducerIterface {
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

  render() {
    const { item, userProducts, onValueChange } = this.props;

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
          {userProducts.map((item, index) => (
            <option key={index} value={item.id}>{item.title}</option>
          ))}
        </Select>
      </FormItem>
    );
  }
}
