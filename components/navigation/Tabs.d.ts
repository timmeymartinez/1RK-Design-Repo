import React from 'react';
/**
 * Squared tab bar for switching document sections or landing-page panels.
 * @startingPoint section="Navigation" subtitle="Squared tab bar" viewport="500x90"
 */
export interface TabsProps {
  items?: string[];
  active?: string;
  onChange?: (item: string) => void;
}
