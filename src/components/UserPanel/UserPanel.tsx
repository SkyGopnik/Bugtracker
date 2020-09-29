import React from 'react';

import Avatar from "./User/Avatar";
import Activity from "./User/Activity";
import Products from "./User/Products";
import Reports from "./User/Reports";

interface IProps {
  name: string,
  rating: string,
  src: string,
  reports: string
}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      name,
      rating,
      reports,
      src,
    } = this.props;

    return (
      <div>
        
      </div>
    );
  }
}