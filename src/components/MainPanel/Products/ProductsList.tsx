import React from 'react';
import {
  Separator,
  Tabs,
  TabsItem
} from "@vkontakte/vkui";

import ProductItem from "./ProductItem/ProductItem";

interface IProps {}

interface IState {
  activeTab: 'all' | 'own' | 'moderated'
}


export default class extends React.Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'own'
    };
  }

  render() {
    const { activeTab } = this.state;

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

        {activeTab === 'own' && (
          <>
            <ProductItem
              name={"CooK"}
              statistic={"152 отчёта, 70 открытых, 10 пожеланий"}
              version={`Версия: {1.0.1}`}
              src="https://sun2.velcom-by-minsk.userapi.com/c853528/v853528146/149624/K8N6X2dCoOA.jpg"
            />
            <ProductItem
              name={"Мечты"}
              statistic={"152 отчёта, 70 открытых, 10 пожеланий"}
              version={`Версия: {1.0.1}`}
              src="https://sun2.velcom-by-minsk.userapi.com/c853528/v853528146/149624/K8N6X2dCoOA.jpg"
              button={"Запустить"}
            />
          </>
        )}
      </div>
    );
  }
}
