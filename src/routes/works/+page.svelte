<script>
	import { projects } from '../works';

	export let title = 'ItzNesbro - Works';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="container mx-auto py-10">
	<h1 class="text-4xl font-bold mb-10 ml-5 underline text-white">My Works</h1>
	<div class="grid grid-cols-1 md:p-6 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each projects as project}
			<div class="bg-white rounded-lg shadow-lg p-6">
				<h2 class="text-xl font-bold mb-2">{project.name}</h2>
				<p class="text-gray-500 mb-4">{project.description}</p>
				<a
					href="{project.url}"
					target="_blank"
					rel="noopener noreferrer"
					class="text-blue-500 hover:text-blue-700 mt-2"
				>
					GitHub Repo
				</a>
			</div>
		{/each}
	</div>
</div>
