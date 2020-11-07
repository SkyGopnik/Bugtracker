import React from 'react';
import {
  Button, Div
} from "@vkontakte/vkui";

import { FormItemArray } from './AddReport';
import {Icon28Camera, Icon28Document} from "@vkontakte/icons";

interface IProps {
  item: FormItemArray,
  onValueChange(value: string)
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const { item, onValueChange } = this.props;

    return (
      <Div style={{display: 'flex'}}>
        <Button
          before={<Icon28Camera />}
          size="l"
          stretched
          mode="secondary"
          style={{ marginRight: 8 }}
        >
          Скриншот
        </Button>
        <Button
          before={<Icon28Document />}
          size="l"
          stretched
          mode="secondary"
        >
          Документ
        </Button>
      </Div>
    );
  }
}
