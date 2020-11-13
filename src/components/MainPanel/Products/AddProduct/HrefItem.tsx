import React from 'react';
import {
  FormItem,
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
        top="Ссылка"
        status={isset(item.error) ? (item.error ? 'error' : 'valid') : 'default'}
        bottom={item.error ? item.error : ''}
      >
        <Input
          value={item.value}
          onChange={(e) => onValueChange(String(e.currentTarget.value))}
          type="text"
          placeholder="Ссылка на тестируемый продукт"
        />
      </FormItem>
    );
  }
}
