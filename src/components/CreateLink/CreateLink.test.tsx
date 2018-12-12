import * as React from 'react';
import * as enzyme from 'enzyme';
import { CreateLink } from '.';

it('renders the correct text when no enthusiasm level is given', () => {
  const description = enzyme.shallow(<CreateLink />);
  expect(description).toMatchSnapshot();
});
