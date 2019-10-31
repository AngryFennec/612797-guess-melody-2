import React from 'react';
import App from './app.jsx';
import renderer from 'react-test-renderer';

const questions = [
  {
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
  },

  {
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
  },
];

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
