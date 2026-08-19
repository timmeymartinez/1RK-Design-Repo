import React from 'react';

export function Badge({ tone = 'neutral', children }) {
  const colors = {
    neutral: 'var(--text-primary)',
    green: 'var(--rk-secondary-green)',
    gold: 'var(--brand-accent)',
    danger: 'var(--status-danger)',
  };
  const c = colors[tone] || colors.neutral;
  return (
    <span style={{
      fontFamily: 'var(--font-body)',
      fontSize: 'var(--text-xs)',
      fontWeight: 700,
      letterSpacing: 'var(--tracking-widest)',
      textTransform: 'uppercase',
      padding: '1px 4px',
      borderRadius: 'var(--radius-sm)',
      display: 'inline-block',
      background: 'transparent',
      border: `1.5px solid ${c}`,
      color: c,
    }}>{children}</span>
  );
}
