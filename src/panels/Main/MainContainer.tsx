import React from 'react';
import { connect } from 'react-redux';

import {
  changeView,
  changePanel,
  changeViewAndPanel,
  changeModal
} from 'src/store/app/actions';
import Main from './Main';

const MainContainer = (props) => <Main {...props} />;

const mapStateToProps = (state) => {
  const props = {
    view: state.app.view,
    panel: state.app.panel,
    singleProduct: state.productList.single,
    singleReport: state.reportList.single,
    userProducts: state.productList.userProducts
  };

  return props;
};

const mapDispatchToProps = {
  changeView,
  changePanel,
  changeViewAndPanel,
  changeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
