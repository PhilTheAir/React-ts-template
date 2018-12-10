import * as React from 'react';
import * as enzyme from 'enzyme';
import { Link } from '.';

it('renders the correct text when no enthusiasm level is given', () => {
  const description = enzyme.shallow(<Link />);
  expect(description).toMatchSnapshot();
});
