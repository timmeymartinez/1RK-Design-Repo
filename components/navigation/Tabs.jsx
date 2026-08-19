import React from 'react';

export function Tabs({ items = [], active, onChange }) {
  return (
    <div style={{ display: 'flex', fontFamily: 'var(--font-body)', borderBottom: '2px solid var(--rk-secondary-green)' }}>
      {items.map((item) => {
        const isActive = item === active;
        return (
          <button
            key={item}
            onClick={() => onChange && onChange(item)}
            style={{
              fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-sm)',
              letterSpacing: 'var(--tracking-wide)', textTransform: 'uppercase',
              padding: '10px 18px', border: 'none', cursor: 'pointer',
              background: isActive ? 'var(--rk-secondary-green)' : 'transparent',
              color: isActive ? 'var(--rk-off-white)' : 'var(--text-secondary)',
              borderTopLeftRadius: 'var(--radius-sm)', borderTopRightRadius: 'var(--radius-sm)',
              marginBottom: -2,
              borderBottom: isActive ? '2px solid var(--rk-secondary-green)' : '2px solid transparent',
            }}
          >{item}</button>
        );
      })}
    </div>
  );
}
