import {h, using, spec} from 'effector-dom';
import {Player} from './pages/player';
import './ui/theme/dark.css';

using(document.body, () => {
  h('div', () => {
    spec({
      attr: {
        class: 'dark',
      }
    });

    h('div', () => {
      spec({
        attr: {
          class: 'container'
        }
      });

      Player();
    })
  })
});