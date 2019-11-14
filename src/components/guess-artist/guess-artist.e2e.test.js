import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessArtist from './guess-artist';

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

Enzyme.configure({adapter: new Adapter()});

it(`GuessArtist is correctly rendered after relaunch`, () => {

  const clickHandler = jest.fn();
  const screen = shallow(<GuessArtist
    question = {question}
    onAnswer = {clickHandler}
  />);

  const form = screen.find(`.game__artist`);
  form.simulate(`change`, {preventDefault() {}});
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
