import React from 'react';
import { connect } from 'react-redux';

import {
  changePanel
} from 'src/store/app/actions';
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
  getReportList,
  changePanel
};

export default connect(mapStateToProps, mapDispatchToProps)(ReportListContainer);
