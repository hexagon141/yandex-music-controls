import {h, spec, using} from 'effector-dom';
import {$theme} from './features/theme';
import './ui/theme/index.scss';
import {Player} from './pages/player';

using(document.body, () => {
  h('div', () => {
    spec({
      attr: {
        class: 'theme',
      },
      data: {
        theme: $theme,
        devContainer: true
      }
    });

    Player();
  });
});