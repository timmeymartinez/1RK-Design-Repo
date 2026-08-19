import React from 'react';

export function SectionHeading({ children, dark = false }) {
  return (
    <div style={{
      fontFamily: 'var(--font-body)', fontWeight: 700, fontSize: 'var(--text-lg)',
      textDecoration: 'underline', textUnderlineOffset: '4px',
      color: dark ? 'var(--text-on-dark)' : 'var(--text-primary)',
      marginBottom: 'var(--space-3)',
    }}>{children}</div>
  );
}
