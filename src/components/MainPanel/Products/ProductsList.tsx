import React from 'react';
import {
  Separator,
  Tabs,
  TabsItem,
  Placeholder,
  Button, Div, Spinner
} from "@vkontakte/vkui";

import ProductItem from "./ProductItem/ProductItem";

import Icon28ServicesOutline from '@vkontakte/icons/dist/28/services_outline';
import ReportItem from "src/components/MainPanel/Reports/ReportItem/ReportItem";
import Icon56GhostOutline from "@vkontakte/icons/dist/56/ghost_outline";

import {ProductReducerIterface} from "src/store/productList/reducers";
import {AppReducerIterface} from "src/store/app/reducers";
import {changePanel} from "src/store/app/actions";

interface IProps extends ProductReducerIterface, AppReducerIterface {}

interface IState {
  activeTab: 'all' | 'own' | 'moderated',
}

export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'all'
    };
  }

  componentDidMount() {
    const { getProductList } = this.props;

    getProductList();
  }

  render() {
    const { activeTab } = this.state;
    const { list, changePanel } = this.props;

    return (
      <div>
        <Tabs>
          <TabsItem
            onClick={() => this.setState({ activeTab: 'all' })}
            selected={activeTab === 'all'}
          >
            Все
          </TabsItem>
          <TabsItem
            onClick={() => this.setState({ activeTab: 'own' })}
            selected={activeTab === 'own'}
          >
            Мои
          </TabsItem>
          <TabsItem
            onClick={() => this.setState({ activeTab: 'moderated' })}
            selected={activeTab === 'moderated'}
          >
            Модерируемые
          </TabsItem>
        </Tabs>

        <Separator />

        {activeTab === 'all' && (
          !list.loading ? (
            list.data.length !== 0 ? (
              list.data.map((item, index) => (
                <ProductItem
                  key={index}
                  name={item.title}
                  statistic={"0 отчётов, 0 пожеланий"}
                  version={`Версия: {1.0.0}`}
                  src={`https://cloudskyreglis.ru/files/${item.image}`}
                  onClick={() => changePanel('product', item.id)}
                />
              ))
            ) : (
              <Placeholder
                icon={<Icon56GhostOutline />}
                header="Продукты"
              >
                Похоже, тут ничего нет
              </Placeholder>
            )
          ) : (
            <Div>
              <Spinner />
            </Div>
          )
        )}
        {activeTab === 'own' && (
          <Placeholder
            icon={<Icon28ServicesOutline width={56} height={56} />}
            action={<Button size="l">Выбрать продукт</Button>} //кидаем на все
          >
            Вы не учавствуете в тестировании никаких продуктов.
          </Placeholder>
        )}
        {activeTab === 'moderated' && (
          <Placeholder
            icon={<Icon28ServicesOutline width={56} height={56} />}
            action={<Button size="l" onClick={() => changePanel('add-product')}>Предложить свой продукт</Button>} //кидаем на форму/лс
          >
            Вы не модерируете никакие продукты.
          </Placeholder>
        )}
      </div>
    );
  }
}
