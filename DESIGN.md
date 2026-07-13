---
name: Technical Educator Portfolio
description: A proof-led portfolio for a technical educator who turns complex subjects into practical learning.
colors:
  ink: "#17141D"
  surface: "#F7F7FA"
  violet-accent: "#6847E8"
  blue-signal: "#2D63E5"
  muted: "#625D69"
  line: "#D8D5DE"
  ink-on-dark: "#F1EFF4"
typography:
  display:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(3rem, 7vw, 6rem)"
    fontWeight: 650
    lineHeight: 0.96
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "clamp(2.375rem, 5.1vw, 4.5rem)"
    fontWeight: 650
    lineHeight: 1
    letterSpacing: "-0.03em"
  body:
    fontFamily: "Geist, Arial, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.5
  label:
    fontFamily: "Geist Mono, monospace"
    fontSize: "0.75rem"
    fontWeight: 600
    lineHeight: 1.2
    letterSpacing: "0.08em"
rounded:
  none: "0"
  control: "6px"
spacing:
  compact: "8px"
  control: "16px"
  section: "clamp(80px, 12vw, 160px)"
components:
  button-primary:
    backgroundColor: "{colors.blue-signal}"
    textColor: "#FFFFFF"
    rounded: "{rounded.control}"
    padding: "16px 21px"
  button-primary-hover:
    backgroundColor: "{colors.ink}"
  button-text:
    textColor: "{colors.ink}"
    padding: "0 0 5px"
  project-tag:
    textColor: "{colors.muted}"
    rounded: "{rounded.none}"
    padding: "4px 7px"
---

# Design System: Technical Educator Portfolio

## 1. Overview

**Creative North Star: "Практическая рабочая среда"**

This portfolio should feel like a technically mature workspace in which evidence is ready to inspect: selected programmes, source material, videos, and presentations lead the conversation. The interface is direct, calm, and purposeful—never a school template or a decorative personal-brand collage.

The visual system begins with one editorially placed Hero photograph in a dark studio setting. Its violet light informs the accent, but the photo remains the only image on the page. Most content is carried by typography, measured spacing, and proof-oriented project lists.

**Key Characteristics:**

- Dark Hero, light reading surfaces, and high-contrast technical structure.
- Blue is for actions; violet is a small, photo-linked signal.
- Flat surfaces and precise dividers replace decorative depth.
- Case studies and material links are the central proof mechanism.

## 2. Colors

The palette is a night-studio system: near-black ink and neutral light surfaces frame a controlled pair of cool signals drawn from the Hero lighting.

### Primary

- **Studio Ink** (`#17141D`): Hero background, dark sections, primary text, and high-confidence structural moments.
- **Signal Blue** (`#2D63E5`): Primary CTA, keyboard-focus rings, and the most important interactive state. This is the action color.

### Secondary

- **Photo Violet** (`#6847E8`): Sparse active markers, linked-project emphasis, and selected micro-details. Keep it below roughly 5% of a viewport; it is never a large surface or a gradient.

### Neutral

- **Clear Surface** (`#F7F7FA`): Main content background; a neutral off-white with no beige cast.
- **Measured Muted** (`#625D69`): Secondary copy and contextual metadata.
- **Fine Divider** (`#D8D5DE`): Borders, separators, and quiet structural lines.
- **Ink on Dark** (`#F1EFF4`): Readable text on Studio Ink.

**The Single-Signal Rule.** A component has one chromatic job: blue invites action; violet provides orientation. Never combine them in a gradient, glow, or competing pair of buttons.

## 3. Typography

**Display Font:** Geist, Arial, sans-serif

**Body Font:** Geist, Arial, sans-serif

**Label/Mono Font:** Geist Mono, monospace, used only for compact technical metadata and ordered material references.

**Character:** The system is compact and engineering-led, with a weighty grotesk hierarchy rather than a decorative display face. Long-form copy remains comfortable to scan and should not exceed 75ch.

### Hierarchy

- **Display** (650, `clamp(3rem, 7vw, 6rem)`, 0.96): Hero claim only; use balanced wrapping and never tighten below `-0.04em`.
- **Headline** (650, `clamp(2.375rem, 5.1vw, 4.5rem)`, 1): Major section claims.
- **Title** (650, 1.5–1.875rem, 1.1): Project and capability titles.
- **Body** (400, 1rem, 1.5): Descriptions, teaching context, and contact copy.
- **Label** (600, 0.75rem, 0.08em): Compact metadata only; short labels may use uppercase, prose may not.

**The Evidence-First Rule.** Headings make a specific claim; nearby supporting copy or a linked artefact must make that claim inspectable.

## 4. Elevation

This is a flat system. Depth comes from switching between Studio Ink and Clear Surface, plus one-pixel dividers—not from floating cards or ambient shadows. The Hero photograph can carry visual depth; UI components do not need to imitate it.

**The Flat-by-Default Rule.** Do not pair a border with a soft box shadow. Use a divider or a surface shift, never both as decoration.

## 5. Components

### Buttons

- **Shape:** restrained `6px` corners; no pills.
- **Primary:** Signal Blue with white text, `16px 21px` padding. It represents the Telegram contact action.
- **Hover / Focus:** darken to Studio Ink on hover; use a 2px Signal Blue focus ring with a visible offset.
- **Secondary:** text link with a Studio Ink underline; it routes to selected projects and proof.

### Project List

- **Structure:** a ruled list rather than repeated cards.
- **Content:** title, specific contribution, materials, and external proof link live in one scan-friendly row.
- **State:** a row may gain a very light violet-tinted background on hover; never a shadow.

### Tags

- **Style:** Fine Divider outline, Measured Muted text, square corners.
- **Purpose:** only compact technology or material metadata; not decorative category clouds.

### Navigation

- **Style:** restrained text navigation on the Hero surface.
- **State:** active/hover changes are limited to underline or opacity; keyboard focus remains explicit.
- **Mobile:** collapse links into an accessible menu control rather than simply hiding navigation.

### Hero Photograph

- **Use:** one portrait in the Hero, placed as a large vertical anchor rather than an avatar or a circular crop.
- **Treatment:** retain its dark technical setting and violet light; no decorative filters, frame collage, or second portrait elsewhere on the page.
- **Alt text:** describe the educator in a work setting, not merely the appearance of the photo.

## 6. Do's and Don'ts

### Do:

- **Do** use Studio Ink (`#17141D`) for the Hero and major confidence-building sections.
- **Do** reserve Signal Blue (`#2D63E5`) for the primary CTA and keyboard focus.
- **Do** use Photo Violet (`#6847E8`) as a sparse orienting detail inspired by the Hero lighting.
- **Do** make videos, presentations, and project links easy to inspect before asking for contact.
- **Do** preserve readable contrast, balanced headings, and reduced-motion alternatives.

### Don't:

- **Don't** use gradients, neon glows, glass surfaces, or purple-on-purple decoration; this palette must not read as generic AI-tech styling.
- **Don't** use childlike palettes, playful classroom typography, scrapbook/CV collages, oversized decorative illustration, or visual noise.
- **Don't** turn project proof into a grid of identical icon cards.
- **Don't** use large rounded cards, coloured side stripes, or border-plus-soft-shadow treatments.
- **Don't** add a second portrait to the contact block or reduce the positioning to frontend alone.
