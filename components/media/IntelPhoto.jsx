import React from 'react';

export function IntelPhoto({ src, alt = '', caption, gridRef, compact = false, onPaper200 = false }) {
  const frame = onPaper200 ? 'var(--rk-paper-100)' : 'var(--rk-paper-200)';
  return (
    <figure style={{ margin: 0, background: 'var(--rk-paper-100)', border: `6px solid ${frame}`, fontFamily: 'var(--font-body)' }}>
      <div style={{ position: 'relative', lineHeight: 0, overflow: 'hidden', aspectRatio: '4 / 3' }}>
        <img src={src} alt={alt} style={{ display: 'block', width: '100%', height: '100%', objectFit: 'cover' }} />
      </div>
      {!compact && (caption || gridRef) && (
        <figcaption style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 12, background: frame, color: 'var(--text-primary)', padding: '8px 12px', fontSize: 13, letterSpacing: '0.02em' }}>
          <span style={{ fontWeight: 400 }}>{caption}</span>
          {gridRef && <span style={{ color: 'var(--text-primary)', fontWeight: 700, whiteSpace: 'nowrap' }}>{gridRef}</span>}
        </figcaption>
      )}
    </figure>
  );
}
