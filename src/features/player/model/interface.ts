import {createEvent, createStore} from 'effector';

export enum PlayerEvents {
  IsReady = 'IsReady',
  StateChanged = 'StateChanged',
  TrackChanged = 'TrackChanged',
  Advertising = 'Advertising',
  ControlsChanged = 'ControlsChanged',
  VolumeChanged = 'VolumeChanged',
  ProgressChanged = 'ProgressChanged',
  NextTrack = 'NextTrack',
  PrevTrack = 'PrevTrack'
}

export enum PlayerMethods {
  TogglePause,
  ToggleShuffle,
  ToggleRepeat,
  ToggleMute,
  SetVolume,
  NextTrack,
  PrevTrack,
}

export const eventCalled = createEvent<{
  type: keyof typeof PlayerEvents
  data: any
}>();

export const pauseToggled = createEvent<MouseEvent>();
export const shuffleToggled = createEvent<MouseEvent>();
export const repeatToggled = createEvent<MouseEvent>();
export const muteToggled = createEvent<MouseEvent>();
export const volumeSetted = createEvent<number>();
export const nextTrack = createEvent<MouseEvent>();
export const prevTrack = createEvent<MouseEvent>();
export const trackChanged = createEvent();

export const $playing = createStore<boolean>(false);
export const $shuffle = createStore<boolean>(false);
export const $repeat = createStore<boolean>(false);
export const $muted = createStore<boolean>(false);
export const $volume = createStore<number>(0);
export const $progress = createStore<number>(41);

type Track = {
  artists: string[],
  name: string,
  cover: string
}

export const $track = createStore<Track | null>({
  artists: ['The Weeknd'],
  name: 'Blinding Lights',
  cover: 'https://avatars.yandex.net/get-music-content/2373979/a158c8f2.a.9300859-1/400x400'
});




