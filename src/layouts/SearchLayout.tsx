import * as React from 'react';
import { Header } from '../components/Header';
import { Search } from '../components/Search';

export default class SearchLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Search />
      </React.Fragment>
    );
  }
}