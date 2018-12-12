import * as React from 'react';
import * as enzyme from 'enzyme';
import { Login } from '.';

it('renders the correct text when no enthusiasm level is given', () => {
  const description = enzyme.shallow(<Login link={{description: "description", url: "url"}} />);
  expect(description).toMatchSnapshot();
});
