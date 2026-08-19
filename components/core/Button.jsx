import React from 'react';

export function Button({ variant = 'primary', size = 'md', children, disabled = false, onClick, type = 'button' }) {
  const styles = {
    primary: { background: 'var(--rk-secondary-green)', color: 'var(--text-primary)' },
    gold: { background: 'var(--brand-highlight)', color: 'var(--text-primary)' },
    cta: { background: 'var(--brand-highlight)', color: 'var(--text-primary)' },
    highlight: { background: 'var(--brand-highlight)', color: 'var(--rk-off-white)' },
    neutral: { background: 'var(--rk-paper-300)', color: 'var(--text-primary)' },
  };
  const sizes = {
    sm: { padding: '6px 14px', fontSize: 'var(--text-sm)' },
    md: { padding: '10px 20px', fontSize: 'var(--text-base)' },
    lg: { padding: '14px 28px', fontSize: 'var(--text-md)' },
  };
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);
  const base = styles[variant] || styles.primary;
  const hoverBg = {
    primary: 'color-mix(in oklch, var(--rk-secondary-green) 82%, white)',
    gold: 'color-mix(in oklch, var(--brand-highlight) 82%, white)',
    cta: 'color-mix(in oklch, var(--brand-highlight) 82%, white)',
    highlight: 'color-mix(in oklch, var(--brand-highlight) 82%, white)',
    neutral: 'var(--rk-paper-100)',
  }[variant];
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => { setHover(false); setActive(false); }}
      onMouseDown={() => setActive(true)}
      onMouseUp={() => setActive(false)}
      style={{
        fontFamily: 'var(--font-body)',
        fontWeight: 700,
        letterSpacing: 'var(--tracking-wide)',
        textTransform: 'uppercase',
        borderRadius: 'var(--radius-sm)',
        border: 'none',
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'none',
        ...base,
        ...sizes[size],
        background: disabled ? 'var(--rk-paper-200)' : (hover ? hoverBg : base.background),
        color: disabled ? 'var(--rk-off-white)' : base.color,
      }}
    >
      {children}
    </button>
  );
}
