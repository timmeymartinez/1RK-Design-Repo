import React from 'react';

export function Checkbox({ label, checked, onChange }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-primary)', cursor: 'pointer' }}>
      <span style={{
        width: 20, height: 20, border: '1.5px solid var(--border-strong)', borderRadius: 'var(--radius-sm)',
        background: 'var(--surface-raised)',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
      }}>
        {checked && <span style={{ width: 10, height: 10, background: 'var(--rk-secondary-green)' }} />}
      </span>
      <input type="checkbox" checked={checked} onChange={onChange} style={{ display: 'none' }} />
      {label}
    </label>
  );
}
