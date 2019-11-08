import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

Enzyme.configure({adapter: new Adapter()});

const playButtonCLickHandler = jest.fn();

it(`AudioPlayer correctly renders after relaunch`, () => {

  const screen = shallow(<AudioPlayer
    isPlaying={false}
    onPlayButtonClick= {playButtonCLickHandler}
    src= {``}
  />);

  const btn = screen.find(`.track__button`);
  btn.simulate(`click`);
  expect(playButtonCLickHandler).toHaveBeenCalledTimes(1);
});
