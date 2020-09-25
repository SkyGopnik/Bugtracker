import React from 'react';

/*
  Панели
*/
import MainPanel from '../panels/Main/Main';
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

interface IState {
  activeMenu: string
}


export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      activeMenu: 'reports'
    }

    this.changeActiveMenu = this.changeActiveMenu.bind(this);
  }

  changeActiveMenu(name: string) {
    this.setState({
      activeMenu: name
    })
  }

  render() {
    const { id, active } = this.props;
    const { activeMenu } = this.state;

    return (
      <ViewLight
        id={id}
        activePanel={active.panel}
        panelList={[
          {
            id: 'main',
            component: MainPanel,
            props: {
              activeMenu,
              changeActiveMenu: this.changeActiveMenu
            }
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
