import React from 'react';
import GuessGenre from './guess-genre';
import renderer from 'react-test-renderer';
import questions from "../../mocks/questions.js";

it(`App component renders correctly`, () => {
  const tree = renderer
    .create(<GuessGenre
      question = {questions[0]}
      screenIndex = {0}
      onAnswer = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
