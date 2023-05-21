<script>
  import { onMount } from 'svelte';

  const redirectTo = 'https://dsc.gg/itznesbro';

  onMount(() => {
    window.location.replace(redirectTo);
  });
</script>

<div class="flex flex-col items-center justify-center h-screen bg-black text-white">
  <p class="text-lg md:text-xl lg:text-2xl text-center mb-4">
    Redirecting to <span class="font-bold">{redirectTo}</span>...
  </p>
  <p class="text-center">
    If you haven't been redirected, click 
    <a class="text-blue-500 underline" href="${redirectTo}">
      this link
    </a>.
  </p>
</div>

<style>
  body {
    background-color: black;
  }
  p {
    color: white;
  }
</style>