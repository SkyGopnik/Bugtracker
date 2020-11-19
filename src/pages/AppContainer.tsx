import React from 'react';
import { connect } from 'react-redux';

import {
  changeView,
  changePanel,
  changeViewAndPanel,
  changeModal,
  updateHistory
} from '../store/app/actions';
import {
  getUserProductList
} from '../store/productList/actions';
import App from './App';

const AppContainer = (props) => <App {...props} />;

const mapStateToProps = (state) => {
  const props = {
    view: state.app.view,
    panel: state.app.panel,
    modal: state.app.modal
  };

  return props;
};

const mapDispatchToProps = {
  changeView,
  changePanel,
  changeViewAndPanel,
  changeModal,
  getUserProductList,
  updateHistory
};

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer);
