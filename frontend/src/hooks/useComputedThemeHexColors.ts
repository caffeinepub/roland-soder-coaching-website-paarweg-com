import { useState, useEffect } from 'react';
import { normalizeColorToHex } from '@/utils/color';

/**
 * Hook that derives HEX color values at runtime by reading computed styles
 * from probe elements styled with the app's theme classes.
 * Re-computes when theme changes (e.g., dark mode toggle).
 */
export function useComputedThemeHexColors() {
  const [colors, setColors] = useState<{
    background: string | null;
    primaryButton: string | null;
  }>({
    background: null,
    primaryButton: null,
  });

  const computeColors = () => {
    // Create temporary probe elements to read computed styles
    const probeContainer = document.createElement('div');
    probeContainer.style.position = 'absolute';
    probeContainer.style.visibility = 'hidden';
    probeContainer.style.pointerEvents = 'none';
    probeContainer.style.top = '-9999px';
    probeContainer.style.left = '-9999px';

    // Probe for background color
    const bgProbe = document.createElement('div');
    bgProbe.className = 'bg-background';
    probeContainer.appendChild(bgProbe);

    // Probe for primary button color
    const buttonProbe = document.createElement('button');
    buttonProbe.className = 'bg-primary';
    probeContainer.appendChild(buttonProbe);

    document.body.appendChild(probeContainer);

    // Read computed styles
    const bgStyle = window.getComputedStyle(bgProbe);
    const buttonStyle = window.getComputedStyle(buttonProbe);

    const bgColor = normalizeColorToHex(bgStyle.backgroundColor);
    const buttonColor = normalizeColorToHex(buttonStyle.backgroundColor);

    // Clean up
    document.body.removeChild(probeContainer);

    setColors({
      background: bgColor,
      primaryButton: buttonColor,
    });
  };

  useEffect(() => {
    // Initial computation
    computeColors();

    // Watch for theme changes (dark mode toggle)
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === 'attributes' &&
          mutation.attributeName === 'class'
        ) {
          computeColors();
        }
      });
    });

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    });

    return () => {
      observer.disconnect();
    };
  }, []);

  return colors;
}
