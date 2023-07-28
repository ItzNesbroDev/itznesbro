import adapter from '@sveltejs/adapter-static';

const dev = process.argv.includes('dev');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			strict: false
		}),
		paths: {
			base: dev ? '' : process.env.BASE_PATH
		}
	}
};

export default config;
