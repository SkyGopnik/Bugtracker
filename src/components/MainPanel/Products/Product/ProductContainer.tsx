import React from 'react';
import { connect } from 'react-redux';

import {
  getProductList,
  getProduct,
  getProductVersions
} from 'src/store/productList/actions';
import {
  changeView,
  changePanel,
  changeViewAndPanel,
  changeModal
} from 'src/store/app/actions';
import Product from './Product';

const ProductContainer = (props) => <Product {...props} />;

const mapStateToProps = (state) => {
  const props = {
    list: state.productList.list,
    single: state.productList.single,
    versions: state.productList.versions,
    panelData: state.app.panelData
  };

  return props;
};

const mapDispatchToProps = {
  getProductList,
  getProduct,
  getProductVersions,
  changeView,
  changePanel,
  changeViewAndPanel,
  changeModal
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
