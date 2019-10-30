import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GuessGenre from './guess-genre';
import questions from "../../mocks/questions.js";

Enzyme.configure({adapter: new Adapter()});

it(`GuessGenre is correctly rendered after relaunch`, () => {

  const clickHandler = jest.fn();
  const screen = shallow(<GuessGenre
    question = {questions[0]}
    screenIndex = {0}
    onAnswer = {clickHandler}
  />);

  const form = screen.find(`.game__tracks`);
  form.simulate(`submit`, {
    preventDefault: () => {}
  });
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
