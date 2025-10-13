<script lang="ts">
  import { itemsStore, completedStore, percentStore, type Item } from '$lib/stores/checklist';
  import ChecklistItem from './ChecklistItem.svelte';
  import { get } from 'svelte/store';
  import { onMount } from 'svelte';

  export let items: Item[] = []; //array passed from parent

  onMount(() => {
  if (get(itemsStore).length === 0) // Check if the itemsStore is empty
  {  
    itemsStore.set(items);
  }
});

  let submittedCompletedCount = 0; //completed count
  let submittedTotal = items.length; //total items
  let submittedPercentage = 0; //percentage completed

  // When user clicks Submit
  function handleSubmit() 
  {
    submittedCompletedCount = get(completedStore);
    submittedTotal = get(itemsStore).length;
    submittedPercentage = get(percentStore);
  }

  function handleItemChange(event: CustomEvent<{ id: string; done: boolean }>) 
  {
    itemsStore.update(items => items.map(item =>item.id === event.detail.id ? //update store with new items otherwise keep it unchanged
    { ...item, done: event.detail.done } : item));
}
  
</script>

<div>
  <p data-testid="progress-label">
    {submittedCompletedCount}/{submittedTotal} ({submittedPercentage}%)
  </p>

  {#each $itemsStore as item (item.id)}
    <ChecklistItem
  id={item.id}
  label={item.label}
  done={item.done}
  on:change={handleItemChange}
/>

  {/each}

  <button data-testid="submit-version" on:click={handleSubmit}>
    Submit version
  </button>
</div>
