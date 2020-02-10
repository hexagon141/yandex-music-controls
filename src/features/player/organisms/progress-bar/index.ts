import {DOMProperty, h, spec} from 'effector-dom';
import {$progress} from '../../model/interface';
import './index.scss';


export function ProgressBar() {
  h('div', () => {
    spec({
      attr: {
        class: 'progress-bar',
      }
    });

    h('div', () => {
      spec({
        attr: {
          class: 'progress-bar__line',
        },
        style: {
          width: $progress.map<DOMProperty>(percent => `${percent}%`),
        }
      })
    })
  })
}