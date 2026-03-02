import { useEffect, useState } from 'react';

const CALENDLY_SCRIPT_SRC = 'https://assets.calendly.com/assets/external/widget.js';
const CALENDLY_CSS_HREF = 'https://assets.calendly.com/assets/external/widget.css';

let scriptLoaded = false;

export function useCalendlyScript(): boolean {
  const [ready, setReady] = useState<boolean>(scriptLoaded && !!window.Calendly);

  useEffect(() => {
    // If already loaded, mark ready immediately
    if (scriptLoaded && window.Calendly) {
      setReady(true);
      return;
    }

    // Inject CSS if not already present
    if (!document.querySelector(`link[href="${CALENDLY_CSS_HREF}"]`)) {
      const link = document.createElement('link');
      link.rel = 'stylesheet';
      link.href = CALENDLY_CSS_HREF;
      document.head.appendChild(link);
    }

    // Inject script if not already present
    if (!document.querySelector(`script[src="${CALENDLY_SCRIPT_SRC}"]`)) {
      const script = document.createElement('script');
      script.src = CALENDLY_SCRIPT_SRC;
      script.async = true;
      script.onload = () => {
        scriptLoaded = true;
        setReady(true);
      };
      document.head.appendChild(script);
    } else {
      // Script tag exists but may already be loaded
      const check = setInterval(() => {
        if (window.Calendly) {
          scriptLoaded = true;
          setReady(true);
          clearInterval(check);
        }
      }, 100);
      return () => clearInterval(check);
    }
  }, []);

  return ready;
}
