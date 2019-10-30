import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessArtist from './guess-artist';
import questions from "../../mocks/questions.js";

Enzyme.configure({adapter: new Adapter()});

it(`GuessArtist is correctly rendered after relaunch`, () => {

  const clickHandler = jest.fn();
  const screen = shallow(<GuessArtist
    question = {questions[0]}
    screenIndex = {0}
    onAnswer = {clickHandler}
  />);

  const form = screen.find(`.game__artist`);
  form.simulate(`change`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
