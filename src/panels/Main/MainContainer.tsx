import React from 'react';
import { connect } from 'react-redux';

import {
  changeView,
  changePanel,
  changeViewAndPanel
} from 'src/store/app/actions';
import Main from './Main';

const MainContainer = (props) => <Main {...props} />;

const mapStateToProps = (state) => {
  const props = {
    view: state.app.view,
    panel: state.app.panel,
  };

  return props;
};

const mapDispatchToProps = {
  changeView,
  changePanel,
  changeViewAndPanel
};

export default connect(mapStateToProps, mapDispatchToProps)(MainContainer);
