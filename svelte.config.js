// import adapter from '@sveltejs/adapter-auto';
import adapter from '@sveltejs/adapter-static';

//import { preprocess  } from '@sveltejs/kit/vite';
import preprocess from 'svelte-preprocess'

const dev = process.env.NODE_ENV === 'development';

/** @type {import('@sveltejs/kit').Config} */
export default {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors

	preprocess: [preprocess()],

	kit: {
		// target: '#svelte',
		adapter: adapter({
			// default options are shown. On some platforms
			// these options are set automatically — see below
			// pages: 'build',
			// assets: 'build',
			fallback: 'index.html',
			// precompress: false,
			strict: true,
		}),
		// paths: { base: dev ? '' : '/test_template' }
	}
};