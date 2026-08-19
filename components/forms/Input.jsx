import React from 'react';

export function Input({ label, placeholder, type = 'text', value, onChange, error }) {
  return (
    <label style={{ display: 'flex', flexDirection: 'column', gap: 6, fontFamily: 'var(--font-body)' }}>
      {label && <span style={{ fontSize: 'var(--text-xs)', fontWeight: 700, letterSpacing: 'var(--tracking-wider)', textTransform: 'uppercase', color: 'var(--text-primary)' }}>{label}</span>}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: 'var(--text-base)',
          padding: '10px 12px',
          background: 'var(--surface-raised)',
          border: `2px solid ${error ? 'var(--status-danger)' : 'var(--border-default)'}`,
          borderRadius: 'var(--radius-sm)',
          color: 'var(--text-primary)',
          outline: 'none',
        }}
        onFocus={(e) => { e.target.style.borderColor = 'var(--focus-ring)'; }}
        onBlur={(e) => { e.target.style.borderColor = error ? 'var(--status-danger)' : 'var(--border-default)'; }}
      />
      {error && <span style={{ fontSize: 'var(--text-xs)', color: 'var(--status-danger)' }}>{error}</span>}
    </label>
  );
}
