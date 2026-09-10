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
- Subtítulo: "La IA ya cambió las reglas. La hacemos parte de cómo trabaja cada área de tu empresa, con resultados que se ven."
- CTA: "Hablemos"

**Qué hacemos:**
- "Las herramientas correctas para tu empresa" — "Seleccionamos e implementamos las herramientas de IA que mejor encajan con tu operación. No forzamos un ecosistema: elegimos lo que funciona para vos."
- "Un plan que no para tu operación" — "Diseñamos un plan de adopción por área, un paso a la vez. Tu empresa sigue trabajando mientras se transforma."
- "Sabemos qué transformar primero" — "Auditamos tu organización para encontrar dónde la IA genera más valor, en qué orden y con qué resultados."
- "Tu equipo aprende haciendo" — "Sesiones prácticas por área, con casos reales. Tu equipo sale usando IA, no escuchando teoría."

**Cómo trabajamos:**
- "Un paso a la vez: cada paso construye sobre lo que tu equipo ya sabe. Sin saltos bruscos ni parálisis."
- "Área por área, no todo a la vez: transformamos un área a la vez. Tu empresa sigue operando mientras cambia."
- "Acompañamiento real: estamos con vos en cada paso de la implementación, no solo en las sesiones."
- "Resultados que se ven: cada área termina con flujos automatizados funcionando. No promesas: procesos reales."

**Para quién:**
- "Para compañías de hasta 300 empleados. Si tu equipo trabaja con información, comunicaciones o procesos, la IA ya puede transformar cómo opera."

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
- Subtitle: "AI has changed the rules. We make it part of how every area of your company works, with visible results."
- CTA: "Let's talk"

**What we do:**
- "The right tools for your company" — "We select and implement the AI tools that best fit your operation. No forced ecosystem — we choose what works for you."
- "A plan that doesn't stop your operation" — "We design an adoption plan by area, one step at a time. Your company keeps running while it transforms."
- "We know what to transform first" — "We audit your organization to find where AI creates the most value, in what order, and with what results."
- "Your team learns by doing" — "Hands-on sessions by area, with real cases. Your team leaves using AI, not listening to theory."

**How we work:**
- "One step at a time: each step builds on what your team already knows. No sudden leaps, no paralysis."
- "Area by area, not all at once: we transform one area at a time. Your company keeps running while it changes."
- "Real support: we're with you at every step of implementation, not just in sessions."
- "Visible results: every area ends with automated workflows running. Not promises: real processes."

**Who it's for:**
- "For companies of up to 300 employees. If your teams work with information, communication or processes, AI can already transform how you operate."

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
