import {Cover} from '../../../../ui/atoms';
import {$track} from '../../model/interface';

export function TrackCover() {
  Cover({
    src: $track.map(track => track?.cover ?? ''),
    placement: 'player'
  })
}