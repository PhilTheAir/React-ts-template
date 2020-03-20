import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { AUTH_TOKEN } from '../../utils';
import { StyledView } from '.';

interface IPathParams {

}

interface IProps extends RouteComponentProps<IPathParams> {

}

const Header = (props: IProps) => {
  const handleLogout = () => {
    localStorage.removeItem(AUTH_TOKEN);
    const { history } = props;
    history.push('/');
  }

  const authToken = localStorage.getItem(AUTH_TOKEN);

  return (
    <StyledView>
      <Link to="/">new</Link>
      <Link to="/top">top</Link>
      <Link to="/search">search</Link>
      {
        authToken && (
          <Link to="/create">submit</Link>
        )
      }
      {
        authToken ? (
          <div onClick={handleLogout}>
            logout
          </div>
        ) : (
            <Link to="/login">login</Link>
          )
      }
    </StyledView>
  )
}

export default withRouter(Header);
