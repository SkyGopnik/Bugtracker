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
      <FormItem 
        top="Выберите платформы"
      >
        <Select
          placeholder="Выберите платформы"
          name="platform"
          value={item.value}
          onChange={(result) => onValueChange(String(result.value))}
        >
        {['Android', 'iOS','Windows','MacOS','Linux','Windows Phone'].map((text, index) => (
          <option key={index} value={text}>{text}</option>
        ))}
        </Select>
      </FormItem>
    );
  }
}
