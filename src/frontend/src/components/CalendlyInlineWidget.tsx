import { useEffect, useRef, useState } from "react";

interface CalendlyInlineWidgetProps {
  url: string;
  minHeight?: number;
  className?: string;
  "data-ocid"?: string;
}

const SCRIPT_ID = "calendly-widget-script";
const SCRIPT_SRC = "https://assets.calendly.com/assets/external/widget.js";

export default function CalendlyInlineWidget({
  url,
  minHeight = 600,
  className = "",
  "data-ocid": dataOcid,
}: CalendlyInlineWidgetProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Watch for Calendly injecting an iframe → mark as loaded
    const observer = new MutationObserver(() => {
      if (container.querySelector("iframe")) {
        setLoaded(true);
        observer.disconnect();
      }
    });
    observer.observe(container, { childList: true, subtree: true });

    function init() {
      if (!containerRef.current) return;
      window.Calendly?.initInlineWidget({
        url,
        parentElement: containerRef.current,
      });
    }

    if (window.Calendly) {
      // Script already loaded (cached) – init immediately
      init();
    } else {
      let script = document.getElementById(
        SCRIPT_ID,
      ) as HTMLScriptElement | null;
      if (!script) {
        script = document.createElement("script");
        script.id = SCRIPT_ID;
        script.src = SCRIPT_SRC;
        script.async = true;
        document.head.appendChild(script);
      }
      // Handle both: script just added OR already in DOM but not yet loaded
      if (script.dataset.ready === "1") {
        init();
      } else {
        const currentScript = script;
        const onLoad = () => {
          currentScript.dataset.ready = "1";
          init();
        };
        currentScript.addEventListener("load", onLoad);
        return () => {
          observer.disconnect();
          currentScript.removeEventListener("load", onLoad);
        };
      }
    }

    return () => {
      observer.disconnect();
    };
  }, [url]);

  return (
    <div
      data-ocid={dataOcid}
      className={`relative w-full ${className}`}
      style={{ minHeight: `${minHeight}px`, height: "calc(100vh - 160px)" }}
    >
      {/* Loading skeleton */}
      {!loaded && (
        <div
          className="absolute inset-0 flex flex-col items-center justify-center gap-4 bg-background/80"
          aria-label="Kalender wird geladen…"
        >
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary/20 border-t-primary" />
          <p className="text-sm text-muted-foreground">
            Kalender wird geladen…
          </p>
        </div>
      )}
      {/* Calendly target div */}
      <div
        ref={containerRef}
        className="w-full h-full"
        style={{ minWidth: "320px", minHeight: `${minHeight}px` }}
      />
    </div>
  );
}
