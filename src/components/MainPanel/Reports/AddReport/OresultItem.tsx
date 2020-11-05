import React from 'react';
import {
  Select,
  FormItem,
  Textarea
} from "@vkontakte/vkui";

import { FormItem as FormItemInterface } from './AddReport';

import isset from 'src/functions/isset';

interface IProps {
  item: FormItemInterface,
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
      top="Ожидаемый результат"
      status={isset(item.error) ? (item.error ? 'error' : 'valid') : 'default'}
      bottom={item.error ? item.error : ''}
    >
    <Textarea
        name="item"
        value={item.value}
        onChange={(e) => onValueChange(String(e.currentTarget.value))}
        placeholder="Когда я совершаю действие А, должно происходить В"
    />
    </FormItem>
    );
  }
}
