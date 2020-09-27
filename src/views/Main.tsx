import React from 'react';

/*
  Панели
*/
import MainPanel from '../panels/Main/Main';
import ReportsPanel from "../panels/Reports";

// Компоненты
import ViewLight from '../components/ViewLight';
import ProductsPanel from 'src/panels/Products';
import UsersPanel from 'src/panels/Users';
import NotificationsPanel from "src/panels/Notifications";
import UserPanel from "src/panels/User";

interface IProps {
  id: string,
  activePanel: string
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
    const { id, activePanel } = this.props;
    const { activeContent } = this.state;

    return (
      <ViewLight
        id={id}
        activePanel={activePanel}
        panelList={[
          {
            id: 'main',
            component: MainPanel,
            props: {
              activeContent,
              changeActiveContent: this.changeActiveContent
            }
          },
          {
            id: 'reports',
            component: ReportsPanel
          },
          {
            id: 'products',
            component: ProductsPanel
          },
          {
            id: 'users',
            component: UsersPanel
          },
          {
            id: 'notifications',
            component: NotificationsPanel
          },
          {
            id: 'user',
            component: UserPanel
          }
        ]}
      />
    );
  }
}
