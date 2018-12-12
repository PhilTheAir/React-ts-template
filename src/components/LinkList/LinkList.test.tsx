import * as React from 'react';
import * as enzyme from 'enzyme';
import { LinkList } from '.';

it('renders the correct text when no enthusiasm level is given', () => {
  const description = enzyme.shallow(<LinkList />);
  expect(description).toMatchSnapshot();
});
