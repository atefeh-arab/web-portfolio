---
name: ui-design
description: Comprehensive UI/UX design systems guidelines and component specifications for Apple HIG, Samsung One UI, Google Material 3 (Material You), Microsoft Fluent, IBM Carbon, and Shopify Polaris. Use this skill when designing, reviewing, or implementing UI components, web pages, and mobile applications.
---

# 🎨 Universal UI Design Systems Skill Guide

This skill provides comprehensive, production-ready design principles, layout rules, color tokens, typography scales, elevation systems, and component implementation guides inspired by top-tier global design systems (Apple HIG, Samsung One UI, Google Material 3, Microsoft Fluent, IBM Carbon, Shopify Polaris).

---

## 1. 🍎 Apple Human Interface Guidelines (HIG)

### Core Philosophy
* **Clarity:** Legible text at every size, precise and lucid icons, unobtrusive adornments.
* **Deference:** The interface defers to user content without competing with it.
* **Depth:** Distinct visual layers and realistic physical motion convey hierarchy and spatial awareness.

### Visual & Technical Specifications
* **Border Radii:** Continuous Squircle corners (`smooth-corners` / `border-radius: 18px-24px` for cards, `12px-16px` for controls, `9999px` for pills/capsules).
* **Materials & Translucency:**
  * Ultra-thin material (`backdrop-blur-md bg-white/70 dark:bg-black/60`).
  * Thin, Regular, Thick materials with high-definition vibrancy filters.
* **Typography:**
  * Primary: SF Pro / SF Pro Display / SF Pro Text / Inter / -apple-system.
  * Hierarchies: Large Title (34pt Bold), Title 1 (28pt), Title 2 (22pt), Title 3 (20pt), Headline (17pt Semi-bold), Body (17pt Regular), Callout (16pt), Subhead (15pt), Footnote (13pt), Caption 1 (12pt).
* **Color System:**
  * System Blue: `#007AFF`, System Purple: `#AF52DE`, System Green: `#34C759`, System Red: `#FF3B30`
  * System Gray: 6 tonal levels (`#8E8E93` to `#E5E5EA`)
* **Motion & Interactions:** Spring animations with subtle bounce (`damping: 25`, `stiffness: 300`).

---

## 2. 📱 Samsung One UI

### Core Philosophy
* **One-Handed Usability:** Focus on reachability by dividing viewports into clear vertical zones.
* **Viewing Area (Top 40-50%):** Large headers, informational summaries, zero interactive taps required.
* **Interaction Area (Bottom 50-60%):** Interactive buttons, search fields, lists, and action items reachable with thumb.

### Visual & Technical Specifications
* **Border Radii:** Rounded cards with generous radius (`24px - 32px`).
* **Grouping & Containers:** Nested round cards on a soft off-white/gray canvas (`bg-neutral-100` / `bg-neutral-900`).
* **Visual Density:** High spacing between interactive items to prevent mis-clicks (min `48px` tap target, `56px` optimal).
* **Typography:** Samsung Sans / One UI Gothic / Inter (Heavy titles, bold category badges).
* **Colors & Contrast:** High contrast accents, vivid primary blue (`#1868DF`), soft category pastels.

---

## 3. 🎨 Google Material Design 3 (Material You / M3)

### Core Philosophy
* **Dynamic Color & Personalization:** User wallpapers generate a tonal palette dynamically.
* **Expressive & Adaptive:** Scales fluidly across mobile, tablet, foldable, and desktop web.

### Visual & Technical Specifications
* **Tonal Color Roles:**
  * `Primary` / `On-Primary` / `Primary Container` / `On-Primary Container`
  * `Secondary` / `On-Secondary` / `Secondary Container` / `On-Secondary Container`
  * `Surface` / `On-Surface` / `Surface Variant` / `On-Surface Variant` / `Outline`
* **Elevation & Depth:**
  * Elevation Level 0 to 5 created primarily with **Tonal Surface Tinting** rather than heavy drop shadows.
* **Shapes & Corners:**
  * Extra Small: `4px`
  * Small: `8px`
  * Medium: `12px` (Standard cards)
  * Large: `16px`
  * Extra Large: `28px` (FABs, Dialogs)
  * Full: `9999px` (Buttons, Chips, Search bars)
* **Components:** Floating Action Buttons (FAB), Navigation Rails, Bottom Sheets, Filter/Assist Chips.

---

## 4. 🪟 Microsoft Fluent Design System

### Core Philosophy
* **Light:** Illuminates interactions and creates focus (Reveal Highlight).
* **Depth:** Layering objects in a 3D Z-axis space (Elevation & Projection).
* **Motion:** Orchestrated animations that direct attention and explain relationships.
* **Material:** Mica (semi-transparent texture reflecting desktop background) & Acrylic (blur in-app overlay).
* **Scale:** Consistent across 2D screens, web, and XR/Mixed Reality.

### Visual & Technical Specifications
* **Materials:**
  * Mica Alt / Mica: `backdrop-filter: blur(30px) saturate(125%)`
  * Acrylic: Translucent overlay for flyouts, modals, and context menus.
* **Corners:** Subtle rounding (`4px` for nested, `8px` for standard controls, `12px` for top-level windows).
* **Elevation:** Layered borders with multi-stop drop shadows (`0 2px 4px rgba(0,0,0,0.08), 0 8px 16px rgba(0,0,0,0.12)`).
* **Typography:** Segoe UI Variable / Inter.

---

## 5. 🏢 Enterprise & Data Systems (IBM Carbon & Shopify Polaris)

### Core Philosophy
* **High Information Density:** Maximum screen real estate utility for data tables, metrics, and workflows.
* **Precision & Structure:** Strict 8pt / 16pt spatial grids with clear data hierarchy.
* **Accessibility (WCAG AAA):** Strict contrast minimums (4.5:1 for body, 3:1 for large text/icons).

### Visual & Technical Specifications
* **Borders & Corners:** Sharp or minimal radius (`0px` - `4px`).
* **Layouts:** Left vertical navigation drawer, sticky breadcrumbs, filter bars, split-pane detail views.
* **Data Presentation:** Fixed header tables with inline editing, batch actions, and expandable rows.

---

## 🛠️ Implementation Tokens & Tailwind Quick Reference

```css
/* Design Tokens Cheat Sheet */
:root {
  /* Apple Glass / Vibrancy */
  --apple-blur: blur(20px);
  --apple-bg: rgba(255, 255, 255, 0.72);
  --apple-radius: 20px;

  /* Samsung One UI */
  --oneui-card-radius: 28px;
  --oneui-tap-target: 56px;
  --oneui-bg-canvas: #f2f3f5;

  /* Material 3 Elevation 2 */
  --m3-surface-2: color-mix(in srgb, var(--m3-primary) 8%, var(--m3-surface));
  --m3-radius-xl: 28px;

  /* Fluent Mica */
  --fluent-border: 1px solid rgba(0, 0, 0, 0.08);
  --fluent-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
}
```

---

## 💡 How to Apply in Any Task
When the user asks to design or code a component:
1. **Identify the Target Style:** (Apple HIG, Samsung One UI, Material 3, Fluent, or Enterprise).
2. **Apply Spatial Rules:** Respect thumb zones for mobile, strict grids for enterprise, or airy spacing for Apple.
3. **Use Accurate Tokens:** Typography scale, radii, blur filters, and accessible color palettes.
4. **Deliver Complete UI:** Write clean, modular, responsive code (React, Vue, HTML/Tailwind CSS) adhering strictly to the chosen design system.