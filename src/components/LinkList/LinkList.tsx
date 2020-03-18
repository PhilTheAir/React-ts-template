import * as React from 'react';
// step 8
import { useQuery } from '@apollo/react-hooks';

import {
  Link, 
  IFeedProps,
  linksInfo
} from '../Link';

// step 9
import { FEED_QUERY } from './LinkList.gql';

const LinkList = () => {
  // step 10
  const { loading, error, data } = useQuery<IFeedProps>(FEED_QUERY);
  if (loading) return <div>Fetching</div>;
  if (error || !data) return <div>Error</div>;
  const { links } = data.feed;
  return (
    <div>
      {
        links.map((link: linksInfo) => <Link key={link.id} {...link} />)
      }
    </div>
  )
}

export default LinkList;