import React from 'react';
import { connect } from 'react-redux';

import {
  getReportList
} from 'src/store/reportList/actions';
import ReportList from './ReportsList';

const ReportListContainer = (props) => <ReportList {...props} />;

const mapStateToProps = (state) => {
  const props = {
    list: state.reportList.list
  };

  return props;
};

const mapDispatchToProps = {
  getReportList
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportListContainer);
