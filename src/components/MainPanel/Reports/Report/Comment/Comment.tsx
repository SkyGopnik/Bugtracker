import React from 'react';
import {
  Div
} from "@vkontakte/vkui";

import CommentItem from './CommentItem';
import Send from './Send';

interface IProps{}

export default class extends React.Component<IProps> {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }

  render() {

    return (
      <>
      <CommentItem/>
      <Send/>
      </>
    );
  }
}
