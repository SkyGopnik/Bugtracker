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

interface IProps {
  list: {
    loading: boolean,
    error: any | null,
    data: Array<{
      id?: string,
      userId: string,
      title: string,
      description: string
      type?: {
        text: string
      },
      createdAt?: Date,
      updatedAt?: Date
    }>
  },
  getProductList(page?: number),
  changeActive(name: string)
}

interface IState {
  activeTab: 'all' | 'own' | 'moderated'
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
    const { list, changeActive } = this.props;

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
                  src="https://sun2.velcom-by-minsk.userapi.com/c853528/v853528146/149624/K8N6X2dCoOA.jpg"
                />
              ))
            ) : (
              <Placeholder
                icon={<Icon56GhostOutline />}
                header="Отчёты"
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
            action={<Button size="l" onClick={() => changeActive('add-product')} >Предложить свой продукт</Button>} //кидаем на форму/лс
          >
            Вы не модерируете никакие продукты.
          </Placeholder>
        )}
      </div>
    );
  }
}
