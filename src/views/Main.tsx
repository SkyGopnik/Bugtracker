import React from 'react';
import {ModalRoot} from "@vkontakte/vkui";

// Панели
import MainPanel from '../panels/Main/MainContainer';
import ReportsPanel from "../panels/Reports";
import ReportPanel from "../panels/Report";

// Модалки
import AddVersion from "src/modals/AddVersion/AddVersionContainer";
import ChangeStatus from "src/modals/ChangeStatus/ChangeStatusContainer";

// Компоненты
import ViewLight from '../components/ViewLight';

import ProductsPanel from 'src/panels/Products';
import UsersPanel from 'src/panels/Users';
import NotificationsPanel from "src/panels/Notifications";
import UserPanel from "src/panels/User";

import {AppReducerIterface} from "src/store/app/reducers";

import queryGet from "src/functions/query_get";

interface IProps extends AppReducerIterface {
  id: string
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
    const {
      id,
      panel,
      modal,
      changeModal
    } = this.props;

    const modalRoot = (
      <ModalRoot
        activeModal={modal}
        onClose={() => changeModal(null)}
      >
        <AddVersion id="add-version" />
        <ChangeStatus id="change-status" />
      </ModalRoot>
    );

    return (
      <ViewLight
        id={id}
        activePanel={queryGet('type') !== 'desktop' ? panel : 'main'}
        modal={modalRoot}
        panelList={[
          {
            id: 'main',
            component: MainPanel
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
            id: 'report',
            component: ReportPanel
          }
        ]}
      />
    );
  }
}
