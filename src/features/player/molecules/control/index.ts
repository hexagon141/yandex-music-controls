import {h, spec} from 'effector-dom';
import {Icon} from '../../../../ui/atoms';
import './index.scss';

type Control = {
  variant: 'primary' | 'ghost',
  size: 'default' | 'small',
  icon: string,
}

export function Control({ variant, size, icon }: Control) {
  h('button', () => {
    spec({
      attr: {
        class: 'control',
      },
      data: {
        variant,
        size
      }
    });

    Icon({name: icon});
  })
}