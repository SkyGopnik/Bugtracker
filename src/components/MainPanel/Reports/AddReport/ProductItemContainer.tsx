import React from 'react';
import { connect } from 'react-redux';

import {
  getUserProductList
} from 'src/store/productList/actions';
import ProductItem from './ProductItem';

const ProductItemContainer = (props) => <ProductItem {...props} />;

const mapStateToProps = (state) => {
  const props = {
    userProducts: state.productList.userProducts
  };

  return props;
};

const mapDispatchToProps = {
  getUserProductList
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductItemContainer);
