interface CalendlyInitInlineWidgetOptions {
  url: string;
  parentElement: Element | null;
  prefill?: Record<string, unknown>;
  utm?: Record<string, unknown>;
}

interface CalendlyStatic {
  initInlineWidget(options: CalendlyInitInlineWidgetOptions): void;
  initPopupWidget(options: { url: string }): void;
  closePopupWidget(): void;
  showPopupWidget(url: string): void;
}

interface Window {
  Calendly: CalendlyStatic;
}
