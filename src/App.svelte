<script lang="ts">
  // import svelteLogo from '@/assets/svelte.svg';
  import Counter from './components/Counter.svelte';
  import Counter2 from './components/Counter2.svelte';

</script>

<main>
  <div class="card">
    <Counter />
    <Counter2 />
  </div>
</main>

<style lang="scss">
  .card{
    background-color: red;
  }
</style>