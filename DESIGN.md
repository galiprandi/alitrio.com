---
name: Alitrio
description: Landing editorial para la transformación organizacional con IA.
colors:
  paper: "#f5f3ed"
  ink: "#102633"
  signal-teal: "#0a7172"
  active-teal: "#147e83"
  muted-ink: "#46606a"
  mint-highlight: "#aee8d7"
  rule: "#b8c2bd"
  soft-rule: "#8ba19e"
  field: "#e2e9e3"
  diagram-light: "#d9ebe2"
  diagram-mid: "#add8d5"
  diagram-deep: "#77bbb5"
typography:
  display:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(3.35rem, 6.8vw, 5rem)"
    fontWeight: 700
    lineHeight: 1.0
    letterSpacing: "-0.04em"
  headline:
    fontFamily: "DM Sans, sans-serif"
    fontSize: "clamp(2.1rem, 4vw, 3.5rem)"
    lineHeight: 1.05
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 500
    lineHeight: 1.7
  label:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 800
    letterSpacing: "0.04em"
rounded:
  pill: "99px"
  square: "0"
spacing:
  page-min: "1.25rem"
  compact: "0.8rem"
  control-y: "1rem"
  control-x: "1.25rem"
  section-y: "clamp(5rem, 11vw, 10rem)"
  page-x: "clamp(1.25rem, 8vw, 9rem)"
components:
  action:
    backgroundColor: "{colors.ink}"
    textColor: "#fff"
    rounded: "{rounded.square}"
    padding: "{spacing.control-y} {spacing.control-x}"
  action-hover:
    backgroundColor: "{colors.active-teal}"
    textColor: "#fff"
    rounded: "{rounded.square}"
  language-switch:
    backgroundColor: "transparent"
    textColor: "{colors.muted-ink}"
    rounded: "{rounded.pill}"
    padding: "0.45rem 0.6rem"
---

# Design System: Alitrio

## Overview

**Creative North Star: "Cambio estructurado"**

La landing hace legible la adopción de IA como un sistema operativo deliberado: papel soleado, tinta profunda, estructura cobalt-azulada y señales verdes minerales. La composición editorial usa campos abiertos, reglas finas y un diagrama de transformación en lugar del hero genérico de consultoría IA.

La jerarquía es directa y serena: titulares grandes, texto funcional contenido y bloques de información ordenados como un proceso. El resultado debe sentirse práctico, técnico y humano, nunca futurista ornamental ni promocionalmente estridente.

**Key Characteristics:**

- Campos claros de alta respiración y líneas de regla como estructura.
- Contraste de tinta profunda y verde señal reservado para acción, progreso y énfasis.
- Tipografía sans editorial, compacta en titulares y legible en explicación.

## Colors

La paleta combina un fondo de papel cálido con tinta azul verdosa; los verdes minerales describen señal, avance y el mapa de cambio.

### Primary

- **Tinta operativa:** fondo de audiencias y CTA en reposo; sostiene el contraste principal.
- **Verde señal:** punto de marca, énfasis en “AI Company”, pasos, bordes activos y foco de campos.
- **Verde activo:** hover de acciones y contorno de foco global.

### Neutral

- **Papel cálido:** fondo general y texto claro sobre la banda oscura.
- **Tinta atenuada:** navegación, descripciones, estado de formulario y texto secundario.
- **Reglas suaves:** divisores de listas, formulario y mapa; estructuran sin crear tarjetas pesadas.
- **Campo pálido:** sección de método; separa etapas mediante superficie tonal, no sombra.

**The Signal-Not-Decoration Rule.** El verde se usa para estado, dirección y énfasis de transformación; la tinta domina el contenido y la acción primaria.

## Typography

**Display Font:** DM Sans, con fallback sans-serif.

**Body Font:** Manrope, con fallback system-ui sans-serif.

**Character:** DM Sans aporta una voz editorial firme y estrecha en titulares; Manrope mantiene la explicación, controles y navegación sobrios y claros.

### Hierarchy

- **Display:** titular hero en 700, `clamp(3.35rem, 6.8vw, 5rem)`, interlineado 1.0 y tracking -0.04em; limitar a 10ch.
- **Headline:** secciones en `clamp(2.1rem, 4vw, 3.5rem)`, interlineado 1.05 y tracking -0.03em; limitar a 15ch (20ch en audiencia). Contacto en `clamp(2.5rem, 4.5vw, 4rem)`.
- **Title:** servicios en DM Sans, `clamp(1.2rem, 2vw, 1.65rem)`, tracking -0.025em, interlineado 1.2.
- **Body:** Manrope medio, 1rem, interlineado 1.6–1.7; resúmenes a 58ch.
- **Label:** Manrope 800, 0.78rem, tracking 0.04em; las etiquetas operativas del mapa usan mayúsculas, 0.67–0.76rem y tracking 0.08em.

## Layout

El máximo de contenido es 1440px. Header y footer usan tres columnas; el hero se divide 1.15fr/.85fr y las secciones usan un padding vertical amplio (`clamp(5rem, 11vw, 10rem)`) y horizontal (`clamp(1.25rem, 8vw, 9rem)`). La sección de contacto es .75fr/1fr, los encabezados 1.1fr/.65fr y cada servicio 1fr/.8fr.

En 760px o menos, navegación se oculta y hero, contacto, encabezados, servicios y fila de formulario pasan a una sola columna; el método queda en dos columnas. En 440px o menos, el método pasa también a una columna y compacta su espacio interno. El hero deja de exigir altura mínima en móvil.

**The Open-Field Rule.** Mantener el ritmo de secciones y el espacio blanco; la densidad aparece en listas y procesos lineales, no en mosaicos de tarjetas.

## Elevation & Depth

El sistema es plano: no usa sombras. La profundidad se construye con bandas tonales, contraste de fondo, reglas de 1px y el desplazamiento de los bloques del mapa al interactuar. Los servicios insinúan foco con un lavado pálido, no con elevación.

## Shapes

La geometría es recta y editorial: CTA, campos, listas y diagrama no llevan radio. Solo el selector de idioma es una cápsula (`99px`) para agrupar el control compacto. Los campos son transparentes y se definen por una única línea inferior; no introducir contenedores redondeados para formularios o contenidos.

## Components

### Navigation

Marca en DM Sans 800 a 1.35rem, con punto verde señal y tracking -0.04em. Los enlaces centrados usan Manrope 700 a 0.78rem en tinta atenuada. La navegación desaparece en móvil; el selector ES/EN permanece visible y expresa selección mediante fondo tinta y texto blanco con `aria-pressed`.

### Buttons

La acción es un rectángulo de tinta con texto blanco, icono lineal de 1rem y padding 1rem × 1.25rem. En hover cambia a verde activo y sube 2px durante 0.2s. CTA y submit comparten exactamente este patrón.

### Process Map

El mapa hero se encierra entre reglas horizontales y se divide en tres columnas: estado actual ("Hoy"), flecha de transformación y estado futuro ("AI Company"). A la izquierda, tres bloques separados y pálidos (Operación, Equipos, Procesos) representan las áreas desconectadas. A la derecha, los mismos tres bloques convergen y se solapan alrededor de un núcleo oscuro "IA" que los une, visualizando que la IA se vuelve central. En hover, los bloques del cluster se desplazan levemente (0.3–0.4rem) con una curva `cubic-bezier(.16,1,.3,1)` de 0.6s. Debe conservarse como explicación espacial del cambio, no como decoración abstracta.

### Service List

Los servicios son filas de dos columnas delimitadas por reglas. En hover reciben fondo pálido y 1rem de padding lateral; en móvil se apilan con una separación interna de 0.8rem. No convertirlos en cards con borde, radio o sombra.

### Method Steps

El método usa una grilla de cuatro pasos, cada uno con regla superior y texto secundario; en pantallas medianas baja a dos columnas y en estrechas a una. La numeración automática está visualmente suprimida: el contenido debe seguir funcionando sin depender de números decorativos.

### Inputs / Fields

Campos transparentes de ancho completo, Manrope 500 a 1rem y borde inferior suave. Foco elimina el outline nativo y cambia la línea a verde señal. Los requeridos mantienen validación HTML; el mensaje de estado tiene `aria-live="polite"` y reserva 1.4em para evitar saltos visuales.

### Accessibility and Motion

El salto al contenido aparece al recibir foco. Todo foco visible global usa un outline de 3px en verde activo con offset de 4px; esto también cubre enlaces y controles que no tengan un foco local. `hidden` retira del layout el idioma inactivo. Con `prefers-reduced-motion: reduce`, el scroll suave se desactiva y transiciones/animaciones se reducen prácticamente a cero.

## Do's and Don'ts

### Do:

- **Do** usar papel cálido, reglas de 1px y bloques tonales para organizar el contenido.
- **Do** reservar DM Sans para marca y jerarquía editorial, y Manrope para lectura y control.
- **Do** mantener las acciones rectangulares, oscuras y con iconografía lineal.
- **Do** conservar los cambios responsive de una sola columna y el soporte de foco, teclado, idiomas y movimiento reducido.

### Don't:

- **Don't** añadir sombras, glassmorphism, degradados luminosos ni un imaginario visual de IA genérico.
- **Don't** reemplazar filas de servicio, pasos o campos por tarjetas redondeadas.
- **Don't** usar el verde como color de relleno dominante ni como sustituto de la tinta para texto largo.
- **Don't** ocultar el foco visible, el enlace de salto o la preferencia de movimiento reducido.
