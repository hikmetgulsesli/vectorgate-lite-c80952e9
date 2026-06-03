---
name: VectorGate Lite
colors:
  surface: '#131313'
  surface-dim: '#131313'
  surface-bright: '#3a3939'
  surface-container-lowest: '#0e0e0e'
  surface-container-low: '#1c1b1b'
  surface-container: '#201f1f'
  surface-container-high: '#2a2a2a'
  surface-container-highest: '#353534'
  on-surface: '#e5e2e1'
  on-surface-variant: '#b9caca'
  inverse-surface: '#e5e2e1'
  inverse-on-surface: '#313030'
  outline: '#849495'
  outline-variant: '#3a494a'
  surface-tint: '#00dce5'
  primary: '#e9feff'
  on-primary: '#003739'
  primary-container: '#00f5ff'
  on-primary-container: '#006c71'
  inverse-primary: '#00696e'
  secondary: '#ffabf3'
  on-secondary: '#5b005b'
  secondary-container: '#fe00fe'
  on-secondary-container: '#500050'
  tertiary: '#efffe4'
  on-tertiary: '#053900'
  tertiary-container: '#3bff17'
  on-tertiary-container: '#107100'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#63f7ff'
  primary-fixed-dim: '#00dce5'
  on-primary-fixed: '#002021'
  on-primary-fixed-variant: '#004f53'
  secondary-fixed: '#ffd7f5'
  secondary-fixed-dim: '#ffabf3'
  on-secondary-fixed: '#380038'
  on-secondary-fixed-variant: '#810081'
  tertiary-fixed: '#79ff5b'
  tertiary-fixed-dim: '#2ae500'
  on-tertiary-fixed: '#022100'
  on-tertiary-fixed-variant: '#095300'
  background: '#131313'
  on-background: '#e5e2e1'
  surface-variant: '#353534'
typography:
  display-xl:
    fontFamily: Space Grotesk
    fontSize: 72px
    fontWeight: '700'
    lineHeight: 80px
    letterSpacing: -0.04em
  display-lg:
    fontFamily: Space Grotesk
    fontSize: 48px
    fontWeight: '700'
    lineHeight: 56px
    letterSpacing: -0.02em
  headline-md:
    fontFamily: Space Grotesk
    fontSize: 24px
    fontWeight: '500'
    lineHeight: 32px
    letterSpacing: 0.05em
  body-lg:
    fontFamily: Geist
    fontSize: 18px
    fontWeight: '400'
    lineHeight: 28px
  body-md:
    fontFamily: Geist
    fontSize: 16px
    fontWeight: '400'
    lineHeight: 24px
  label-sm:
    fontFamily: Geist
    fontSize: 12px
    fontWeight: '600'
    lineHeight: 16px
    letterSpacing: 0.1em
spacing:
  unit: 4px
  container-padding: 24px
  gutter: 12px
  hud-safe-area: 32px
---

## Brand & Style

The design system is engineered for a high-octane, precision-based arcade experience. It targets gamers who value speed, clarity, and a futuristic aesthetic. The visual direction is a fusion of **Minimalist Glassmorphism** and **High-Contrast Neon**, evoking the feeling of a digital frontier or a high-end flight HUD.

The UI should feel electrified and responsive. Every element is designed to minimize cognitive load during gameplay while maximizing visual impact through light emission and sharp geometry. The goal is a "Zero-G" interface—weightless, luminous, and technologically advanced.

## Colors

The palette is anchored in a "Deep Space" charcoal background to allow the neon accents to achieve maximum perceptual brightness.

- **Primary (Cyan #00F5FF):** Used for critical gameplay paths, player indicators, and primary actions.
- **Secondary (Magenta #FF00FF):** Reserved for hazards, gates, and high-tier rewards.
- **Tertiary (Lime #39FF14):** Utilized for health, energy levels, and "system-ready" states.
- **Neutrals:** The background uses #0A0A0A for the void, while #141414 provides a subtle lift for HUD containers.

All accent colors should be implemented with an outer glow (bloom) effect to simulate neon gas discharge.

## Typography

This design system utilizes a dual-font strategy. **Space Grotesk** provides a technical, futuristic edge for display numbers, scores, and mission headers. Its geometric construction mirrors the "vector" theme of the game. 

**Geist** is used for all functional UI, settings, and instructional text. Its monospaced-influenced proportions ensure data remains legible and aligned even as values rapidly shift. 

- Use **Uppercase** for all labels and button text to maintain a rigid, military-tech feel.
- Apply a subtle `text-shadow` in the primary color to "Display" roles to simulate screen bleed.

## Layout & Spacing

The layout follows a **Fixed HUD** model surrounding a fluid game viewport. To maximize the playfield, all UI elements are pushed to the periphery within a defined "Safe Area."

- **Grid:** A tight 4px baseline grid ensures precision. 
- **HUD Alignment:** Top-left for status/health, top-right for score/multiplier, and bottom-center for situational alerts or cooldowns.
- **Transitions:** Use rapid, linear eases for layout shifts to reflect the high-energy nature of the game.
- **Mobile:** On small screens, HUD elements collapse into the corners, reducing font sizes by 20% and switching to icon-only buttons where possible.

## Elevation & Depth

Depth is achieved through **Glassmorphism** rather than traditional shadows. 

1.  **Base Layer:** Solid #0A0A0A.
2.  **Mid Layer (Game World):** Dynamic vectors and particles.
3.  **Top Layer (HUD):** Background blur (20px) with a semi-transparent fill (rgba(20, 20, 20, 0.6)). 
4.  **Stroke:** Surfaces are defined by 1px "Light-Leak" borders. Use a gradient stroke (Primary color to transparent) to suggest a light source from the corner of the element.

No drop shadows are used; instead, use "Outer Glow" (bloom) on active components to indicate they are emitting light onto the surface behind them.

## Shapes

The design system employs **Sharp (0px)** roundedness. Every element—buttons, containers, and progress bars—uses 90-degree angles to reinforce the "Vector" and "Grid" aesthetic. 

For specialized "Gate" elements within the game, use 45-degree chamfered corners to distinguish them from standard UI containers.

## Components

- **Buttons:** Low-profile, rectangular boxes. Default state is a 1px Cyan border with no fill. Hover state triggers a solid Cyan fill with Black text and a heavy bloom effect.
- **Progress Bars (Health/Energy):** Segmented "cell" bars. As health decreases, segments flicker. Use Tertiary (Lime) for health, switching to Secondary (Magenta) when below 20%.
- **HUD Chips:** Small, translucent modules in the corners. They should have a "scanning" scanline overlay effect (2px repeating linear gradient).
- **Overlays (Pause/Settings):** Full-screen 40px backdrop blur with a 60% opacity black tint. Text should fade in with a slight "glitch" or "chromatic aberration" effect.
- **Input Fields:** Minimalist underlines in Neutral Dim. Upon focus, the line expands into a full rectangle with a Primary Cyan glow.
- **Score Multiplier:** Floating display text that pulses in scale and intensity synced with the game's BPM.