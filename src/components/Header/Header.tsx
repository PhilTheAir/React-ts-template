import * as React from 'react';
import { StyledDiv } from './Header.style';

interface IProps {
  name?: string;
}

const Header: React.SFC<IProps> = (props: IProps) => (
  <StyledDiv className="greeting">
    Hello, {props.name}! Welcome to React and TypeScript.
        </StyledDiv>
);

export default Header;
