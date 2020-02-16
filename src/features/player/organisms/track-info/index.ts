import {h, spec} from 'effector-dom';
import {$track} from '../../model/interface';
import './index.scss';

export function TrackInfo() {
  h('div', () => {
    spec({
      attr: {
        class: 'track-info',
      }
    });

    h('div', {
      attr: {
        class: 'track-info__artists',
      },
      text: $track.map(track => track?.artists.join(', ') ?? null),
    });

    h('div', {
      attr: {
        class: 'track-info__name',
      },
      text: $track.map(track => track?.name ?? null),
    })
  })
}