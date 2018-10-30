import * as React from 'react';
import * as enzyme from 'enzyme';
import { Description } from '.';

it('renders the correct text when no enthusiasm level is given', () => {
  const description = enzyme.shallow(<Description countBy={2} />);
  expect(description).toMatchSnapshot();
});
