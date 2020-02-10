import {h, spec} from 'effector-dom';
import './index.scss';

export function CurrentTrack() {
  h('section', () => {
    spec({
      attr: {
        class: 'current-track',
      }
    });

    h('div', {
      attr: {
        class: 'current-track__artist'
      },
      text: 'Yung Lean',
    });

    h('div', {
      attr: {
        class: 'current-track__name'
      },
      text: 'Kyoto',
    })
  })
}