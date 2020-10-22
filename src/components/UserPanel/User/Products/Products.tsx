import React from 'react';
import {
  Header,
  Group,
  Link,
  Separator
} from "@vkontakte/vkui";

import SimpleProductItem, { IProps as ProductItemProps } from 'src/components/MainPanel/Products/ProductItem/SimpleProductItem';

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
      <Group className={className ? className : ''} header={<Header indicator="test" aside={<Link>Показать все</Link>}>Продукты</Header>} separator="hide">
        <Separator />
        <div>
          {list.map((product, index) => (
            <SimpleProductItem
              key={`user-panel-product-item-${index}`}
              name={product.name}
              report={product.report}
              src={product.src}
            />
          ))}
        </div>
      </Group>
    );
  }
}
