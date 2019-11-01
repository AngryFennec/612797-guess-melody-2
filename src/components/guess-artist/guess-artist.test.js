import React from 'react';
import GuessArtist from './guess-artist';
import renderer from 'react-test-renderer';

const question = {
  type: `artist`,
  src: `https://upload.wikimedia.org/wikipedia/commons/1/1f/Uganda_flag_and_national_anthem_-_Oh_Uganda_Land_o.ogg`,
  answers: [
    {
      picture: `http://placehold.it/134x134`,
      artist: `Artist 1`
    },
    {
      picture: `http://placehold.it/134x134`,
      artist: `Artist 2`
    },
    {
      picture: `http://placehold.it/134x134`,
      artist: `Artist 3`
    },
    {
      picture: `http://placehold.it/134x134`,
      artist: `Artist 4`
    },
  ],
};

it(`App component renders correctly`, () => {
  const tree = renderer
    .create(<GuessArtist
      question = {question}
      screenIndex = {0}
      onAnswer = {jest.fn()}
    />)
    .toJSON();

  expect(tree).toMatchSnapshot();
});
