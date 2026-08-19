import React from 'react';

export function Radio({ label, name, checked, onChange, value }) {
  return (
    <label style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--font-body)', fontSize: 'var(--text-base)', color: 'var(--text-primary)', cursor: 'pointer' }}>
      <span style={{
        width: 20, height: 20, border: '1.5px solid var(--border-strong)', borderRadius: '50%',
        display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, background: 'var(--surface-raised)',
      }}>
        {checked && <span style={{ width: 10, height: 10, borderRadius: '50%', background: 'var(--rk-secondary-green)' }} />}
      </span>
      <input type="radio" name={name} value={value} checked={checked} onChange={onChange} style={{ display: 'none' }} />
      {label}
    </label>
  );
}
