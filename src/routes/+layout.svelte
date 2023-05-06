<script>
	import Header from './Header.svelte';
	import './styles.css';
</script>

<div class="bg-black">
	<Header />

	<main>
		<slot />
	</main>

</div>

