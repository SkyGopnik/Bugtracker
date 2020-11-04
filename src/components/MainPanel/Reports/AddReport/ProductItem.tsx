import React from 'react';
import {
  FormLayout,
  FormLayoutGroup,
  Select,
  Input,
  List,
  Cell,
  Textarea,
  Button,
  Checkbox,
  Chip,
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

    this.state = {
      form: {
        product: {
          value: '',
          rules: {
            required: true
          }
        }
      }
    }
  }

  render() {
    const { item, onValueChange } = this.props;

    return (
      <FormItem
        top="Выберите продукт"
        status={isset(item.error) ? (item.error ? 'error' : 'valid') : 'default'}
        bottom={item.error ? item.error : ''}
      >
        <Select
          name="product"
          value={item.value}
          onChange={(result) => onValueChange(String(result.value))}
          placeholder="Выберите продукт"
        >
          {['Одноклассники для Android', 'Одноклассники для IOS','Одноклассники для Web','CooK','Мечты','Отзывы'].map((text, index) => (
          <option key={index} value={text}>{text}</option>
          ))}
        </Select>
      </FormItem>
    );
  }
}
