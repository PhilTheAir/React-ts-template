import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import {
  SIGNUP_MUTATION,
  LOGIN_MUTATION,
  ISignup,
  ILogin
} from '.';
import { AUTH_TOKEN } from '../../utils';

interface IProps {
  history: any;
}

const Login = (props: IProps) => {
  const { useState } = React;
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  // step 17
  const [postSignupMutation, {error: error1, data: data1}] = useMutation<ISignup>(
    SIGNUP_MUTATION, {
    variables: { email, password, name }
  });

  // step 18
  const [postLoginMutation, {error: error2, data: data2}] = useMutation<ILogin>(
    LOGIN_MUTATION, {
    variables: { email, password }
  });

  // step 19
  const handleClick = () => {
    isLogin ? postLoginMutation() : postSignupMutation();
    const result = isLogin ? data2 && data2.login : data1 && data1.signup;
    const token = result ? result.token : '';
    if (error1) console.log('error::', error1);
    if (error2) console.log('error::', error2);
    localStorage.setItem(AUTH_TOKEN, token);
    props.history.push('/');
  }

  return (
    <div>
      <h4>{isLogin ? 'Login' : 'Sign Up'}</h4>
      <div>
        {
          !isLogin && (
            <input
              value={name}
              onChange={e => setName(e.target.value)}
              type="text"
              placeholder="Your name"
            />
          )
        }
        <input
          value={email}
          onChange={e => setEmail(e.target.value)}
          type="text"
          placeholder="Your email address"
        />
        <input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type="password"
          placeholder="password"
        />
      </div>
      <div>
        <div onClick={handleClick}>
          {isLogin ? 'Login' : 'Create account'}
        </div>
        <div onClick={() => setIsLogin(!isLogin)}>
          {
            isLogin
              ? 'need to create an account?'
              : 'already have an account?'
          }
        </div>
      </div>
    </div>
  )
}

export default Login;