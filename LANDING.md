# LANDING.md — Brief de la Landing Page

## Objetivo

Vidriera de Alitrio. Una sola página, moderna y bonita, que comunique qué hacemos y permita contactarnos. No es un sitio completo, es una landing con formulario de contacto al final.

## Páginas

Una sola página (`index.astro`) con el formulario de contacto integrado al final. No hay página de contacto separada.

## Idiomas

La landing debe estar disponible en inglés y español. Un selector de idioma en el header permite switchear. El contenido se mantiene en un solo archivo con ambas versiones o en dos archivos, según lo que sea más simple de implementar.

## Estructura de la landing

### 1. Hero

- Eslogan: **Te transformamos en una AI Company.**
- Subtítulo corto: una frase que explique qué hacemos (adaptación organizacional con IA)
- CTA: botón que scrollea al formulario de contacto

### 2. Qué hacemos

Resumen del Programa AI Company. 3-4 bullets o cards:

- Asesoría en licenciamiento e implementación de IA
- Plan de implementación
- Revisión y auditoría
- Capacitación

### 3. Cómo trabajamos

3-4 puntos breves:

- Complejidad incremental
- Enfoque por área
- Soporte durante la implementación
- Resultados medibles

### 4. Para quién

Una frase: compañías de hasta 300 empleados que quieren adaptarse a la era IA.

### 5. Formulario de contacto

Campos:
- Nombre
- Email
- Empresa
- Mensaje

Botón: "Enviar" / "Send"

El formulario puede postear a un endpoint simple (Formspree, Netlify Forms, o similar) o a un email directo. No requiere backend propio.

## Copy sugerida

### Español

**Hero:**
- Título: "Te transformamos en una AI Company."
- Subtítulo: "Adaptamos tu organización a la era IA, poniendo la inteligencia artificial en el centro de cada área."
- CTA: "Hablemos"

**Qué hacemos:**
- "Asesoría en licenciamiento e implementación de IA" — "Te ayudamos a elegir las herramientas y licencias que más convienen a tu empresa."
- "Plan de implementación" — "Diseñamos un plan de adopción a medida, por área, con complejidad incremental."
- "Revisión y auditoría" — "Auditamos tu organización para identificar qué procesos se pueden transformar."
- "Capacitación" — "Sesiones prácticas por área. Tu equipo aprende usando, no escuchando teoría."

**Cómo trabajamos:**
- "Complejidad incremental: cada paso introduce algo nuevo, partiendo de lo que tu equipo ya sabe."
- "Enfoque por área: transformamos área por área, no todo a la vez."
- "Soporte durante la implementación: te acompañamos en todo el proceso."
- "Resultados medibles: cada área tiene flujos automatizados funcionando al finalizar."

**Para quién:**
- "Compañías de hasta 300 empleados que quieren adaptarse a la era IA."

**Formulario:**
- Título: "Hablemos"
- Placeholder nombre: "Tu nombre"
- Placeholder email: "Tu email"
- Placeholder empresa: "Tu empresa"
- Placeholder mensaje: "Contanos qué necesitás"
- Botón: "Enviar"

### Inglés

**Hero:**
- Title: "We turn you into an AI Company."
- Subtitle: "We adapt your organization to the AI era, putting artificial intelligence at the center of every area."
- CTA: "Let's talk"

**What we do:**
- "AI licensing and implementation advisory" — "We help you choose the tools and licenses that best fit your company."
- "Implementation plan" — "We design a tailored adoption plan, by area, with incremental complexity."
- "Review and audit" — "We audit your organization to identify which processes can be transformed."
- "Training" — "Hands-on sessions by area. Your team learns by doing, not by listening to theory."

**How we work:**
- "Incremental complexity: each step introduces something new, building on what your team already knows."
- "Area-focused: we transform area by area, not all at once."
- "Support during implementation: we're with you throughout the process."
- "Measurable results: every area has automated workflows running by the end."

**Who it's for:**
- "Companies of up to 300 employees looking to adapt to the AI era."

**Form:**
- Title: "Let's talk"
- Placeholder name: "Your name"
- Placeholder email: "Your email"
- Placeholder company: "Your company"
- Placeholder message: "Tell us what you need"
- Button: "Send"

## Estilo visual

- Moderno, limpio, minimalista
- Mucho espacio en blanco
- Tipografía sans-serif, legible
- Paleta de colores: definir 2-3 colores principales (sugerencia: un color primario fuerte + neutros)
- Sin animaciones pesadas, solo transitions suaves
- Mobile-first, responsive
- Sin imágenes de stock genéricas de "IA" (circuitos, cerebros, robots). Mejor tipografía grande y composición limpia.

## Notas técnicas

- Stack: Astro (ya configurado en el repo)
- Hosting: GitHub Pages (ya configurado)
- Deploy: automático vía GitHub Actions al pushear a `main`
- El formulario no requiere backend: usar un servicio externo (Formspree, Netlify Forms, etc.) o un `mailto:` como fallback mínimo
- Custom domain: `alitrio.com` (pendiente configurar en Cloudflare + GitHub Pages)
