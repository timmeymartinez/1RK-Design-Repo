import React from 'react';

export function Divider({ label, dark = false }) {
  const line = { flex: 1, height: 'var(--border-width-thick)', background: dark ? 'var(--border-on-dark)' : 'var(--border-strong)' };
  if (!label) return <div style={line} />;
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 'var(--space-3)', color: dark ? 'var(--text-on-dark)' : 'var(--text-primary)', fontFamily: 'var(--font-body)', fontSize: 'var(--text-xs)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase' }}>
      <div style={line} />
      <span>{label}</span>
      <div style={line} />
    </div>
  );
}
