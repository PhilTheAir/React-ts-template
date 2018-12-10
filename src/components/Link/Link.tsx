import * as React from 'react';

interface IProps {
  link: {
    description: string;
    url: string;
  }
}

interface IState {

}

export default class Link extends React.Component<IProps, IState> {
  render() {
    const { link } = this.props;
    const { description, url } = link;
    return (
      <div>
        <div>
          {description} ({url})
        </div>
      </div>
    )
  }
}
