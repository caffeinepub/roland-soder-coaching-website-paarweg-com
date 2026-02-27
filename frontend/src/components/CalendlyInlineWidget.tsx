import { useEffect, useRef } from 'react';
import useCalendlyScript from '../hooks/useCalendlyScript';

export default function CalendlyInlineWidget() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReady = useCalendlyScript();

  useEffect(() => {
    if (!isReady || !containerRef.current) return;

    const container = containerRef.current;

    // Clear any previous widget
    container.innerHTML = '';

    if (window.Calendly) {
      window.Calendly.initInlineWidget({
        url: 'https://calendly.com/roland-soder/kennenlernen',
        parentElement: container,
        prefill: {},
        utm: {},
      });
    }
  }, [isReady]);

  return (
    <div
      ref={containerRef}
      className="min-h-[650px] w-full rounded-2xl overflow-hidden"
      style={{ minHeight: '650px' }}
    />
  );
}
