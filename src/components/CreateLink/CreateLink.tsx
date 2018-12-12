import * as React from 'react';
import { Query } from 'react-apollo';
import { Link } from '../Link';
import { FEED_QUERY } from './CreateLink.gql';

interface IProps {

}

interface IState {

}

export default class CreateLink extends React.Component<IProps, IState> {
  render() {
    return (
      <Query query={FEED_QUERY}>
        {({ loading, error, data }) => {
          if (loading) return <div>Fetching</div>
          if (error) return <div>Error</div>
          const linksToRender = data.feed.links;
          return (
            <div>
              {
                linksToRender.map((link: any) => <Link key={link.id} link={link} />)
              }
            </div>
          )
        }}
      </Query>
    )
  }
}