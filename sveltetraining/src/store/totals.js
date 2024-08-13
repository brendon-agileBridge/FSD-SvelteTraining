import { writable } from 'svelte/store';

export const total = writable(0);

export const pageAlreadyRendered = writable(false);
export function incrementBy(val) {
  total.update(n => n + val);
  
}
