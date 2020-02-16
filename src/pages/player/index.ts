import {ControlPanel, TrackInfo, ProgressBar, TrackCover} from '../../features/player';
import {h, spec} from 'effector-dom';
import './index.scss'

export const Player = () => {
  h('div', () => {
    spec({
      attr: {
        class: 'player'
      }
    });

    TrackCover();

    h('section', () => {
      spec({
        attr: {
          class: 'player__control'
        }
      });

      TrackInfo();
      ProgressBar();
      ControlPanel();
    });
  })
};