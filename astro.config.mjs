// @ts-check
import { defineConfig } from 'astro/config';
import content from '@astrojs/content';

// https://astro.build/config
export default defineConfig({
    site: 'https://lordjirix.netlify.app/',
    base: '/',
    integrations: [content()],
});
