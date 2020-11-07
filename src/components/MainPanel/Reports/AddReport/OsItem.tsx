import React, {ReactText} from 'react';
import {
  Select,
  FormItem
} from "@vkontakte/vkui";

import {FormItemArray} from './AddReport';

import isset from 'src/functions/isset';
import ChipsSelect from "@vkontakte/vkui/dist/es6/components/ChipsSelect/ChipsSelect";

interface IProps {
  type: 'Android' | 'iOS',
  item: FormItemArray,
  onValueChange(value: Array<ReactText>)
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      type,
      item,
      onValueChange
    } = this.props;

    return (
      <FormItem
        top={`Версии ${type}`}
        status={isset(item.error) ? (item.error ? 'error' : 'valid') : 'default'}
        bottom={item.error ? item.error : ''}
      >
        <ChipsSelect
          value={item.value.map((value) => {
            return { value: value, label: value };
          })}
          options={
            type === 'Android' ? (
              [
                '4.1 Jelly Bean',
                '4.2 Jelly Bean',
                '4.3 Jelly Bean',
                '4.4 KitKat',
                '5.0 Lollipop',
                '5.1 Lollipop',
                '6.0 Marshmallow',
                '7.0 Nougat',
                '7.1 Nougat',
                '8.0 Oreo',
                '8.1 Oreo',
                '9.0 P',
                '10.0 Q',
                '11.0 R'
              ].map((value) => {
                return { value: value, label: value }
              })
            ) : (
              [
                'IOS 8',
                'IOS 9',
                'IOS 10',
                'IOS 11',
                'IOS 12',
                'IOS 13',
                'IOS 14'
              ].map((value) => {
                return { value: value, label: value }
              })
            )
          }
          placeholder={`Укажите версии ${type}, на которых воспроизводится баг`}
          onChange={(value) =>  onValueChange(value.map((item) => {
            return item.value;
          }))}
        />
      </FormItem>
    );
  }
}
