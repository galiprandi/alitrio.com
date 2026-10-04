# AGENTS.md

## Proyecto

Landing estática de Alitrio construida con Astro y desplegada en GitHub Pages.

## Restricciones

- Páginas públicas: `src/pages/index.astro`, `src/pages/cap.astro` y `src/pages/caso.astro` (caso de estudio + founder, bilingüe data-lang).
- Conservar las versiones en español e inglés en la misma experiencia.
- No incorporar backend ni dependencias sin una necesidad demostrable.
- El formulario de contacto usa Web3Forms (`https://api.web3forms.com/submit`). La access key se inyecta en build-time desde Infisical vía GitHub Actions OIDC; en local se usa el fallback hardcoded.
- Los secretos se gestionan en Infisical (proyecto `alitrio.com`). GitHub Actions se autentica con OIDC (Machine Identity), sin tokens estáticos.

## Documentación

- `BRAND.md`, `OFFER.md` y `LANDING.md` son la fuente de verdad de contenido.
- `PRODUCT.md` registra el contexto de producto.
- `DESIGN.md` registra el sistema visual implementado.
- `ADR.md` conserva decisiones arquitectónicas de forma append-only.
