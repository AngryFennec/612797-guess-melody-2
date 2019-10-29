import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WelcomeScreen from "./welcome-screen.jsx";

Enzyme.configure({adapter: new Adapter()});

it(`App is correctly rendered after relaunch`, () => {

  const clickHandler = jest.fn();
  const app = shallow(<WelcomeScreen
    gameTime = {0}
    errorCount = {0}
  />);

  const btn = app.find(`.welcome__button`);
  btn.simulate(`click`);
  expect(clickHandler).toHaveBeenCalledTimes(1);
});
