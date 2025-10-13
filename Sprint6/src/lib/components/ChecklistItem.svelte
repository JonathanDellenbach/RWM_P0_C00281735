<script lang="ts">
  //for creating custom events
  import { createEventDispatcher } from 'svelte';

  //exporting component props for checkist item,box and if its checked or not
  export let id: string;
  export let label: string;
  export let done: boolean;

  //this is to check which change has been dispatched.
  const dispatch = createEventDispatcher<{ change: { id: string; done: boolean } }>();

  //called when the checkbox is changed/ticked
  function handleChange(event: Event) {
    const target = event.target as HTMLInputElement;
    dispatch('change', { id, done: target.checked }); //pass the items id and the checked state
  }
</script>

<label>
  <input
    type="checkbox"
    bind:checked={done}
    on:change={handleChange}
  />
  {label}
</label>