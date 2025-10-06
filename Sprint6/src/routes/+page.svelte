<script lang="ts">
  import ChecklistProgress from '$lib/components/ChecklistProgress.svelte';
  
  let items = [
    { id: '1', label: 'Learn Svelte', done: false },
    { id: '2', label: 'Build a component', done: false },
    { id: '3', label: 'Test with Playwright', done: false },
    { id: '4', label: 'Test 2', done: false }
  ];
</script>

<h1 data-testid="title">Progress Checklist</h1>

<div style="margin-top: 2rem;">
  <h2>With Submit Button:</h2>
  <ChecklistProgress {items} />
</div>