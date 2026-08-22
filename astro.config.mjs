import { defineConfig } from 'astro/config';

// Custom domain alitrio.com configured in GitHub Pages + Cloudflare DNS.
export default defineConfig({
  site: 'https://alitrio.com',
  build: {
    format: 'directory',
  },
});
