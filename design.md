# 1st Reforger Korps — Design System

Pulled from the [Claude Design](https://claude.ai/design) project **"1st Reforger Korps Design System"**.

## Who this is for
1st Reforger Korps ("1RK") is a Discord community that runs realistic **Arma Reforger** milsim missions. The community leans into teamwork, immersion, and Cold-War-era believability — without being a strict real-world simulation. This system covers everything the Korps produces: mission paperwork (briefings, AARs, debriefs, SOPs), video overlays for session recordings/YouTube, Discord/social/favicon iconography, presentation decks, and the recruitment landing page / web forms.

## Visual foundations

**Palette is exactly these five colors — nothing else, ever.**

| Swatch | Name | Hex | Token | Usage |
|---|---|---|---|---|
| 🟩 | Primary Green | `#032819` | `--rk-primary-green` | copy, strokes, backgrounds, anything that would normally be black. Default text color and default dark surface. |
| 🟢 | Secondary Green | `#0ea073` | `--rk-secondary-green` | wherever primary green isn't enough contrast — hover states, links, secondary text/labels |
| 🟡 | Brand Accent Gold | `#ffbf4d` | `--rk-accent-gold` | the brand's accent color (CTAs, the logo background, gold highlights) — the **only** color used for full-bleed/highlighted backgrounds |
| 🔴 | Highlight Red | `#ff3e3e` | `--rk-highlight-red` | important stuff: badges, important boxes/outlines/headlines, important buttons, classification markings |
| ⬜ | Off-White | `#f9f7f2` | `--rk-off-white` / `--rk-paper-100` | backgrounds, and the negative/reverse font color on dark surfaces (used instead of pure white) |

Every other color token is a lighter/darker step of one of these five, generated with `color-mix(in oklch, …)` (hue-preserving) for hover/press states or backgrounds that need to be a touch lighter/darker. Never hand-pick a new hex — always derive from one of the five. Full token list: [`tokens/colors.css`](tokens/colors.css).

- **Never use black or pure white.** Where a design would reach for `#000`, use Primary Green instead. Where it would reach for pure white, use Off-White instead.
- **Primary Green is never a background.** Full-bleed cover/title moments (a deck's title slide, a video overlay frame, the landing-page hero) use Brand Accent Gold instead, with dark green for text/logos on top of it. Interior content pages use the paper background, with green/gold/red as accents only.
- **Type is one family, monospace.** Source Code Pro is the only typeface — used everywhere, in-lore and out. Big out-of-lore headlines just use Source Code Pro bold, uppercase, larger size, slightly wider letter-spacing — there is no second display face.
- **Backgrounds are flat paper or flat gold/green — no gradients, ever.** No camouflage/texture imagery motif. One exception: full-bleed video-overlay backgrounds (lower thirds, scene cards) can run a tinted-green texture at higher opacity as the literal background.
- **One separating cue, never two stacked.** A surface is set apart by EITHER flat color contrast OR a border/rule — never both, and never plus a shadow. No border, no shadow, no press/3D effect anywhere. Corners are square to almost-square (0–2px) — a stencil/stamp aesthetic, not a rounded consumer-app one. Exception: video-overlay elements get a soft drop shadow purely for legibility over live footage.
- **No rotation, ever.** Nothing tilts for effect.
- **Buttons are always solid fills** — no outline/ghost treatment. **Badges are the opposite** — always outlined, transparent fill, never solid.
- **Callouts are solid-fill, reserved for long content only** — a short one-line notice should be a plain sentence or a Badge instead.
- **Hover/press states stay flat, color-only.** Hover swaps to the next darker/lighter token in the same scale; no shadow, no scale/translate, no opacity fades.
- **No blur or translucency**, except one sanctioned use: `--border-on-dark`, a translucent hairline separating content on the dark-green surface.

## Type & spacing scales
Full token files: [`tokens/typography.css`](tokens/typography.css), [`tokens/spacing.css`](tokens/spacing.css), [`tokens/fonts.css`](tokens/fonts.css).

- Font: `Source Code Pro` (Google Fonts, weights 400/500/600/700)
- Type scale: `--text-xs` (12px) → `--text-5xl` (88px)
- Spacing scale: `--space-1` (4px) → `--space-10` (128px)
- Radius: effectively 0 everywhere (`--radius-none`/`--radius-sm` = 0px; `--radius-pill` = 999px for pill shapes only)

## Logo usage
- **Primary logo** (`assets/logo/1rk-primary.svg`) — the full wordmark — for the main brand-establishing placement on a page (hero, cover slide, header), always at 238px height in that role.
- **Monogram** (`assets/logo/1rk-mark.svg`) — the Я/K mark — the secondary mark, used once the primary wordmark is already established elsewhere on the same piece (footers, corner marks, favicons) at reduced size.
- Color variants: default dark-green (`1rk-mark.svg`, `1rk-primary.svg`), gold (`1rk-mark-gold.svg`), red (`1rk-mark-red.svg`, `1rk-primary-red.svg`), and a flattened mark-on-gold raster (`1rk-mark-on-gold.png`) for contexts needing a baked-in background.
- The boxed wordmark lockup (mark + "1ST REFORGER KORPS" text band) has been **retired** — never use it.
- Favicons/app icons: the flat dark-green mark on a gold or paper square.

## Iconography
- No custom icon set — use [Lucide](https://lucide.dev) for UI/system icons (matches the plain-stroke, no-fill aesthetic of the wordmark).
- Social/platform marks (Discord, YouTube): [Simple Icons](https://simpleicons.org) at brand-correct colors when representing the actual platform; recolor to Korps Green/Gold when used as a plain UI glyph.
- No emoji, no unicode-glyph icons anywhere in-character.

## Content voice
1RK writes like an actual chain of command, in-character, even outside missions:
- **Third person, unit voice** — "Command" or "SOC" (Special Operations Command), never "we"/"I". Headers read `1ST REFORGER KORPS / SPECIAL OPERATIONS COMMAND / CONFIDENTIAL`.
- **Military document scaffolding, always** — REF/DATE/LOCATION metadata, a classification marker, numbered/lettered sections (Situation, Mission, Execution, Commander's Intent, Call Signs & Frequencies, Rules of Engagement, Equipment), footer with unit name + page number.
- **Terse, declarative sentences.** No hedging, no marketing tone.
- **In-universe dates and place names**, callsigns over names (Echo 0-1, Oscar 0, Alpha 0), code words bolded/quoted.
- **No emoji, no exclamation points, no casual internet-speak** inside mission documents. Community-facing copy (landing page, Discord invites) loosens slightly but stays plain and direct — recruiting poster, not startup marketing.

## Assets in this repo
```
assets/logo/
  1rk-primary.svg        primary wordmark, dark green
  1rk-primary-red.svg    primary wordmark, red
  1rk-mark.svg            Я/K monogram, dark green
  1rk-mark-gold.svg        Я/K monogram, gold
  1rk-mark-red.svg          Я/K monogram, red
  1rk-mark-on-gold.png      flattened raster, mark on gold background
tokens/
  colors.css      the five brand colors + derived scales + semantic aliases
  typography.css  font family, type scale, line-height, tracking, weight
  spacing.css     spacing scale, radius, border widths
  fonts.css       @import for Source Code Pro
styles.css        root stylesheet — imports all of tokens/
```

## Source
Full component library (buttons, forms, cards, badges, callouts, tabs, etc.), page templates (mission documents, briefing decks, lower-thirds, landing page), and guideline specimens live in the Claude Design project this was pulled from — not duplicated here. This file + the assets above are the portable brand reference for use outside that project (e.g. this repo).
