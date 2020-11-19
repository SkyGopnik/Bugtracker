import React from 'react';
import {
  Select,
  FormItem
} from "@vkontakte/vkui";

import { FormItem as FormItemI } from './ChangeStatus';

import isset from 'src/functions/isset';

interface IProps {
  item: FormItemI,
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
        status={isset(item.error) ? (item.error ? 'error' : 'valid') : 'default'}
        bottom={item.error ? item.error : ''}
      >
        <Select
          value={item.value}
          onChange={(e) => onValueChange(String(e.currentTarget.value))}
          placeholder="Статус"
        >
          {[
            'Открыт',
            'На рассмотрении',
            'В работе',
            'Исправлен',
            'Переоткрыт',
            'Закрыт',
            'Отложен',
            'Заблокирован',
            'Отклонён',
            'Не воспроизводится',
            'Требует корректировки'
          ].map((text, index) => (
            <option key={index} value={text}>{text}</option>
          ))}
        </Select>
      </FormItem>
    );
  }
}
