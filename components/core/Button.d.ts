import React from 'react';
/**
 * Squared, uppercase call-to-action button in the stamp/stencil idiom.
 * @startingPoint section="Core" subtitle="Primary CTA button, 4 variants" viewport="700x150"
 */
export interface ButtonProps {
  /** Visual treatment */
  /** All variants render as solid fills — buttons are never outlined */
  variant?: 'primary' | 'gold' | 'cta' | 'highlight' | 'neutral';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  disabled?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit';
}
