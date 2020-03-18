import * as React from 'react';
import { Header } from '../components/Header';
import LinkList from '../components/LinkList';

export default class HomeLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <LinkList />
      </React.Fragment>
    );
  }
}