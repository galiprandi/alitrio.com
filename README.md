# alitrio.com

Landing page de **ALITRIO** — consultora tecnológica especializada en transformación organizacional con IA.

## Stack
- [Astro](https://astro.build) — static site generator
- GitHub Pages — hosting
- Custom domain: `alitrio.com` (Cloudflare Registrar → Cloudflare DNS → GitHub Pages)

## Desarrollo local
```bash
npm install
npm run dev
```

## Deploy
Automático vía GitHub Actions al pushear a `main`.
El sitio se sirve en `https://galiprandi.github.io/alitrio.com/` hasta que se configure el custom domain `alitrio.com` en Settings → Pages.

## Configuración del custom domain
1. En Cloudflare DNS, apuntar:
   - `@` A records → IPs de GitHub Pages (`185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`)
   - `www` CNAME → `galiprandi.github.io`
2. En GitHub repo Settings → Pages → Custom domain → `alitrio.com`
3. En `astro.config.mjs`, remover `base: '/alitrio.com'` una vez que el custom domain esté activo.
