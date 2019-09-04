import EnterLocation from '../../app/javascript/components/EnterLocation.js';
import { shallow } from 'enzyme';
import React from 'react';
import App from '../../app/javascript/components/App.js';
import Adapter from 'enzyme-adapter-react-15';

describe('EnterLocation', () => {
  it('renders without crashing', () => {
    shallow(<App />);
  });

  // test('allows user to enter location A', () => {

  // });
});
