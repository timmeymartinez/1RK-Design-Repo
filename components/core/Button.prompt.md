Squared, uppercase CTA button used across docs, decks, overlays, and the landing page — no rounded corners, no soft shadow.

```jsx
<Button variant="gold" size="md" onClick={() => join()}>Join the Korps</Button>
```

Variants: `primary` (green, default), `gold` (accent CTA), `highlight` (red — the "special"/most-important CTA, use when a gold element is already present nearby), `outline`, `ghost`. Sizes: `sm`, `md`, `lg`. Press state drops the stamp shadow and nudges the label 2px — no scale/opacity tricks.
