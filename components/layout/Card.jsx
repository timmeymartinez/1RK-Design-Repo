import React from 'react';

export function Card({ dark = false, children, style }) {
  return (
    <div style={{
      background: dark ? 'var(--surface-dark)' : 'var(--rk-paper-200)',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-primary)',
      borderRadius: 'var(--radius-none)',
      padding: 'var(--space-5)',
      fontFamily: 'var(--font-body)',
      ...style,
    }}>{children}</div>
  );
}
