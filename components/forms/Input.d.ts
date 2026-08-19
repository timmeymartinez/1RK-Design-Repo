import React from 'react';
/**
 * Squared text input with uppercase label, used in web forms (recruitment applications).
 * @startingPoint section="Forms" subtitle="Labeled text input, error state" viewport="500x120"
 */
export interface InputProps {
  label?: string;
  placeholder?: string;
  type?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
