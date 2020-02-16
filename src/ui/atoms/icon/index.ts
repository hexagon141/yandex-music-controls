import {h, spec} from 'effector-dom';
import icons from './sprite.svg';
import './index.css';

type Icon = {
  name: string,
  width?: number,
  height?: number,
}

export function Icon ({name, width, height}: Icon) {
  h('svg', () => {
    spec({
      attr: {
        class: 'icon',
      },
      style: {
        width,
        height
      }
    });

    h('use', {
      attr: {
        href: `${icons}#${name}`
      }
    })
  })
}