import { useEffect, useState } from 'react';

// Module-level flag to track if script is loaded or loading
let scriptLoadingPromise: Promise<void> | null = null;
let scriptLoaded = false;

/**
 * Hook that ensures the Calendly widget script is loaded exactly once.
 * Returns a boolean indicating whether the script is ready to use.
 */
export function useCalendlyScript(): boolean {
  const [isReady, setIsReady] = useState(scriptLoaded);

  useEffect(() => {
    // If already loaded, mark as ready immediately
    if (scriptLoaded) {
      setIsReady(true);
      return;
    }

    // If already loading, wait for that promise
    if (scriptLoadingPromise) {
      scriptLoadingPromise.then(() => setIsReady(true));
      return;
    }

    // Check if script already exists in DOM (e.g., from previous mount)
    const existingScript = document.querySelector(
      'script[src="https://assets.calendly.com/assets/external/widget.js"]'
    ) as HTMLScriptElement | null;

    if (existingScript) {
      // Check if Calendly global is already available
      if (window.Calendly) {
        scriptLoaded = true;
        setIsReady(true);
      } else {
        // Wait for the existing script to load
        existingScript.addEventListener('load', () => {
          scriptLoaded = true;
          setIsReady(true);
        });
      }
      return;
    }

    // Load the script for the first time
    scriptLoadingPromise = new Promise<void>((resolve) => {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      
      script.onload = () => {
        scriptLoaded = true;
        setIsReady(true);
        resolve();
      };

      script.onerror = () => {
        console.error('Failed to load Calendly script');
        scriptLoadingPromise = null;
        resolve(); // Resolve anyway to prevent hanging
      };

      document.body.appendChild(script);
    });
  }, []);

  return isReady;
}
