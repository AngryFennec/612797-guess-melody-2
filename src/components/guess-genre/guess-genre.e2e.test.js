import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessGenre from './guess-genre';

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

Enzyme.configure({adapter: new Adapter()});

it(`GuessGenre is correctly rendered after relaunch`, () => {

  const clickHandler = jest.fn();
  const screen = shallow(<GuessGenre
    question = {question}
    onAnswer = {clickHandler}
  />);

  const form = screen.find(`.game__tracks`);
  form.simulate(`submit`, {
    preventDefault: () => {}
  });
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
