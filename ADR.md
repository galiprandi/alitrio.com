# ADR.md

## ADR-001 — Landing estática bilingüe en una única ruta

**Status:** Accepted  
**Date:** 2026-08-27

### Context

La landing se despliega en GitHub Pages y debe ofrecer contenido en español e inglés sin páginas adicionales ni backend.

### Decision

Implementar ambas variantes de contenido y el selector de idioma dentro de `src/pages/index.astro`. El formulario abrirá un correo prellenado mediante `mailto:contact@alitrio.com`.

### Consequences

La página no requiere infraestructura adicional. El estado de entrega del correo no puede confirmarse desde el sitio y el cambio de idioma se resuelve del lado del cliente.

## ADR-004 — Copy en registro de resultados, SEO y accesibilidad

**Status:** Accepted  
**Date:** 2026-09-08

### Context

La landing original usaba un registro técnico ("licenciamiento", "complejidad incremental") dirigido a un lector que conoce el stack. El ICP confirmado es CEO/fundador de SMB LATAM no técnico, cuyo dolor principal es FOMO (miedo a quedarse atrás). El SEO on-page era mínimo (title y meta description genéricos, sin hreflang, canonical, structured data ni sitemap). El signal-teal (#0b9292) no cumplía WCAG AA para texto small (3.42:1 sobre paper).

### Decision

1. **Copy:** reescribir títulos de servicios, bullets del método y subtítulo del hero a registro de resultados, anclando en el dolor FOMO del CEO. Mantener el eslogan de marca.
2. **SEO:** ES como idioma default con EN alternate (hreflang es/en/x-default), canonical, OG/Twitter cards, JSON-LD ProfessionalService, robots.txt y sitemap.xml. Title y meta optimizados para brand-building "AI Company" + keywords categoriales.
3. **Accesibilidad:** oscurecer signal-teal de #0b9292 a #0a7172 (5.23:1 sobre paper) para cumplir WCAG AA en texto small. Oscurecer placeholder de #61777b a #55727c (4.63:1).

### Consequences

El copy es más directo y orientado a resultados, pero pierde parte del lenguaje técnico que podía transmitir expertise a un lector sofisticado. El SEO on-page está completo para una landing de una sola página. El cambio de token de color es retroactivo en todo el design system.

## ADR-002 — Formulario de contacto con Web3Forms + Infisical OIDC

**Status:** Accepted  
**Date:** 2026-09-08

### Context

El `mailto:` de ADR-001 no entrega de forma confiable: requiere un cliente de correo configurado en el dispositivo del usuario y no permite confirmar la entrega. El sitio es estático (GitHub Pages), por lo que no hay backend para procesar formularios.

### Decision

1. **Web3Forms** como endpoint del formulario (`https://api.web3forms.com/submit`). El formulario hace un `fetch` async con JSON y muestra estados de sending/success/error al usuario. Se incluye un honeypot (`botcheck`) para anti-spam.
2. **Infisical** para gestionar la access key de Web3Forms (`WEB3FORMS_ACCESS_KEY`) en el entorno `prod` del proyecto `alitrio.com`.
3. **GitHub Actions OIDC** para que el workflow de deploy se autentique a Infisical sin tokens estáticos, usando una Machine Identity con OIDC Auth configurada para el repo `galiprandi/alitrio.com`.
4. La access key se lee en build-time vía `import.meta.env.WEB3FORMS_ACCESS_KEY`, con fallback hardcoded para desarrollo local.

### Consequences

- El formulario entrega a `galiprandi@gmail.com` sin requerir un cliente de correo del usuario.
- No hay tokens estáticos en GitHub Secrets; la autenticación es efímera vía OIDC.
- La access key de Web3Forms es visible en el HTML del sitio (por diseño de Web3Forms); la rotación se gestiona desde Infisical.
- El spam protection de Web3Forms se configuró en `Basic` (no `Strict`) para evitar falsos positivos en submissions legítimas.

## ADR-003 — Cloudflare Email Routing para contact@alitrio.com

**Status:** Accepted  
**Date:** 2026-09-08

### Context

Se necesita una dirección profesional `contact@alitrio.com` que redirija los emails a `galiprandi@gmail.com`, sin necesidad de un mailbox propio o Google Workspace.

### Decision

Usar **Cloudflare Email Routing** (gratis) para reenviar `contact@alitrio.com` → `galiprandi@gmail.com`. Cloudflare gestiona los MX records del dominio automáticamente.

### Consequences

- Los emails enviados a `contact@alitrio.com` llegan a `galiprandi@gmail.com`.
- No se puede enviar *como* `contact@alitrio.com` desde Gmail (solo recibir). Para enviar, se necesitaría Google Workspace o SMTP propio.
- Los DNS records de email están locked por Cloudflare.
