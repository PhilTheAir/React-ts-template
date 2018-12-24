import * as React from 'react';
import { Link, withRouter, RouteComponentProps } from 'react-router-dom';
import { AUTH_TOKEN } from '../../auth';

interface IPathParams {
  
}

interface IProps extends RouteComponentProps<IPathParams> {
  
}

interface IState {

}

class Header extends React.Component<IProps, IState> {
  handleLogout = () => {
    const { history } = this.props;
    localStorage.removeItem(AUTH_TOKEN);
    history.push('/');
  }

  render() {
    const authToken = localStorage.getItem(AUTH_TOKEN);
    return (
      <div>
        <div>
          <div>Hacker News</div>
          <Link to="/">
            new
          </Link>
          <div>|</div>
          <Link to="/top">
            top
          </Link>
          <div>|</div>
          <Link to="/search">
            search
          </Link>
          {authToken && (
            <div>
              <div>|</div>
              <Link to="/create">
                submit
              </Link>
            </div>
          )}
        </div>
        <div>
          {authToken ? (
            <div onClick={this.handleLogout}>
              logout
            </div>
          ) : (
              <Link to="/login">
                login
            </Link>
            )}
        </div>
      </div>
    )
  }
}

export default withRouter(Header);
