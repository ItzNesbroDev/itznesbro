<script>
	import { onMount } from 'svelte';

	export let message = "Oops! The page you're looking for doesn't exist.";

	onMount(() => {
		const redirectButton = document.getElementById('redirectButton');

		redirectButton.addEventListener('click', () => {
			window.location.href = '/';
		});
	});
</script>

<main class="flex items-center justify-center h-screen bg-black text-white">
	<div class="text-center">
		<h1 class="text-4xl font-bold mb-4">404</h1>
		<p class="text-lg">{message}</p>
		<button
			id="redirectButton"
			class="mt-6 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-semibold rounded"
		>
			Go to Home
		</button>
	</div>
</main>
