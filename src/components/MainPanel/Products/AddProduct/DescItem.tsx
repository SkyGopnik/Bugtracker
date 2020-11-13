import React from 'react';
import {
  Select,
  FormItem,
  Div,
  Cell,
  Checkbox,
  Input,
  Textarea
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
        top="Описание"
        status={isset(item.error) ? (item.error ? 'error' : 'valid') : 'default'}
        bottom={item.error ? item.error : ''}
      >
        <Textarea
          value={item.value}
          onChange={(e) => onValueChange(String(e.currentTarget.value))}
          placeholder="Описание продукта"
        />
      </FormItem>
    );
  }
}
