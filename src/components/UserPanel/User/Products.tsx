import React from 'react';
import {
  Header,
  Group,
  Link,
  Separator
} from "@vkontakte/vkui";

import SimpleProductItem, { IProps as ProductItemProps } from '../../MainPanel/Products/ProductItem/SimpleProductItem';

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
      <Group className={className ? className : ''} header={<Header indicator="test" aside={<Link>Показать все</Link>}>Продукты</Header>}>
        <Separator />
        {list.map((product, index) => (
          <SimpleProductItem
            name="test"
            report="0 отчётов"
            src="0"
          />
        ))}
      </Group>
    );
  }
}
