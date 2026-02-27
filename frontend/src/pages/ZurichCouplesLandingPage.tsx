import CalendlyInlineWidget from '../components/CalendlyInlineWidget';

const benefits = [
  {
    title: 'Erfahrener Coach',
    description: 'Zertifizierter Paarberater mit über 10 Jahren Erfahrung.',
  },
  {
    title: 'Online oder in Basel',
    description: 'Sitzungen bequem via Zoom oder in der Praxis in Basel.',
  },
  {
    title: 'Kostenloser Einstieg',
    description: 'Kostenloses Kennenlerngespräch ohne Verpflichtung.',
  },
  {
    title: 'Bewährte Methoden',
    description: 'Systemische Beratung, NLP und gewaltfreie Kommunikation.',
  },
];

export default function ZurichCouplesLandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero with Video */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <video
            autoPlay
            muted
            loop
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/assets/PaarWeg_ad.mp4" type="video/mp4" />
          </video>
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Paartherapie & Paarberatung Zürich
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Paartherapie für Zürich –{' '}
              <span className="text-primary">online & persönlich</span>
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Professionelle Paarberatung für Paare aus Zürich. Online via Zoom oder
              persönlich in Basel – flexibel und auf Ihre Bedürfnisse zugeschnitten.
            </p>
            <a
              href="#termin"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Kostenloses Kennenlerngespräch buchen
            </a>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              Warum PaarWeg?
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Paartherapie für Zürich – was Sie erwartet
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section id="termin" className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-foreground mb-3">
              Jetzt Termin buchen
            </h2>
            <p className="text-muted-foreground">
              Buchen Sie Ihr kostenloses Kennenlerngespräch direkt online.
            </p>
          </div>
          <CalendlyInlineWidget />
        </div>
      </section>
    </div>
  );
}
