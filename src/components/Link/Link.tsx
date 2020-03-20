import * as React from 'react';
import { ILinksInfo } from '.';

interface IState {

}

export class Link extends React.Component<ILinksInfo, IState> {
  render() {
    const { description, url } = this.props;
    return (
      <div>
        <div>
          {description} ({url})
        </div>
      </div>
    )
  }
}
