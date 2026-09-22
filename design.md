# 1st Reforger Korps — Design System

Pulled from the [Claude Design](https://claude.ai/design) project **"1st Reforger Korps Design System"** — **[open the live project here](https://claude.ai/design/p/9190487a-80da-492a-aa6d-cc87c8e2ba04)**. That project is the actual source of truth: it has the full component library (`components/`), every page template with real, working markup (`templates/`), and rendered guideline specimens (`guidelines/`) — all of it inspectable and previewable, not just described in prose. **This repo is a portable summary for use where that project isn't reachable.** If you have access to the Claude Design project, read the real template/component source there directly instead of reconstructing it from this file — that's what the "Document anatomy" and "Components" sections below do, and they're kept as literal as possible for exactly that reason.

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
- **When a piece of content doesn't map onto an existing pattern, default to plain body text — don't invent a new decorative treatment.** A flowing document (see Document anatomy below) is, in the actual reference material, exclusively titles + `h2`s + paragraphs + lists + the occasional Callout — nothing else. A "speaking order," a schedule line, a short aside: these are a sentence, not a new centered/colored/boxed component. This system covers a fixed, small set of moves (Badge, Callout, Card, Divider, StatusStamp — see Components below); if none of them fit, the answer is a plain paragraph, not a new one-off style. This was the single biggest source of a document reading as "off-brand" even when every color/font token was already correct — an invented flourish stands out precisely because nothing else in the system does that.

## Type & spacing scales
Full token files: [`tokens/typography.css`](tokens/typography.css), [`tokens/spacing.css`](tokens/spacing.css), [`tokens/fonts.css`](tokens/fonts.css).

- Font: `Source Code Pro` (Google Fonts, weights 400/500/600/700)
- Type scale: `--text-xs` (12px) → `--text-5xl` (88px)
- Spacing scale: `--space-1` (4px) → `--space-10` (128px)
- Radius: effectively 0 everywhere (`--radius-none`/`--radius-sm` = 0px; `--radius-pill` = 999px for pill shapes only)

## Logo usage
- **Primary logo** (`assets/logo/1rk-primary.svg`) — the full wordmark — for the main brand-establishing placement on a page (hero, cover slide, landing-page header), always at 238px height in that role. **Exception:** in a flowing mission/paperwork document (see Document anatomy below), the real `templates/mission-document` reference uses the primary logo small in the letterhead itself — `height:48px`, centered between the unit stack and the REF block — not the monogram. Treat "monogram for repeated/small placements" as the rule for decks, footers, and favicons specifically, and the 48px primary mark as the rule for a paperwork letterhead.
- **Monogram** (`assets/logo/1rk-mark.svg`) — the Я/K mark — the secondary mark, used once the primary wordmark is already established elsewhere on the same piece (footers, corner marks, favicons) at reduced size.
- Color variants: default dark-green (`1rk-mark.svg`, `1rk-primary.svg`), gold (`1rk-mark-gold.svg`), red (`1rk-mark-red.svg`, `1rk-primary-red.svg`), and a flattened mark-on-gold raster (`1rk-mark-on-gold.png`) for contexts needing a baked-in background.
- The boxed wordmark lockup (mark + "1ST REFORGER KORPS" text band) has been **retired** — never use it.
- Favicons/app icons: the flat dark-green mark on a gold or paper square.

## Document anatomy (briefings / AARs / debriefs / SOPs)
This is the exact, verbatim pattern used by the `templates/mission-document` template in the Claude Design project — copy these values, don't approximate them. A working static copy lives in [`reference/document-pattern.html`](reference/document-pattern.html) in this repo; open it in a browser and read the source rather than re-deriving the look from the bullets below.

- **Page.** Off-white page background. Content column reads like a printed letter sheet — no floating "card" with a shadow around it (shadows aren't used anywhere in this system, including here).
- **Header (repeats on every page).** A 3-column flex row, `align-items:flex-end`, `justify-content:space-between`, `border-bottom:3px solid var(--rk-ink-900)` (`--border-width-heavy`), `padding-bottom:10px`:
  - Left: 3 stacked lines at `12px`/`line-height:1.5`, color `var(--text-secondary)` — unit name, then "SPECIAL OPERATIONS COMMAND", then the classification word in `var(--status-danger)` (plain colored text, no box, no underline).
  - Center: primary wordmark, `height:48px`.
  - Right: `var(--text-sm)`/`line-height:1.5`, color `var(--text-secondary)`, right-aligned — `REF:` / `DATE:` / `LOCATION:` (swap fields as the doc needs; a protocol/SOP without a location can drop that line rather than invent one).
- **Footer (repeats on every page).** 2-column flex row, `justify-content:space-between`, `border-top:2px solid var(--rk-ink-900)` (`--border-width-thick`), `padding-top:8px`, `var(--text-xs)`, `letter-spacing:var(--tracking-wider)`, color `var(--text-primary)` (**not** secondary green — the footer is dark ink, only the header stack is secondary green). Unit name left, doc title + page number right.
- **Title.** Centered, bold, uppercase, `var(--text-2xl)` (36px), `letter-spacing:var(--tracking-wide)`, `margin:20px 0 2px` — the document *type* (e.g. "Mission Briefing"). Where a document also has a specific proper name (an operation name), add a second centered line directly under it: bold, `var(--text-xl)` (28px), **sentence case, not uppercase**, `margin:0 0 24px`. A document without a second proper name (an evergreen protocol/SOP) just omits the second line — don't invent a subtitle to fill it.
- **Section headings (`h2`).** This is the one everyone gets wrong by eye: section headings are **the same font-size as body text** (`var(--text-base)`, 16px) — the only things that distinguish a heading are `font-weight:600`, `text-transform:uppercase`, `letter-spacing:var(--tracking-wider)`, and `text-decoration:underline` with `text-underline-offset:4px`. No color change, no gold rule underneath, no size jump. `margin:26px 0 10px`.
- **Body copy.** `var(--text-base)`, `line-height:var(--leading-normal)` (1.55), color `var(--text-primary)`, `margin:0 0 14px`. A bold inline label (`<b>Time:</b> 5 Minutes`) is how this system handles a metadata line inside body content — there's no separate "meta bar" component; don't build one.
- **Lists.** Plain browser default markers (`<ul>`/`<ol>` with `padding-left:22px`) — no custom bullet glyphs, no colored markers. Keep it plain.
- **No italics anywhere.** The system never reaches for italic type, in this template or in any component — emphasis is bold, color, size, or uppercase+tracking, never slant.
- **Sub-labels inside a section** (e.g. "Fireteam Leader Responsibilities" ahead of a list) are a plain bold paragraph, not a separate heading level — this template only defines one heading tier (`h2`).
- **Line breaks inside static text are unreliable** — the authoring format collapses raw whitespace/newlines the way JSX does. Use explicit `<br>` (as the real header block does) instead of relying on `white-space:pre` + literal newlines, including inside a preformatted/code block.
- **Page breaks.** `break-before: page` on an `h2` (or any block) forces a new sheet when printed/exported — used here to start the Discord AAR template on its own page.

## Components
These mirror the exact component source in the Claude Design project (`components/`) — treat the values below as the spec, not a starting point:
- **Badge** (`components/core/Badge.jsx`) — classification/status tag. Always outlined: `border:1.5px solid <tone>`, transparent fill, text same color as border. `font-size:var(--text-xs)`, `font-weight:700`, `letter-spacing:var(--tracking-widest)`, uppercase, `padding:1px 4px` (deliberately tight), square corners. Tones: `neutral`→`--text-primary`, `green`→`--rk-secondary-green`, `gold`→`--brand-accent`, `danger`→`--status-danger`.
- **Button** — always solid fill, never outline/ghost. `primary`→secondary green bg, `cta`/`gold`/`highlight`→red or gold, `neutral`→paper-300. Bold, uppercase, `letter-spacing:var(--tracking-wide)`, square corners, no shadow. Hover swaps to a `color-mix`-lightened step of the same token — flat, no transition.
- **Callout** (`components/feedback/Callout.jsx`) — solid fill, reserved for genuinely long asides (never a one-liner — use a Badge or plain sentence instead). Background is the **dark** step of the tone, not the raw brand color: `info`→`var(--rk-gold-700)`, `warning`→`var(--rk-gold-600)`, `danger`→`var(--status-danger)`. Text is **off-white** (`var(--rk-off-white)`) in every tone, not dark green — this is the one place off-white sits on a colored fill instead of ink-on-paper. Optional bold uppercase title line above the body, same off-white color. `padding:var(--space-4)`.
- **StatusStamp** (`components/feedback/StatusStamp.jsx`) — a rubber-stamp classification mark: bold uppercase, `letter-spacing:var(--tracking-widest)`, `border:3px solid <tone>`, `padding:4px 14px`, transparent fill, text = border color. This is the "big stamp" treatment for a cover slide or standalone mark; a flowing document's own classification word in its header is plain colored text, not this component (see Document anatomy above).
- **Card** (`components/layout/Card.jsx`) — the confirmed flat container pattern for any new surface: `background:var(--rk-paper-200)` (light) or `var(--surface-dark)` i.e. gold (`dark` variant), `padding:var(--space-5)`, square corners, no border, no shadow. This is what a "code block" / AAR-template box should use.
- **SectionHeading** — underlined label used *inside* a Card/dark surface (`font-weight:700`, `text-decoration:underline`, `text-underline-offset:4px`) — distinct from the flowing-document `h2` above only in that it's a component for card content, not the page's own section rhythm.
- **Divider** — a `var(--border-width-thick)` rule, optionally with a centered uppercase tracked-out label; color `var(--border-strong)` on paper or `var(--border-on-dark)` on a dark/gold surface.
- Forms (**Input, Select, Checkbox, Radio**) and **Tabs** exist for the landing-page / web-form surfaces — square corners, flat fills, no rounded pills except where `--radius-pill` is explicitly called for.
- **IntelPhoto** — the only sanctioned way to embed real photography: a framed figure with corner viewfinder ticks, optional red classification tag, and a caption bar (label + grid reference) in Primary Green. Never drop a raw `<img>` into a document for real photography.

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
reference/
  document-pattern.html   working static copy of the mission-document letterhead/heading/callout/AAR-block pattern — open it and read the source
```

## Source
Full component library (buttons, forms, cards, badges, callouts, tabs, etc.), page templates (mission documents, briefing decks, lower-thirds, landing page), and guideline specimens live in the Claude Design project this was pulled from — not duplicated here in component-source form, though their exact values are transcribed in "Document anatomy" and "Components" above. This file + the assets above are the portable brand reference for use outside that project (e.g. this repo). When in doubt, or before building anything non-trivial, go read the live project instead of trusting a summary — summaries drift, the actual template source doesn't.
