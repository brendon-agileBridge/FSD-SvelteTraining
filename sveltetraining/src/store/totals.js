import { writable } from 'svelte/store';

const total = writable(0);

export function incrementBy(val) {
  total.update(n => n + val);
  
}

total.subscribe((value) => {
  if(value)
  alert(value);
});