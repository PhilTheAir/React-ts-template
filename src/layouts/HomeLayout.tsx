import * as React from 'react';
import { Header } from '../components/Header';
import { ContextProvider, stateObj } from '../contexts';

export default class HomeLayout extends React.Component {
  render() {
    return (
      <ContextProvider value={stateObj}>
        <Header />
      </ContextProvider>
    );
  }
}