import React from 'react';
import { connect } from 'react-redux';

import {
  changeView,
  changePanel,
  changeViewAndPanel,
  changeModal
} from 'src/store/app/actions';
import {
  getProductVersions
} from 'src/store/productList/actions';
import AddVersion from './AddVersion';

const AddVersionContainer = (props) => <AddVersion {...props} />;

const mapStateToProps = (state) => {
  const props = {
    view: state.app.view,
    panel: state.app.panel,
    modalData: state.app.modalData
  };

  return props;
};

const mapDispatchToProps = {
  changeView,
  changePanel,
  changeViewAndPanel,
  changeModal,
  getProductVersions
};

export default connect(mapStateToProps, mapDispatchToProps)(AddVersionContainer);
