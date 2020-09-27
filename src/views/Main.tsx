import React from 'react';

/*
  Панели
*/
import MainPanel from '../panels/Main/Main';

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
  activeContent: string
}


export default class extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      activeContent: 'reports'
    }

    this.changeActiveContent = this.changeActiveContent.bind(this);
  }

  changeActiveContent(name: string) {
    this.setState({
      activeContent: name
    })
  }

  render() {
    const { id, active } = this.props;
    const { activeContent } = this.state;

    return (
      <ViewLight
        id={id}
        activePanel={active.panel}
        panelList={[
          {
            id: 'main',
            component: MainPanel,
            props: {
              activeContent,
              changeActiveContent: this.changeActiveContent
            }
          }
        ]}
      />
    );
  }
}
