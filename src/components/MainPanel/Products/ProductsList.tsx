import React from 'react';
import {
  Separator,
  Tabs,
  TabsItem
} from "@vkontakte/vkui";

import ProductItem from "./ProductItem/ProductItem";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: 'my'
    };

  }

  render() {

    return (
      <div>
        <Tabs>
          <TabsItem
              onClick={() => this.setState({ activeTab: 'all' })}
              selected={this.state.activeTab === 'all'}
          >
              Все
          </TabsItem>
          <TabsItem
              onClick={() => this.setState({ activeTab: 'my' })}
              selected={this.state.activeTab === 'my'}
          >
              Мои
          </TabsItem>
          <TabsItem
              onClick={() => this.setState({ activeTab: 'moderation' })}
              selected={this.state.activeTab === 'moderation'}
          >
              Модерируемые
          </TabsItem>
        </Tabs>
        <Separator />
        {this.state.activeTab === "my" ? <div>
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
        </div> : null}  
      </div>
    );
  }
}
