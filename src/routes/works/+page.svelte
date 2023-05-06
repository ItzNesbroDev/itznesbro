<script>
	import { projects } from '../works';

	export let title = 'ItzNesbro - Works';
</script>

<svelte:head>
	<title>{title}</title>
	<meta name="viewport" content="width=device-width, initial-scale=1.0" />
</svelte:head>

<div class="container mx-auto py-10">
	<h1 class="text-4xl font-bold mb-10">My Works</h1>
	<div class="grid grid-cols-1 md:p-6 md:grid-cols-2 lg:grid-cols-3 gap-8">
		{#each projects as project (project.url)}
			<div class="bg-white rounded-lg shadow-lg overflow-hidden" key={project.url}>
				<div class="p-6">
					<h2 class="text-2xl font-bold mb-4">{project.name}</h2>
					<p class="text-gray-600">{project.description}</p>
					<a
						href={project.url}
						class="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 mt-4"
					>
						View Project
					</a>
				</div>
			</div>
		{/each}
	</div>
</div>
