import React from 'react';
import GuessArtist from './guess-artist';
import renderer from 'react-test-renderer';

const question = {
  type: `artist`,
  song: {
    artist: `Jim Beam`,
    src: `https://upload.wikimedia.org/wikipedia/commons/a/a3/Kimi_ga_Yo_instrumental.ogg`,
  },
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

it(`GuessArtist component renders correctly`, () => {
  const tree = renderer
    .create(<GuessArtist
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
