import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { FEED_SEARCH_QUERY } from '.';
import {
  Link,
  ILinksInfo,
  IFeedProps
} from '../Link';

const Search = () => {
  const { useState } = React;
  const [links, setLinks] = useState([] as any);
  const [, setFilter] = useState("");

  // step 26
  const { data } = useQuery<IFeedProps>(FEED_SEARCH_QUERY);

  const handleClick = () => {
    setLinks(data && data.feed);
  }

  return (
    <div>
      <div>
        Search
          <input
          type='text'
          onChange={e => setFilter(e.target.value)}
        />
        <button onClick={handleClick}>OK</button>
      </div>
      {
        links.map((link: ILinksInfo, index: number) => (
          <Link key={index} {...link} />
        ))
      }
    </div>
  )
}

export default Search;
