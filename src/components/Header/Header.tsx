import * as React from 'react';
import { StyledDiv } from './Header.style';
import { ContextConsumer } from '../../contexts';

interface IProps {
  name?: string;
}

const Header: React.SFC<IProps> = (props: IProps) => (
  <ContextConsumer>
    {
      contextObj => (
        <StyledDiv className="greeting">
          Hello, {props.name || contextObj.name}! Welcome to React and TypeScript.
        </StyledDiv>
      )
    }
  </ContextConsumer>
);

export default Header;
