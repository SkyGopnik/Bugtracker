import React, {ReactText} from 'react';
import {
  FormItem
} from "@vkontakte/vkui";

import { FormItemArray } from './AddReport';

import isset from 'src/functions/isset';
import ChipsSelect from "@vkontakte/vkui/dist/es6/components/ChipsSelect/ChipsSelect";

interface IProps {
  item: FormItemArray,
  onValueChange(value: Array<ReactText>)
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
        status={isset(item.error) ? (item.error ? 'error' : 'valid') : 'default'}
        bottom={item.error ? item.error : ''}
      >
        <ChipsSelect
          value={item.value.map((value) => {
            return { value: value, label: value };
          })}
          options={['Android', 'iOS','Windows','MacOS','Linux','Windows Phone'].map((value) => {
            return { value: value, label: value }
          })}
          placeholder="Укажите платформы, на которых воспроизводится баг"
          onChange={(value) =>  onValueChange(value.map((item) => {
            return item.value;
          }))}
        />
      </FormItem>
    );
  }
}
