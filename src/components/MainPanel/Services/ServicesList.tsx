import React from 'react';
import { 
  List, 
  Separator
} from "@vkontakte/vkui";
import ServicesItem from './ServicesItem/ServicesItem';

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <List>
        <ServicesItem 
          name={"CooK"}
          statistic={"152 отчёта, 70 открытых, 10 пожеланий"}
          version={`Версия: {1.0.1}`}
          src="https://sun2.velcom-by-minsk.userapi.com/c853528/v853528146/149624/K8N6X2dCoOA.jpg"
        />
        <Separator />
        <ServicesItem 
          name={"Мечты"}
          statistic={"152 отчёта, 70 открытых, 10 пожеланий"}
          version={`Версия: {1.0.1}`}
          src="https://sun2.velcom-by-minsk.userapi.com/c853528/v853528146/149624/K8N6X2dCoOA.jpg"
          button={"Запустить"}
        />
      </List>
    );
  }
}