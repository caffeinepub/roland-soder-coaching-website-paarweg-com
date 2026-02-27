interface CalendlyWidget {
  initInlineWidget(options: {
    url: string;
    parentElement: HTMLElement;
    prefill?: Record<string, unknown>;
    utm?: Record<string, unknown>;
  }): void;
  initPopupWidget(options: { url: string }): void;
  showPopupWidget(url: string): void;
  closePopupWidget(): void;
  destroyBadgeWidget(): void;
}

declare global {
  interface Window {
    Calendly?: CalendlyWidget;
  }
}

export {};
