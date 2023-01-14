// import { dev } from '$app/environment';

// // client side
// // Ordinarily, SvelteKit hydrates your server-rendered HTML into an interactive
// // client-side-rendered (CSR) page. Some pages don't require JavaScript at all —
// // many blog posts and 'about' pages fall into this category. In these cases you can disable CSR:
// // Documentation: https://kit.svelte.dev/docs/page-options#csr
// export const csr = dev;


// // if you want to generate a static html file
// // for your page.
// // Documentation: https://kit.svelte.dev/docs/page-options#prerender
export const prerender = false;

// // server-side-rendering
// // true : content will be rendered on the server
// // false : turns your app into a spa
// // Documentation: https://kit.svelte.dev/docs/page-options#ssr
export const ssr = false;

// // How to manage the trailing slashes in the URLs
// // the URL for about page witll be /about with 'ignore' (default)
// // the URL for about page witll be /about/ with 'always'
// // https://kit.svelte.dev/docs/page-options#trailingslash
// export const trailingSlash = 'ignore';

