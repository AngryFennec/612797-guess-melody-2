import React from 'react';
import WelcomeScreen from './welcome-screen.jsx';
import renderer from 'react-test-renderer';

it(`WelcomeScreen component renders correctly`, () => {
  const tree = renderer
    .create(<WelcomeScreen
      gameTime = {0}
      errorCount = {0}
      onStartButtonClick = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
