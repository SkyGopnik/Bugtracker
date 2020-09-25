import React from 'react';
import { connect } from 'react-redux';

import { setCountNumber } from '../../store/test/actions';
import Test from './Test';

const TestContainer = (props) => <Test {...props} />;

const mapStateToProps = (state) => {
  const props = {
    count: state.test.count
  };

  return props;
};

const mapDispatchToProps = {
  setCountNumber
};

export default connect(mapStateToProps, mapDispatchToProps)(TestContainer);
