import React from 'react';

export function Callout({ tone = 'info', title, children }) {
  const tones = {
    info: 'var(--rk-gold-700)',
    warning: 'var(--rk-gold-600)',
    danger: 'var(--status-danger)',
  };
  const bg = tones[tone] || tones.info;
  return (
    <div style={{
      fontFamily: 'var(--font-body)', background: bg,
      padding: 'var(--space-4)', color: 'var(--rk-off-white)',
    }}>
      {title && <div style={{ fontWeight: 700, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', marginBottom: 6, fontSize: 'var(--text-md)', color: 'var(--rk-off-white)' }}>{title}</div>}
      <div style={{ fontSize: 'var(--text-base)', lineHeight: 'var(--leading-normal)', color: 'var(--rk-off-white)' }}>{children}</div>
    </div>
  );
}
