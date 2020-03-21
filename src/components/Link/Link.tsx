import * as React from 'react';
import { useMutation } from '@apollo/react-hooks';
import {
  AUTH_TOKEN,
  timeDifferenceForDate
} from '../../utils';
import {
  ILinksInfo,
  VOTE_MUTATION
} from '.';

export const Link = (props: ILinksInfo) => {
  const authToken = localStorage.getItem(AUTH_TOKEN);
  const {
    id,
    description,
    url,
    votes,
    postedBy,
    createdAt
  } = props;
  // step 24
  const [voteMutation] = useMutation<ILinksInfo>(
    VOTE_MUTATION, {
    variables: { linkId: id }
  });
  return (
    <div className="flex mt2 items-start">
      <div className="flex items-center">
        {
          authToken && (
            <div className="ml1 gray f11" onClick={() => voteMutation()}>
              ▲
            </div>
          )
        }
      </div>
      <div className="ml1">
        <div>
          {description} ({url})
        </div>
        <div className="f6 lh-copy gray">
          {votes.length} votes | by{' '}
          {postedBy ? postedBy.name : 'Unknown'}{' '}
          {timeDifferenceForDate(createdAt)}
        </div>
      </div>
    </div>
  )
}
