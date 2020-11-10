import React from 'react';
import {
  Select,
  FormItem,
  Div,
  Cell,
  Checkbox,
  Input
} from "@vkontakte/vkui";

import { FormItemText } from './AddProduct';

import isset from 'src/functions/isset';

interface IProps {
  item: FormItemText,
  onValueChange(value: string)
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, onValueChange } = this.props;

    return (
      <FormItem
      top="Название"
      status={isset(item.error) ? (item.error ? 'error' : 'valid') : 'default'}
      bottom={item.error ? item.error : ''}
    >
      <Input
        value={item.value}
        onChange={(e) => onValueChange(String(e.currentTarget.value))}
        type="text"
        placeholder="Название продукта"
      />
    </FormItem>
    );
  }
}
