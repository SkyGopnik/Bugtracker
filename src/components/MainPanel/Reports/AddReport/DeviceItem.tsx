import React from 'react';
import {
  Select,
  FormItem, Div, Cell, Checkbox
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
        top="Устройства"
        status={isset(item.error) ? (item.error ? 'error' : 'valid') : 'default'}
        bottom={item.error ? item.error : ''}
      >
        <Div>
          <Cell
            name="test"
            description="Android 10.0 Q"
            selectable
            // onChange={(e) => console.log(e.target)}
          >
            Samsung Galaxy Note 9
          </Cell>
          <Cell
            description="Windows 10"
            selectable
          >
            Lenovo
          </Cell>
          <Cell
            description="IOS 14"
            selectable
          >
            Apple IPhone 6s
          </Cell>
        </Div>
      </FormItem>
    );
  }
}
