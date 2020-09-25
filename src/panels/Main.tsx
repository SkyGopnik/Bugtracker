import React from 'react';
import {
  Panel,
  PanelHeader
} from '@vkontakte/vkui';

import TestContainer from '../components/Test/TestContainer';

interface IProps {
  id: string
}

export default class extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { id } = this.props;

    return (
      <Panel id={id}>
        <PanelHeader>
          Главная
        </PanelHeader>
        <TestContainer />
        <button
          type="button"
          data-to="test"
          onClick={() => console.log('test')}
        >
          Next panel
        </button>
      </Panel>
    );
  }
}
