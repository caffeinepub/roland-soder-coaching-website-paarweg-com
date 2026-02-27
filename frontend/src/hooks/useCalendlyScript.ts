let scriptLoaded = false;
let scriptLoading = false;

export default function useCalendlyScript(): boolean {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (scriptLoaded) {
      setIsReady(true);
      return;
    }

    if (scriptLoading) {
      // Poll until loaded
      const interval = setInterval(() => {
        if (scriptLoaded) {
          setIsReady(true);
          clearInterval(interval);
        }
      }, 100);
      return () => clearInterval(interval);
    }

    scriptLoading = true;

    // Load Calendly CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = 'https://assets.calendly.com/assets/external/widget.css';
    document.head.appendChild(link);

    // Load Calendly JS
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      scriptLoaded = true;
      scriptLoading = false;
      setIsReady(true);
    };
    script.onerror = () => {
      scriptLoading = false;
    };
    document.head.appendChild(script);
  }, []);

  return isReady;
}

import { useState, useEffect } from 'react';
