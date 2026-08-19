import React from 'react';
/**
 * Flat-topped callout box for commander's-intent notes, warnings, danger notices inside docs.
 * @startingPoint section="Feedback" subtitle="Info / warning / danger callout" viewport="700x160"
 */
export interface CalloutProps {
  tone?: 'info' | 'warning' | 'danger';
  title?: string;
  children: React.ReactNode;
}
