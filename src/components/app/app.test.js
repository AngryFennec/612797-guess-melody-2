import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

it(`App component renders correctly`, () => {
  const tree = renderer
    .create(<App
      gameTime = {0}
      errorCount = {0}
      onClickHandler = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
