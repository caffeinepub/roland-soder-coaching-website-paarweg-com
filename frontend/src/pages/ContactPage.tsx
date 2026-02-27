import CalendlyInlineWidget from '../components/CalendlyInlineWidget';

const contactCards = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    title: 'E-Mail',
    value: 'roland@paarweg.com',
    href: 'mailto:roland@paarweg.com',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    title: 'Standort',
    value: 'Basel, Schweiz',
    href: null,
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 10l4.553-2.069A1 1 0 0121 8.82V15.18a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
      </svg>
    ),
    title: 'Online-Sitzungen',
    value: 'Zoom & WhatsApp',
    href: null,
  },
];

const processSteps = [
  {
    step: '01',
    title: 'Termin buchen',
    desc: 'Wählen Sie einen passenden Termin im Kalender unten.',
  },
  {
    step: '02',
    title: 'Bestätigung erhalten',
    desc: 'Sie erhalten eine automatische Bestätigung per E-Mail.',
  },
  {
    step: '03',
    title: 'Gespräch führen',
    desc: 'Wir sprechen 30 Minuten via Zoom oder WhatsApp – kostenlos und unverbindlich.',
  },
  {
    step: '04',
    title: 'Entscheidung treffen',
    desc: 'Sie entscheiden in Ruhe, ob Sie mit dem Coaching beginnen möchten.',
  },
];

const faqs = [
  {
    q: 'Wie läuft das Kennenlerngespräch ab?',
    a: 'Das Kennenlerngespräch dauert ca. 30 Minuten und findet via Zoom oder WhatsApp statt. Es ist kostenlos und unverbindlich. Wir besprechen Ihre Situation und ich erkläre meine Arbeitsweise.',
  },
  {
    q: 'Wie viele Sitzungen brauche ich?',
    a: 'Das hängt von Ihrer Situation und Ihren Zielen ab. Viele Klienten erleben bereits nach 3–5 Sitzungen deutliche Veränderungen. Wir besprechen dies im Kennenlerngespräch.',
  },
  {
    q: 'Kann ich auch online Coaching machen?',
    a: 'Ja, Online-Coaching via Zoom ist genauso effektiv wie Präsenzsitzungen und bietet mehr Flexibilität. Viele meiner Klienten bevorzugen diese Option.',
  },
  {
    q: 'Was kostet eine Coaching-Sitzung?',
    a: 'Eine Coaching-Sitzung kostet 190 CHF. Das Kennenlerngespräch ist kostenlos. Weitere Informationen finden Sie auf der Preisseite.',
  },
];

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Kontakt
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Lassen Sie uns sprechen
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Buchen Sie Ihr kostenloses Kennenlerngespräch und machen Sie den ersten Schritt
            zu mehr Erfüllung in Ihren Beziehungen.
          </p>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-12 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contactCards.map((card) => (
              <div
                key={card.title}
                className="bg-card border border-border rounded-2xl p-6 flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 text-primary">
                  {card.icon}
                </div>
                <div>
                  <p className="text-sm font-medium text-muted-foreground mb-1">{card.title}</p>
                  {card.href ? (
                    <a
                      href={card.href}
                      className="text-foreground font-medium hover:text-primary transition-colors"
                    >
                      {card.value}
                    </a>
                  ) : (
                    <p className="text-foreground font-medium">{card.value}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly Widget */}
      <section className="py-12 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Termin buchen
            </h2>
            <p className="text-muted-foreground">
              Wählen Sie einen Termin, der Ihnen passt.
            </p>
          </div>
          <CalendlyInlineWidget />
        </div>
      </section>

      {/* Process */}
      <section className="py-16 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              So geht es weiter
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Der Weg zum Kennenlerngespräch
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {processSteps.map((item) => (
              <div key={item.step} className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">{item.step}</span>
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Häufige Fragen
            </h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq) => (
              <div key={faq.q} className="bg-card border border-border rounded-2xl p-6">
                <h3 className="font-semibold text-foreground mb-2">{faq.q}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
