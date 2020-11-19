import React from 'react';
import { connect } from 'react-redux';

import {
  changeView,
  changePanel,
  changeViewAndPanel,
  changeModal
} from 'src/store/app/actions';
import {
  getReport
} from 'src/store/reportList/actions';

import ChangeStatus from './ChangeStatus';

const ChangeStatusContainer = (props) => <ChangeStatus {...props} />;

const mapStateToProps = (state) => {
  const props = {
    view: state.app.view,
    panel: state.app.panel,
    panelData: state.app.panelData,
    modalData: state.app.modalData
  };

  return props;
};

const mapDispatchToProps = {
  changeView,
  changePanel,
  changeViewAndPanel,
  changeModal,
  getReport
};

export default connect(mapStateToProps, mapDispatchToProps)(ChangeStatusContainer);
