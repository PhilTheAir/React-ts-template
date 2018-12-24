import * as React from 'react';
import { Mutation } from 'react-apollo';
import { withRouter } from 'react-router';
import { POST_MUTATION } from './CreateLink.gql';

interface IProps {
  history?: any;
}

interface IState {

}

class CreateLink extends React.Component<IProps, IState> {
  readonly state = {
    description: '',
    url: '',
  }

  render() {
    const { description, url } = this.state
    return (
      <div>
        <div>
          <input
            value={description}
            onChange={e => this.setState({ description: e.target.value })}
            type="text"
            placeholder="A description for the link"
          />
          <input
            value={url}
            onChange={e => this.setState({ url: e.target.value })}
            type="text"
            placeholder="The URL for the link"
          />
        </div>
        <Mutation mutation={POST_MUTATION} variables={{ description, url }} onCompleted={() => this.props.history.push('/')}>
          {
            (postMutation: any) => <button onClick={postMutation}>Submit</button>
          }
        </Mutation>
      </div>
    )
  }
}

export default withRouter(CreateLink as any);