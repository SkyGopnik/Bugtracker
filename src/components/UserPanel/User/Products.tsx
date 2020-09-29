import React from 'react';
import {
  Header,
  Group
} from "@vkontakte/vkui";

import ProductItem, { IProps as ProductItemProps } from '../../MainPanel/Products/ProductItem/ProductItem';

export interface IProps {
  className?: string,
  list: Array<ProductItemProps>
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      className,
      list
    } = this.props;

    return (
      <Group className={className ? className : ''} header={<Header indicator="test">Продукты</Header>}>
        {list.map((product, index) => (
          'test'
        ))}
      </Group>
    );
  }
}
