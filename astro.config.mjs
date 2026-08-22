import { defineConfig } from 'astro/config';

// GitHub Pages project page: site served from /alitrio.com/ until custom domain is set.
// When custom domain alitrio.com is configured in GitHub Pages settings, set site to
// 'https://alitrio.com' and remove base.
export default defineConfig({
  site: 'https://alitrio.com',
  base: '/alitrio.com',
  build: {
    format: 'directory',
  },
});
