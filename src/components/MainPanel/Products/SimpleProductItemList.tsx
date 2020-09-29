import React from 'react';

import SimpleProductItem from "./ProductItem/SimpleProductItem";

interface IProps {}

export default class extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (
      <div>
        <SimpleProductItem
          name={"CooK"}
          report={`0 отчётов`}
          src="https://sun2.velcom-by-minsk.userapi.com/c853528/v853528146/149624/K8N6X2dCoOA.jpg"
        />
        <SimpleProductItem
          name={"Мечты"}
          report={"2 отчёта"}
          src="https://sun2.velcom-by-minsk.userapi.com/c853528/v853528146/149624/K8N6X2dCoOA.jpg"
        />
      </div>
    );
  }
}
