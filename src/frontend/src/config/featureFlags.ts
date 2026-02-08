/**
 * Centralized feature flags for the application.
 * These flags control optional behaviors and can be toggled without code changes.
 */

export const featureFlags = {
  /**
   * Enable mobile "Read more / Show less" compacting behavior.
   * When false: All content is displayed fully expanded on mobile without collapse UI.
   * When true: Content is collapsed on mobile with toggle button (original behavior).
   * 
   * Default: false (compacting disabled, full content shown)
   */
  enableMobileReadMoreCompacting: false,
} as const;

export type FeatureFlags = typeof featureFlags;
