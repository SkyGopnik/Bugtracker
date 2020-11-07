import React from 'react';
import {
  Select,
  FormItem
} from "@vkontakte/vkui";

import { FormItemText } from './AddReport';

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
      top="Приоритет проблемы"
      status={isset(item.error) ? (item.error ? 'error' : 'valid') : 'default'}
      bottom={item.error ? item.error : ''}
    >
      <Select
        value={item.value}
        onChange={(result) => onValueChange(String(result.value))}
        placeholder="Выберите приоритет"
      >
        {['Низкий', 'Средний','Высокий','Критический','Уязвимость'].map((text, index) => (
          <option key={index} value={text}>{text}</option>
        ))}
      </Select>
    </FormItem>
    );
  }
}
