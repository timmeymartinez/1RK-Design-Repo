import React from 'react';
/**
 * Small uppercase label for classification, status, and rank/role tags.
 * @startingPoint section="Core" subtitle="Classification / status tag" viewport="700x120"
 */
export interface BadgeProps {
  /** Always renders outlined — transparent fill, colored border and text */
  tone?: 'neutral' | 'green' | 'gold' | 'danger';
  children: React.ReactNode;
}
