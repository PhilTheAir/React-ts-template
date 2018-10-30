import * as React from 'react';
import { Description } from '../components/Description';

export default class FormLayout extends React.Component {
  render() {
    return (
      <Description countBy={3} />
    );
  }
}