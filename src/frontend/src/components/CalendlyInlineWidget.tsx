import { useEffect, useRef } from 'react';
import { useCalendlyScript } from '@/hooks/useCalendlyScript';

interface CalendlyInlineWidgetProps {
  url: string;
  minHeight?: number;
  className?: string;
}

/**
 * Reusable Calendly inline widget component.
 * Automatically loads the Calendly script and renders the inline booking widget.
 */
export function CalendlyInlineWidget({ 
  url, 
  minHeight = 700,
  className = '' 
}: CalendlyInlineWidgetProps) {
  const isScriptReady = useCalendlyScript();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isScriptReady || !containerRef.current) return;

    // Initialize the Calendly widget if the global API is available
    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url,
        parentElement: containerRef.current,
      });
    }
  }, [isScriptReady, url]);

  return (
    <div
      ref={containerRef}
      className={`calendly-inline-widget rounded-lg overflow-hidden border-2 border-border/40 ${className}`}
      data-url={url}
      style={{ 
        minWidth: '320px', 
        width: '100%',
        height: `${minHeight}px`,
        maxWidth: '100%'
      }}
    />
  );
}
