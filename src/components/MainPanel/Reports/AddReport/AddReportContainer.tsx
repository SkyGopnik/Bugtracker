import React from 'react';
import { connect } from 'react-redux';

import {
  changeView,
  changePanel,
  changeViewAndPanel
} from 'src/store/app/actions';
import AddReport from './AddReport';

const AddReportContainer = (props) => <AddReport {...props} />;

const mapStateToProps = (state) => {
  const props = {
    view: state.app.view,
    panel: state.app.panel,
    panelData: state.app.panelData,
    userProducts: state.app.userProducts
  };

  return props;
};

const mapDispatchToProps = {
  changeView,
  changePanel,
  changeViewAndPanel
};

export default connect(mapStateToProps, mapDispatchToProps)(AddReportContainer);
