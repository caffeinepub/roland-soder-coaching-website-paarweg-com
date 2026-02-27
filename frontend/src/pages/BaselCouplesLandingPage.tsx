import CalendlyInlineWidget from '../components/CalendlyInlineWidget';

const benefits = [
  {
    title: 'Professionelle Begleitung',
    description: 'Zertifizierter Coach mit über 10 Jahren Erfahrung in Paarberatung.',
  },
  {
    title: 'Zentral in Basel',
    description: 'Bequem erreichbar in Basel – oder online via Zoom.',
  },
  {
    title: 'Kostenloser Einstieg',
    description: 'Kostenloses Kennenlerngespräch ohne Verpflichtung.',
  },
  {
    title: 'Individuell & diskret',
    description: 'Massgeschneiderte Begleitung in einem vertraulichen Rahmen.',
  },
  {
    title: 'Bewährte Methoden',
    description: 'Systemische Beratung, NLP und gewaltfreie Kommunikation.',
  },
  {
    title: 'Flexible Termine',
    description: 'Termine auch abends und am Wochenende möglich.',
  },
];

const targetAudience = [
  'Paare, die ihre Kommunikation verbessern möchten',
  'Paare in Krisensituationen',
  'Paare, die sich auseinandergelebt haben',
  'Paare vor oder nach grossen Lebensveränderungen',
  'Paare, die ihre Beziehung stärken möchten',
];

export default function BaselCouplesLandingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[70vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/basel-hero.dim_1200x600.jpg"
            alt="Paartherapie Basel"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/70 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Paartherapie & Paarberatung Basel
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Paartherapie in Basel –{' '}
              <span className="text-primary">Ihr Weg als Paar</span>
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Professionelle Paarberatung und Paartherapie in Basel. Ich begleite Sie und
              Ihren Partner auf dem Weg zu mehr Verbindung, Verständnis und Lebensfreude.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#termin"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                Kostenloses Kennenlerngespräch buchen
              </a>
            </div>
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
              Paartherapie in Basel – was Sie erwartet
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* For Whom */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Für wen ist Paartherapie in Basel?
            </h2>
          </div>
          <ul className="space-y-3 max-w-2xl mx-auto">
            {targetAudience.map((item) => (
              <li key={item} className="flex items-start gap-3 text-foreground/80">
                <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                  <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Calendly */}
      <section id="termin" className="py-16 bg-background">
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
