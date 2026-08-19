import React from 'react';
/**
 * Flat, square-cornered content card, light or dark.
 * @startingPoint section="Layout" subtitle="Square content card, light/dark" viewport="500x220"
 */
export interface CardProps {
  dark?: boolean;
  children: React.ReactNode;
  style?: React.CSSProperties;
}
