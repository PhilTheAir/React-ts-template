import * as React from 'react';
import { linksInfo } from '.';

interface IState {

}

export class Link extends React.Component<linksInfo, IState> {
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
