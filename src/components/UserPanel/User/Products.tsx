import React from 'react';
import {
  Header,
  Group
} from "@vkontakte/vkui";

import ProductItem, { IProps as ProductItemProps } from "../MainPanel/Products/ProductItem/ProductItem";

interface IProps {
  products: Array<ProductItemProps>
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      products
    } = this.props;

    return (
      <div>
        <Group header={<Header indicator="test">Продукты</Header>}>
          {products.map((product, index) => (
            'test'
          ))}
        </Group>
      </div>
    );
  }
}