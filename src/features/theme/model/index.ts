import {createEvent, createStore} from 'effector';

export const themeToggled = createEvent<void>();

export const $theme = createStore<'dark' | 'light'>('light');

$theme.on(themeToggled, theme => theme === 'light' ? 'dark' : 'light');