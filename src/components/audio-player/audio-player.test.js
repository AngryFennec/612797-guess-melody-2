import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player';

it(`AudioPlayer correctly renders after relaunch`, () => {

  const tree = renderer
  .create(<AudioPlayer
    isPlaying={false}
    onPlayButtonClick= {jest.fn()}
    src= {``}
  />)
  .toJSON();

  expect(tree).toMatchSnapshot();
});
