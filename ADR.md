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
