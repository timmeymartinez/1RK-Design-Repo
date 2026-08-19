# 1st Reforger Korps — Design System

## Buttons & badges
Buttons are always solid fills — no outline or ghost treatment; use `neutral` (paper background) where a lower-emphasis solid is needed instead of an outline. Badges are the opposite: always outlined — transparent fill, colored border and text — never a solid tag.

## Logo usage
Primary logo (prio 1) is `assets/logo/1rk-primary.svg` — the full wordmark — used for the main brand-establishing placement on a page (hero, cover slide, header), always at 238px height in that role (landing-page hero, briefing-deck title slide). The Я/K monogram (`assets/logo/1rk-mark.svg`) is the secondary mark: once the primary wordmark has already been established, small/repeated placements elsewhere on the same piece (footers, corner marks) use the monogram at reduced size instead of repeating the full wordmark. The boxed wordmark lockup (mark + "1ST REFORGER KORPS" text band) has been retired — never use it.

**Brand Accent Gold (`--brand-accent`) is the only color used for highlighted/full-bleed backgrounds** — cover slides, video overlays, the landing-page hero. Primary Green is never a background (see above); it's reserved for text, strokes, and small ink-style marks. Interior/content surfaces use the paper background (`--surface-page`), with green, gold, and red appearing only as accents on top of it.

## Embedding images (intel photos)
Real screenshots — recon shots, AAR imagery, map captures — embed via the **IntelPhoto** component (`components/media/IntelPhoto.jsx`): a framed figure with corner viewfinder ticks, an optional red classification tag, and a caption bar (label + grid reference) in Primary Green. Use it anywhere real photography supports the content — mission document annexes, briefing-deck situation slides, a landing-page "From the Field" strip — never as raw unframed `<img>` tags. Pass `compact` to drop the caption bar for small inline thumbnails. In a `.dc.html` template, mount it with `<x-import component-from-global-scope="…IntelPhoto" src="…" caption="…" grid-ref="…">`.

## Who this is for
1st Reforger Korps ("1RK") is a Discord community that runs realistic **Arma Reforger** milsim missions. The community leans into teamwork, immersion, and Cold-War-era believability — without being a strict real-world simulation. This system covers everything the Korps produces: mission paperwork (briefings, AARs, debriefs, SOPs), video overlays for session recordings/YouTube, Discord/social/favicon iconography, presentation decks, and the recruitment landing page / web forms.

## Sources provided
- `uploads/1rk logo plain.svg`, `uploads/1rk logo text box plain.svg` — logo/wordmark artwork (multi-panel color proof sheets, not single flat exports — see note below)
- `uploads/1rk logo plain thumb yellow.png` — flattened logo mark on gold, used to confirm real hex values
- `uploads/1rk colors.svg` — color-swatch proof sheet (unlabeled classes; only 2 of its swatches could be confirmed against real usage)
- `uploads/1rk camouflage 02.svg` — abstract camo/topographic line-art texture (also unlabeled classes)
- `uploads/silent thunder 01-03.png` — a real rendered Mission Briefing document ("Operation Silent Thunder"), the best available source of truth for document layout, type, and color
- `uploads/SOP 02 - Patrol Roles & Std. Movement.pdf` — a real Standard Operating Procedure document
- No Figma file, codebase, or existing web presence was attached — this system is built from these static assets alone.

**Note on the logo files:** `1rk logo plain.svg` and `1rk logo text box plain.svg` are internal color-proof sheets — each is a 2×2 grid pairing the mark/wordmark against multiple candidate background swatches via shared (unlabeled) CSS classes, not a single ready-to-place logo. I extracted the mark geometry and rebuilt clean, single-color logo files in `assets/logo/`, and cropped the real combined mark+wordmark lockup directly out of the "Silent Thunder" briefing letterhead (the one place it appears fully composed). If a clean master logo export exists, please share it and I'll swap it in.

## Index
- `styles.css` — root stylesheet, imports everything below
- `tokens/` — colors, typography, spacing/radius/shadow, font-face/import
- `guidelines/` — foundation specimen cards (Design System tab: Colors, Type, Spacing, Brand, Iconography)
- `assets/logo/` — logo mark (dark-green and gold), combined lockup PNG
- `assets/references/` — the three source briefing-document pages, kept for future reference
- `components/brand/` — ColorPalette (the five canonical colors)
- `components/core/` — Button, Badge, Tag, Divider
- `components/forms/` — Input, Select, Checkbox, Radio
- `components/feedback/` — Callout, StatusStamp
- `components/layout/` — Card, SectionHeading
- `components/navigation/` — Tabs
- `templates/community-document/` — flowing doc template for briefings / AARs / debriefs / SOPs
- `templates/briefing-deck/` — presentation deck shell
- `templates/landing-page/` — recruitment landing page
- `SKILL.md` — portable skill wrapper for Claude Code

## Content fundamentals
1RK writes like an actual chain of command, in-character, even outside missions:
- **Third person, unit voice.** Documents speak as "Command" or "SOC" (Special Operations Command), not "we" or "I." Headers read `1ST REFORGER KORPS / SPECIAL OPERATIONS COMMAND / CONFIDENTIAL`.
- **Military document scaffolding, always.** Every doc carries REF, DATE, LOCATION metadata, a classification marker, numbered/lettered sections (Situation, Mission, Execution, Commander's Intent, Call Signs & Frequencies, Rules of Engagement, Equipment), and a footer with unit name + page number.
- **Terse, declarative sentences.** "Return fire when engaged." "Civilian casualties and infrastructure damage are strictly prohibited." No hedging, no marketing tone.
- **In-universe dates and place names** (24/03/1986, Erquy, Everon, Saint Pierre) even though the game is fictional — commit to the bit.
- **Callsigns over names**: Echo 0-1, Oscar 0, Alpha 0. Code words are bolded/quoted: "THUNDER" — mission accomplished.
- **No emoji, no exclamation points, no casual internet-speak** inside mission documents. Community-facing copy (landing page, Discord invites) can loosen slightly but stays plain, direct, and respectful of people's time — think recruiting poster, not startup marketing.
- **Redacted/confidential markers used decoratively** even though nothing is really classified — it's part of the immersion, not a legal designation.

## Visual foundations
- **Palette is exactly these four colors — nothing else, ever.**
  - **Primary Green** `#032819` (`--rk-primary-green`) — copy, strokes, backgrounds, anything that would normally be black. This is the default text color and the default dark surface.
  - **Secondary Green** `#0ea073` (`--rk-secondary-green`) — wherever primary green isn't enough contrast, or something needs to be highlighted just a bit (hover states, links, secondary text/labels).
  - **Brand Accent Gold** `#ffbf4d` (`--rk-accent-gold`) — the brand's accent color (CTAs, the logo background, gold highlights).
  - **Highlight Red** `#ff3e3e` (`--rk-highlight-red`) — important stuff: badges, important boxes/outlines/headlines, important buttons, classification markings. Used more broadly than just "danger."
  - **Off-White** `#f9f7f2` (`--rk-off-white`/`--rk-paper-100`) — backgrounds, and the negative/reverse font color on dark surfaces (used instead of pure white).
  - Every other token is a lighter/darker step of one of these five, generated with `color-mix(in oklch, …)` (hue-preserving — never drifts toward gray the way an `srgb` mix does) for hover/press states or backgrounds that need to be a touch lighter/darker. Never hand-pick a new hex; always derive from one of the five.
- **Never use black or pure white.** Anywhere a design would normally reach for `#000`/black, use Primary Green (`#032819`, `--text-primary`/`--rk-green-950`) instead — including default/inherited text color (always set an explicit color, never rely on browser-default black). Primary Green is used raw for copy and strokes only now — **it is never a background.** Anywhere a design would reach for pure white, use Off-White (`#f9f7f2`, `--rk-off-white`/`--rk-paper-100`) instead — it's the negative/reverse font color on dark surfaces and the default page background. Plain white (`--rk-white`) is reserved for a couple of raised-surface backgrounds only.
- **Primary Green is never a background — full-bleed cover/title moments (a deck's title slide, a video overlay frame, the landing-page hero) use Brand Accent Gold instead**, with dark green (`--text-on-gold`) for text/logos on top of it. Interior content slides/pages still use the paper background with green/gold as accents, not as the page fill; don't default every slide to the accent treatment.
- **Type is one family, monospace.** Source Code Pro is the only typeface in this system — used everywhere, in-lore and out. There is no second display font; big out-of-lore headlines (landing page hero, deck titles) just use Source Code Pro bold, uppercase, at a large size and slightly wider letter-spacing rather than switching families.
- **Backgrounds are flat paper or flat gold/green — no gradients, ever.** No camouflage/texture imagery motif — it's been retired from the system. In documents, decks, and UI it stays thin, low-opacity, and monochrome — never a busy full-color camo print.
- **One separating cue, never two stacked together.** A surface is set apart from its background by EITHER a flat color/fill contrast OR a border/rule — never both at once, and never plus a shadow on top. Cards, buttons, and badges use flat color contrast alone: no border, no shadow, no press/3D effect anywhere in the system. Corners are square to almost-square (`--radius-none`/`--radius-sm`, 0–2px) — this is a stencil/stamp aesthetic, not a rounded consumer-app one.
- **No rotation, ever.** Nothing in the system tilts or rotates for effect — not stamps, not badges, not decorative marks. Everything sits flat and square.
- **Callouts are solid-fill, reserved for long content.** `Callout` fills its whole box with the tone color (no border, no shadow) and sets title/body text to the lightest palette colors for contrast. Tones map to meaning, not decoration — pick by what the note actually is, never by preference: `info` (gold) is neutral/reference context; `warning` (darker gold) flags something to watch but not yet act on; `danger` (Highlight Red) is a hard constraint, order, or safety-critical note — mandatory radio discipline, ROE limits, anything with real consequences for ignoring it. Since `info` and `warning` are both gold and read almost identically at a glance, reserve `warning` for true "caution" cases and default anything commander-level or compliance-level to `danger`. Use it only for genuinely long, multi-sentence asides — a short one-line notice should just be a plain sentence or a `Badge`, not a callout box.
- **Confirmed direction:** flat color-block cards (no border, no shadow — `components/layout/Card.jsx`) are the approved pattern going forward for any new surface/container in this system.
- **No animation choreography of the softened, bouncy kind.** Where motion exists (video overlays, logo stings) it should read like a HUD/teleprinter: hard cuts, typewriter reveals, quick linear wipes — not eases or spring bounces. Where motion exists (video overlays, logo stings) it should read like a HUD/teleprinter: hard cuts, typewriter reveals, quick linear wipes — not eases or spring bounces.
- **Hover/press states stay flat, color-only.** Hover swaps to the next-darker/next-lighter token in the same scale (e.g. green-900 → green-800); there is no press state, no shadow, and no scale/translate "3D" effect on any interactive element — buttons, badges, and tags are flat color blocks with no border, no outline, and no shadow (the earlier "rubber-stamp" shadow treatment is retired system-wide). No opacity fades either.
- **Imagery is absent from the source material** — no photography or illustration was provided. Treat any future imagery as desaturated, high-contrast, grain-forward (night-vision/surveillance-still mood), never bright or warm.
- **No blur or translucency**, except a single sanctioned use: `--border-on-dark` (a translucent hairline for separating content on the dark-green surface).

## Iconography
- No icon set, icon font, or brand-icon library was provided. **Substitution flagged:** UI/system icons should use [Lucide](https://lucide.dev) (CDN), which matches the plain-stroke, no-fill aesthetic already implied by the wordmark's clean geometric letterforms. Social/platform marks (Discord, YouTube) should use [Simple Icons](https://simpleicons.org) (CDN) at brand-correct colors only when representing the actual platform (e.g. a "join our Discord" button); recolor to Korps Green/Gold when used as a plain UI glyph.
- No emoji and no unicode-glyph icons anywhere in-character — this follows directly from the "no casual internet-speak in mission docs" rule above.
- Favicons/app icons should be the flat dark-green mark (`assets/logo/1rk-mark.svg`) on a gold or paper square — see the Brand cards.

## Caveats / open questions
- The two logo SVGs are proof sheets with unlabeled color classes; I rebuilt clean single-color mark files from the geometry rather than guess at unconfirmed swatch colors (`cls-1`/`cls-3` in the swatch sheet remain unidentified). If you have a native/clean logo export (AI, EPS, or a labeled SVG), send it over.
- Black Ops One is **my invention** for the out-of-lore display face, per your note that this was open — happy to try alternatives (stencil, condensed sans, etc.) if it's not the right feel.
- No photography, no existing web page, no Figma/codebase — the landing page and video-overlay templates are built to match the paper-document system's logic, not any existing screen. Flag anything that should diverge.
