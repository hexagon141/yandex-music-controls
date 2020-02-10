import {h} from 'effector-dom';
import {CurrentTrack, ProgressBar} from '../../features/player';
import {Cover} from '../../ui/atoms';

export const Player = () => {
  h('div', () => {
    Cover({
      src: 'https://avatars.yandex.net/get-music-content/95061/017c7c11.a.7791074-1/300x300',
      placement: 'player'
    });
    CurrentTrack();
    ProgressBar();
  })
};