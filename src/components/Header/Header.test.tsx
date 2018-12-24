import * as React from 'react';
import * as enzyme from 'enzyme';
import { Header } from '.';

it('renders correctly', () => {
  const description = enzyme.shallow(<Header />);
  expect(description).toMatchSnapshot();
});
