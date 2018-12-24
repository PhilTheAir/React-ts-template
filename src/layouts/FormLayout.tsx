import * as React from 'react';
import { CreateLink } from '../components/CreateLink';
import { Header } from '../components/Header';

export default class FormLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <CreateLink />
      </React.Fragment>
    );
  }
}