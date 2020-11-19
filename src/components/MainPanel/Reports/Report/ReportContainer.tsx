import React from 'react';
import { connect } from 'react-redux';

import {
  getReport,
  changeReportStatus
} from 'src/store/reportList/actions';
import Report from './Report';

const ReportContainer = (props) => <Report {...props} />;

const mapStateToProps = (state) => {
  const props = {
    single: state.reportList.single,
    panelData: state.app.panelData
  };

  return props;
};

const mapDispatchToProps = {
  getReport,
  changeReportStatus
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportContainer);
