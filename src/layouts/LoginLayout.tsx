import * as React from 'react';
import { Header } from '../components/Header';
import { Login } from '../components/Login';

export default class LoginLayout extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Login />
      </React.Fragment>
    );
  }
}