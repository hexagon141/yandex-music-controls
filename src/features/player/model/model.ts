import {$muted, $playing, $repeat, $shuffle, $volume, muteToggled, pauseToggled, repeatToggled, shuffleToggled, volumeSetted} from './interface';

$playing.on(pauseToggled, playing => !playing);
$shuffle.on(shuffleToggled, shuffle => !shuffle);
$repeat.on(repeatToggled, repeat => !repeat);
$muted.on(muteToggled, muted => !muted);
$volume.on(volumeSetted, (_, volume) => volume);