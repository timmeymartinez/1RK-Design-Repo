import React from 'react';
/**
 * Radio button — the one intentionally round control, for single-choice questions.
 * @startingPoint section="Forms" subtitle="Radio button" viewport="400x80"
 */
export interface RadioProps {
  label?: string;
  name?: string;
  value?: string;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
