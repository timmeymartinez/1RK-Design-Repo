import React from 'react';
/**
 * Recon-photo frame for embedding real screenshots in intel — mission docs, briefing decks, AARs.
 * Thick frame (paper-200 by default); caption bar carries a label + grid reference in Primary Green.
 * @startingPoint section="Media" subtitle="Recon-photo frame with caption bar and grid reference" viewport="700x420"
 */
export interface IntelPhotoProps {
  /** Image URL */
  src: string;
  alt?: string;
  /** Caption shown in the bar under the photo (omit + compact for a bare framed thumbnail) */
  caption?: string;
  /** Grid reference or coordinate, right-aligned in the caption bar */
  gridRef?: string;
  /** Drop the caption bar — frame only, for inline/thumbnail use */
  compact?: boolean;
  /** Set true when placing this on a paper-200 surface — swaps the frame/caption bar to paper-100 so it doesn't blend in */
  onPaper200?: boolean;
}
export declare function IntelPhoto(props: IntelPhotoProps): JSX.Element;
