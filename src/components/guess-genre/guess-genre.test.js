import React from 'react';
import GuessGenre from './guess-genre';
import renderer from 'react-test-renderer';

const question = {
  type: `genre`,
  genre: `rock`,
  answers: [
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `rock`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `pop`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `jazz`,
    },
    {
      src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
      genre: `rock`,
    },
  ],
};

it(`GuessGenre component renders correctly`, () => {
  const tree = renderer
    .create(<GuessGenre
      question = {question}
      onAnswer = {jest.fn()}
    />,
    {
      createNodeMock: () => {
        return {};
      }
    })
    .toJSON();

  expect(tree).toMatchSnapshot();
});
