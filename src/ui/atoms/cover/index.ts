import {h} from 'effector-dom';
import './index.scss';

type CoverProperties = {
  src: string,
  placement: 'player' | 'track-list',
}

export const Cover = ({ src, placement }: CoverProperties) => {
  h('img', {
    attr: {
      class: 'cover',
      src,
    },
    data: {
      placement
    }
  });
};