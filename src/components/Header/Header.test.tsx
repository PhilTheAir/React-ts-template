import * as React from 'react';
import * as enzyme from 'enzyme';
import { Header } from '.';

it('renders the correct text when no enthusiasm level is given', () => {
  const header = enzyme.shallow(<Header name='Daniel' />);
  expect(header).toMatchSnapshot();
});
