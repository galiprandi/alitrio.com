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
