import {PlayerEvents} from './features/player';

declare const externalAPI: any;

const _player = externalAPI;

_player.on(_player.EVENT_READY, () => {
  sendEvent([PlayerEvents.IsReady])
});

_player.on(_player.EVENT_STATE, () => {
  sendEvent([PlayerEvents.StateChanged])
});

_player.on(_player.EVENT_TRACK, () => {
  sendEvent([
    PlayerEvents.TrackChanged,
    _player.getCurrentTrack(),
  ])
});

_player.on(_player.EVENT_ADVERT, () => {
  sendEvent([PlayerEvents.Advertising])
});

_player.on(_player.EVENT_CONTROLS, () => {
  sendEvent([
    PlayerEvents.ControlsChanged,
    _player.getControls(),
  ])
});

_player.on(_player.EVENT_VOLUME, () => {
  sendEvent([
    PlayerEvents.VolumeChanged,
    _player.getVolume(),
  ])
});

_player.on(_player.EVENT_PROGRESS, () => {
  sendEvent([
    PlayerEvents.ProgressChanged,
    _player.getProgress(),
  ])
});

function sendEvent([type, data]: [keyof typeof PlayerEvents, any?]) {
  window.postMessage({
    sender: 'communicator',
    event: {type, data}
  }, '/')
}
