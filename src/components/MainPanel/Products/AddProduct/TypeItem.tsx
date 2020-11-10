import React from 'react';
import {
  Select,
  FormItem,
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
      <FormItem/>
    );
  }
}
