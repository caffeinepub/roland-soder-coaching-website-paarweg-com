import { CheckCircle2, Gift } from "lucide-react";
import { useEffect } from "react";

export default function BookingKennenlernPage() {
  useEffect(() => {
    document.title =
      "Kostenloses Kennenlerngespräch buchen – 30 Minuten | PaarWeg Roland Soder";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Buchen Sie jetzt Ihr kostenloses Kennenlerngespräch (30 Minuten) mit Roland Soder. Unverbindlich, vertraulich und ohne Verpflichtung. Online-Paarcoaching & Beziehungsbegleitung.",
    );

    // Calendly script
    const scriptId = "calendly-widget-script";
    if (!document.getElementById(scriptId)) {
      const script = document.createElement("script");
      script.id = scriptId;
      script.src = "https://assets.calendly.com/assets/external/widget.js";
      script.async = true;
      document.head.appendChild(script);
    }

    return () => {
      // Clean up meta on unmount
    };
  }, []);

  return (
    <div className="w-full">
      {/* Compact Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-accent/10 border-b border-border/40">
        <div className="container mx-auto px-4 py-6 md:px-6 md:py-8">
          <div className="mx-auto max-w-3xl text-left md:text-center">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1.5 text-sm text-primary font-medium">
              <Gift className="h-4 w-4" />
              Kostenlos &amp; unverbindlich · 30 Minuten · Online per Video
            </div>
            <h1 className="mb-2 text-2xl font-bold tracking-tight sm:text-3xl break-words">
              Kostenloses Kennenlerngespräch buchen
            </h1>
            <p className="text-sm text-muted-foreground break-words">
              Lernen Sie mich kennen und klären Sie, ob Paarcoaching für Sie der
              richtige Weg ist. Kein Druck. Keine Verpflichtung.
            </p>
          </div>
        </div>
      </section>

      {/* Calendly Widget – full remaining viewport height */}
      <section className="w-full">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div
              data-ocid="kennenlernen.canvas_target"
              className="calendly-inline-widget w-full"
              data-url="https://calendly.com/paarweg-info/paarweg-session-90-min-klon?hide_landing_page_details=1&hide_gdpr_banner=1&background_color=f9f7f4&primary_color=d07c5c"
              style={{
                minWidth: "320px",
                height: "calc(100vh - 160px)",
                minHeight: "600px",
              }}
            />
          </div>
        </div>
      </section>

      {/* Privacy note */}
      <section className="py-8">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 shadow-sm">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                <p className="text-sm text-muted-foreground">
                  Alle Gespräche sind vertraulich. Sie gehen keine Verpflichtung
                  ein. Nach dem Kennenlerngespräch entscheiden Sie in Ruhe, ob
                  und wie Sie weitermachen möchten.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
