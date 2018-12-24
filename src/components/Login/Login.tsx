import * as React from 'react';
import { AUTH_TOKEN } from '../../auth';

interface IProps {
  
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
          {!login && (
            <input
              value={name}
              onChange={e => this.setState({ name: e.target.value })}
              type="text"
              placeholder="Your name"
            />
          )}
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
          <div onClick={this.confirm}>
            {login ? 'login' : 'create account'}
          </div>
          <div onClick={() => this.setState({ login: !login })}>
            {login
              ? 'need to create an account?'
              : 'already have an account?'}
          </div>
        </div>
      </div>
    )
  }

  confirm = async () => {
    // ... you'll implement this 🔜
  }

  saveUserData = (token: string) => {
    localStorage.setItem(AUTH_TOKEN, token)
  }
}