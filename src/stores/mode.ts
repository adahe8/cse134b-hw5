import { persistentAtom } from '@nanostores/persistent';

export type Mode = 'ux' | 'swe' |  'pm';

/**
 * Single source of truth for current active portfolio mode.
 * Used by the interactive islands (ProjectGallery, etc) that need
 * to react to mode changes without a full page reload.
 * 
 * The ModeToggle component also writes to localStorage directly
 * (for the inline script in Base.astro that will apply style before paint),
 * so both myst use same key, 'portfolio-mode'.
 */

export const modeStore = persistentAtom<Mode>('portfolio-mode','pm');