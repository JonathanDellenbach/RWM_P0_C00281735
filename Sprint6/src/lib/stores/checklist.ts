import { writable, derived } from 'svelte/store';

export type Item = {
  id: string;
  label: string;
  done: boolean;
};

export const itemsStore = writable<Item[]>([]);

export const completedStore = derived(itemsStore, (items) =>
  items.filter((i) => i.done).length
);

export const percentStore = derived(itemsStore, (items) =>
  items.length
    ? Math.round((100 * items.filter((i) => i.done).length) / items.length)
    : 0
);
