import React from 'react';
/**
 * Square checkbox — checked state fills green with a gold inner mark, no rounded/native checkmark.
 * @startingPoint section="Forms" subtitle="Custom square checkbox" viewport="400x80"
 */
export interface CheckboxProps {
  label?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
