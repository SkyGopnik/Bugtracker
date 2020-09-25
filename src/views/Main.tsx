import React from 'react';

/*
  Панели
*/
import MainPanel from '../panels/Main';
import TestPanel from '../panels/Test';

// Компоненты
import ViewLight from '../components/ViewLight';

interface IProps {
  id: string,
  active: {
    story: string,
    panel: string
  }
}

export default class extends React.Component<IProps> {
  constructor(props: IProps) {
    super(props);
  }

  render() {
    const { id, active } = this.props

    return (
      <ViewLight
        id={id}
        activePanel={active.panel}
        panelList={[
          {
            id: 'main',
            component: MainPanel
          },
          {
            id: 'test',
            component: TestPanel
          }
        ]}
      />
    );
  }
}
