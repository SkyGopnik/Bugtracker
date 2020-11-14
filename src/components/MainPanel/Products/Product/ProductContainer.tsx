import React from 'react';
import { connect } from 'react-redux';

import {
  getProductList,
  getProduct
} from 'src/store/productList/actions';
import {
  changeView,
  changePanel,
  changeViewAndPanel
} from 'src/store/app/actions';
import Product from './Product';

const ProductContainer = (props) => <Product {...props} />;

const mapStateToProps = (state) => {
  const props = {
    list: state.productList.list,
    single: state.productList.single,
    panelData: state.app.panelData
  };

  return props;
};

const mapDispatchToProps = {
  getProductList,
  getProduct,
  changeView,
  changePanel,
  changeViewAndPanel
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductContainer);
