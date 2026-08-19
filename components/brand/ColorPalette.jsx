import React from 'react';

const PALETTE = [
  { name: 'Primary Green', hex: '#032819', varName: '--rk-primary-green', desc: 'Substitutes black everywhere — copy, strokes, ink marks. Never a background.' },
  { name: 'Secondary Green', hex: '#0ea073', varName: '--rk-secondary-green', desc: 'Contrast and hover states when primary green isn\u2019t enough.' },
  { name: 'Brand Accent Gold', hex: '#ffbf4d', varName: '--rk-accent-gold', desc: 'The only color for highlighted / full-bleed backgrounds.' },
  { name: 'Highlight Red', hex: '#ff3e3e', varName: '--rk-highlight-red', desc: 'Reserved for important elements — alerts, danger states, callouts.' },
  { name: 'Off-White', hex: '#f9f7f2', varName: '--rk-off-white', desc: 'Substitutes white everywhere — backgrounds, negative space, reverse text.' },
];

export function ColorPalette({ swatchHeight = 140 }) {
  return (
    <div style={{ display: 'flex', fontFamily: 'var(--font-body)' }}>
      {PALETTE.map((c) => (
        <div key={c.hex} style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{ height: swatchHeight, background: c.hex }} />
          <div style={{ padding: '12px 14px', background: 'var(--surface-page)', borderTop: '2px solid var(--rk-ink-900)' }}>
            <div style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', fontSize: 'var(--text-sm)', color: 'var(--text-primary)' }}>{c.name}</div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginTop: 4 }}>{c.hex} · {c.varName}</div>
            <div style={{ fontSize: 'var(--text-xs)', color: 'var(--text-secondary)', marginTop: 6, lineHeight: 1.5 }}>{c.desc}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
