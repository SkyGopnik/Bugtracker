import React from 'react';
import { connect } from 'react-redux';

import {
  changeView,
  changePanel,
  changeViewAndPanel
} from 'src/store/app/actions';

import MenuList from './MenuList';

const MenuListContainer = (props) => <MenuList {...props} />;

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = {
  changeView,
  changePanel,
  changeViewAndPanel
};

export default connect(mapStateToProps, mapDispatchToProps)(MenuListContainer);
