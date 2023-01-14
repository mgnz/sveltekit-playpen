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
		// documentation (sveltejs/adapter-static) : https://github.com/sveltejs/kit/tree/master/packages/adapter-static#sveltejsadapter-static
		adapter: adapter({
			// documentation : https://github.com/sveltejs/kit/tree/master/packages/adapter-static#spa-mode
			// setting 'SPA Mode'
			// - setting fallback; and strict mode (to check for any precompile pages)

			fallback: 'index.html',
			strict: true,
		}),
		// documentation : https://github.com/sveltejs/kit/tree/master/packages/adapter-static#github-pages
		// setting the name of the repo for where the static site builds too 
		paths: { base: dev ? '' : '/sveltekit-playpen' }
	}
};