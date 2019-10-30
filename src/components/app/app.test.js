import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';
import questions from "../../mocks/questions.js";

it(`App component renders correctly`, () => {
  const tree = renderer
    .create(<App
      gameTime = {0}
      errorCount = {0}
      questions = {questions}
      onUserAnswer = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
