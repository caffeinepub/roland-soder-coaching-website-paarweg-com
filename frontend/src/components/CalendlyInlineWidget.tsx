import { useEffect, useRef } from 'react';
import { useCalendlyScript } from '@/hooks/useCalendlyScript';

const CALENDLY_URL = 'https://calendly.com/paarweg-info/paarweg-session-90-min-klon';

interface CalendlyInlineWidgetProps {
  url?: string;
  className?: string;
}

export default function CalendlyInlineWidget({
  url = CALENDLY_URL,
  className = '',
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const calendlyReady = useCalendlyScript();

  useEffect(() => {
    if (!calendlyReady || !containerRef.current) return;

    // Clear previous widget
    containerRef.current.innerHTML = '';

    const div = document.createElement('div');
    div.className = 'calendly-inline-widget';
    div.setAttribute('data-url', url);
    div.style.minWidth = '320px';
    div.style.height = '700px';
    containerRef.current.appendChild(div);

    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url,
        parentElement: div,
      });
    }
  }, [calendlyReady, url]);

  return (
    <div ref={containerRef} className={className} />
  );
}
