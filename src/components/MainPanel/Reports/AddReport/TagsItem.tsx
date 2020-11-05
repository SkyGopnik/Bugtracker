import React from 'react';
import {
  Select,
  FormItem
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
      <FormItem top="Теги, к которым имеет отношение баг">
      <Select
          value="item.value"
          onChange={(result) => onValueChange(String(result.value))}
          placeholder="Выберите теги"
      >
          {['Дизайн', 'Лента','Стена','Профиль','Фотографии','Видеозаписи'].map((text, index) => (
            <option key={index} value={text}>{text}</option>
          ))}
      </Select>
      </FormItem>
    );
  }
}
