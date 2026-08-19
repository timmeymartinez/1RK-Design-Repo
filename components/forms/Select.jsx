import React from 'react';

export function Select({ label, options = [], value, onChange }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
      {label && <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-primary)' }}>{label}</span>}
      <select
        value={value}
        onChange={onChange}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          padding: '10px 12px',
          background: 'var(--surface-raised)',
          border: '2px solid var(--border-default)',
          borderRadius: 'var(--radius-sm)',
          color: 'var(--text-primary)',
        }}
      >
        {options.map((o) => <option key={o} value={o}>{o}</option>)}
      </select>
    </label>
  );
}
