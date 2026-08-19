import React from 'react';

export function StatusStamp({ label = 'CONFIDENTIAL', tone = 'danger' }) {
  const colors = {
    danger: 'var(--status-danger)',
    green: 'var(--rk-green-700)',
    gold: 'var(--rk-gold-600)',
  };
  const c = colors[tone] || colors.danger;
  return (
    <div style={{
      display: 'inline-block', fontFamily: 'var(--font-body)', fontWeight: 700,
      fontSize: 'var(--text-sm)', letterSpacing: 'var(--tracking-widest)', textTransform: 'uppercase',
      color: c, border: `3px solid ${c}`, padding: '4px 14px',
    }}>{label}</div>
  );
}
