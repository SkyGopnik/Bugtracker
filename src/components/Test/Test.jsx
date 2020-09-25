import React from 'react';

import Test from './Test.scss';

export default class extends React.Component {
  constructor() {
    super();

    this.state = {};
  }

  render() {
    const { count, setCountNumber } = this.props;

    return (
      <>
        <div className={Test.button}>
          {count}
          <button type="button" onClick={() => setCountNumber(count + 1)}>Click</button>
          {/* Будет работать т.к. мы используем scss .test находится внутри родителя .button */}
          <div className={Test.test}>
            test
          </div>
        </div>
        {/* Не будет работать т.к. класса .test не существует */}
        <div className={Test.test}>
          test
        </div>
      </>
    );
  }
}
