import React from 'react';
import GuessArtist from './guess-artist';
import renderer from 'react-test-renderer';
import questions from "../../mocks/questions.js";

it(`App component renders correctly`, () => {
  const tree = renderer
    .create(<GuessArtist
      question = {questions[1]}
      screenIndex = {0}
      onAnswer = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
