import React from 'react';
/**
 * Squared select dropdown with uppercase label.
 * @startingPoint section="Forms" subtitle="Labeled dropdown" viewport="500x110"
 */
export interface SelectProps {
  label?: string;
  options?: string[];
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}
