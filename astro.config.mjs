// @ts-check
import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';


// https://astro.build/config
export default defineConfig({
	redirects: {
    '/short/linkedin': 'https://www.linkedin.com/in/tucker-snow-8672ab20a/',
		'/short/github': 'https://github.com/t7snow',
		'/short/twitter': 'https://x.com/t7snow'
  },
	integrations: [tailwind()],
});