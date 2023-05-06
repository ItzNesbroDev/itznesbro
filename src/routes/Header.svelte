<script>
	import { goto } from '$app/navigation';

	function handleWorksClick() {
		goto('/works');
	}

	function handleHomeClick() {
		goto('/');
	}
</script>

<header class="p-3 flex justify-between items-center text-white">
	<div class="mt-2">
		<a class="font-bold text-base mt-2 ml-5" id="home" on:click|preventDefault={handleHomeClick}
			>ItzNesbro</a
		>
	</div>
	<div class="mt-2 ml-2">
		<a class="font-bold text-base mr-5 underline" on:click|preventDefault={handleWorksClick}
			>works</a
		>
		<a class="font-bold text-base mr-5 underline" href="mailto:itznesbro@proton.me">contact</a>
	</div>
</header>
