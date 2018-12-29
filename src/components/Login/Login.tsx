import * as React from 'react';
import { Mutation } from 'react-apollo';
import { SIGNUP_MUTATION, LOGIN_MUTATION } from './Login.gql';
import { AUTH_TOKEN } from '../../auth';

interface IProps {
  history: any;
}

interface IState {

}

export default class Login extends React.Component<IProps, IState> {
  readonly state = {
    login: true,
    email: '',
    password: '',
    name: '',
  }

  render() {
    const { login, email, password, name } = this.state;
    return (
      <div>
        <h4>{login ? 'Login' : 'Sign Up'}</h4>
        <div>
          {
            !login && (
              <input
                value={name}
                onChange={e => this.setState({ name: e.target.value })}
                type="text"
                placeholder="Your name"
              />
            )
          }
          <input
            value={email}
            onChange={e => this.setState({ email: e.target.value })}
            type="text"
            placeholder="Your email address"
          />
          <input
            value={password}
            onChange={e => this.setState({ password: e.target.value })}
            type="password"
            placeholder="Choose a safe password"
          />
        </div>
        <div>
          <Mutation
            mutation={login ? LOGIN_MUTATION : SIGNUP_MUTATION}
            variables={{ email, password, name }}
            onCompleted={(data: any) => this.confirm(data)}
          >
            {
              mutation => (
                <div onClick={mutation}>
                  {login ? 'login' : 'create account'}
                </div>
              )
            }
          </Mutation>
          <div onClick={() => this.setState({ login: !login })}>
            {
              login
                ? 'need to create an account?'
                : 'already have an account?'
            }
          </div>
        </div>
      </div>
    )
  }

  confirm = async (data: any) => {
    const { token } = this.state.login ? data.login : data.signup;
    this.saveUserData(token);
    this.props.history.push('/');
  }

  saveUserData = (token: string) => {
    localStorage.setItem(AUTH_TOKEN, token);
  }
}