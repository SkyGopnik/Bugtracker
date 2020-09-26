import React from 'react';
import {Separator} from "@vkontakte/vkui";

import PanelItem from './PanelItem';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <PanelItem 
          name={"Отчёты"}
        />
        <Separator />
      </div>
    );
  }
}