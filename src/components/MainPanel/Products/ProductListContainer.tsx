import React from 'react';
import { connect } from 'react-redux';

import {
  getProductList
} from 'src/store/productList/actions';
import {
  changeView,
  changePanel,
  changeViewAndPanel
} from 'src/store/app/actions';
import ProductsList from './ProductsList';

const ProductsListContainer = (props) => <ProductsList {...props} />;

const mapStateToProps = (state) => {
  const props = {
    list: state.productList.list
  };

  return props;
};

const mapDispatchToProps = {
  getProductList,
  changeView,
  changePanel,
  changeViewAndPanel
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsListContainer);
