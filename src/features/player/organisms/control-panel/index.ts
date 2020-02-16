import {h, spec} from 'effector-dom';
import {Control} from '../../molecules';
import './index.scss';

export function ControlPanel() {
  h('div', () => {
    spec({
      attr: {
        class: 'control-panel'
      }
    });

    h('div', () => {
      spec({
        attr: {
          class: 'control-panel__dislike'
        }
      });

      Control({
        variant: 'ghost',
        size: 'small',
        icon: 'not-allowed'
      });
    });

    h('div', () => {
      spec({
        attr: {
          class: 'control-panel__prev'
        }
      });

      Control({
        variant: 'ghost',
        size: 'default',
        icon: 'back'
      });
    });

    h('div', () => {
      spec({
        attr: {
          class: 'control-panel__play'
        }
      });

      Control({
        variant: 'primary',
        size: 'default',
        icon: 'pause'
      });
    });

    h('div', () => {
      spec({
        attr: {
          class: 'control-panel__next'
        }
      });

      Control({
        variant: 'ghost',
        size: 'default',
        icon: 'forward'
      });
    });

    h('div', () => {
      spec({
        attr: {
          class: 'control-panel__like'
        }
      });

      Control({
        variant: 'ghost',
        size: 'small',
        icon: 'favourite'
      });
    });

    h('div', () => {
      spec({
        attr: {
          class: 'control-panel__shuffle'
        }
      });

      Control({
        variant: 'ghost',
        size: 'small',
        icon: 'shuffle'
      });
    });

    h('div', () => {
      spec({
        attr: {
          class: 'control-panel__settings'
        }
      });

      Control({
        variant: 'ghost',
        size: 'small',
        icon: 'settings'
      });
    });

    h('div', () => {
      spec({
        attr: {
          class: 'control-panel__repeat'
        }
      });

      Control({
        variant: 'ghost',
        size: 'small',
        icon: 'repeat'
      });
    });
  });
}
