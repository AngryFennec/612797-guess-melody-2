import React from 'react';
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import AudioPlayer from './audio-player';

Enzyme.configure({adapter: new Adapter()});

it(`AudioPlayer correctly renders after relaunch`, () => {

  const props = {
    isPlaying: false,
    onPlayButtonClick: jest.fn(),
    src: `https://upload.wikimedia.org/wikipedia/commons/a/a3/Kimi_ga_Yo_instrumental.ogg`
  };

  AudioPlayer.prototype.componentDidUpdate = jest.fn();
  const screen = mount(<AudioPlayer {...props} />);

  const btn = screen.find(`.track__button`);

  expect(screen.state().isPlaying).toBe(false);
  btn.props().onClick();
  expect(screen.state().isPlaying).toBe(true);

  expect(props.onPlayButtonClick).toHaveBeenCalledTimes(1);
});
