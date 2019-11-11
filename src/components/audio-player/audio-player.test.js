import React from 'react';
import renderer from 'react-test-renderer';
import AudioPlayer from './audio-player';

it(`AudioPlayer correctly renders after relaunch`, () => {

  const tree = renderer
  .create(<AudioPlayer
    isPlaying={false}
    onPlayButtonClick= {jest.fn()}
    src= {`https://upload.wikimedia.org/wikipedia/commons/a/a3/Kimi_ga_Yo_instrumental.ogg`}
  />, {
    createNodeMock: () => {
      return {};
    }
  })
  .toJSON();

  expect(tree).toMatchSnapshot();
});
