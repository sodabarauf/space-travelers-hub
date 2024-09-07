import React from 'react';
import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../redux/store';
import RocketsProfile from '../components/MissionsProfile';

test('Check if missions profile component is rendered correctly', () => {
  const tree = render(
    <Provider store={store}>
      <BrowserRouter>
        <RocketsProfile />
      </BrowserRouter>
    </Provider>,
  );

  expect(tree).toMatchSnapshot();
});
