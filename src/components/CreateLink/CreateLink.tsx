import * as React from 'react';
// step 12
import { useMutation } from '@apollo/react-hooks';
import { withRouter } from 'react-router';
import { POST_MUTATION } from './CreateLink.gql';
import { ILinksInfo } from '../Link';

const CreateLink = () => {
  const { useState } = React;
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");

  // step 13
  const [postMutation, { error, data }] = useMutation<ILinksInfo>(
    POST_MUTATION, {
    variables: { description, url }
  });

  // step 14
  const handleClick = () => {
    postMutation();
    console.log('error::', error, 'data::', data);
  }

  return (
    <div>
      <div>
        <input
          value={description}
          onChange={e => setDescription(e.target.value)}
          type="text"
          placeholder="A description for the link"
        />
        <input
          value={url}
          onChange={e => setUrl(e.target.value)}
          type="text"
          placeholder="The URL for the link"
        />
      </div>
      {/* step 15 */}
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}

export default withRouter(CreateLink as any);