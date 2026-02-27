import { Link } from '@tanstack/react-router';

const benefits = [
  {
    title: 'Kommunikation verbessern',
    description: 'Lernen Sie, wie Sie Ihre Gedanken und Gefühle klar und respektvoll ausdrücken können.',
  },
  {
    title: 'Konflikte lösen',
    description: 'Entwickeln Sie konstruktive Strategien für den Umgang mit Meinungsverschiedenheiten.',
  },
  {
    title: 'Vertrauen aufbauen',
    description: 'Stärken Sie das gegenseitige Vertrauen und die emotionale Verbindung.',
  },
  {
    title: 'Intimität vertiefen',
    description: 'Entdecken Sie neue Wege, um Nähe und Verbundenheit in Ihrer Beziehung zu fördern.',
  },
  {
    title: 'Gemeinsame Ziele',
    description: 'Definieren Sie gemeinsame Werte und Ziele für Ihre Beziehung und Ihr Leben.',
  },
  {
    title: 'Krisenprävention',
    description: 'Erkennen Sie frühzeitig Warnsignale und entwickeln Sie Strategien zur Krisenprävention.',
  },
];

const forWhom = [
  'Paare, die ihre Kommunikation verbessern möchten',
  'Paare in Krisensituationen oder nach einem Vertrauensbruch',
  'Paare, die sich auseinandergelebt haben',
  'Paare, die eine Trennung in Betracht ziehen',
  'Paare, die ihre Beziehung auf ein neues Level heben möchten',
  'Paare vor grossen Lebensveränderungen (Heirat, Kinder, Umzug)',
];

const processSteps = [
  {
    step: '01',
    title: 'Kennenlerngespräch',
    desc: 'Kostenloses 30-minütiges Gespräch, um Ihre Situation zu verstehen.',
  },
  {
    step: '02',
    title: 'Erstgespräch',
    desc: 'Ausführliche Analyse Ihrer Beziehungsdynamik und Definition der Ziele.',
  },
  {
    step: '03',
    title: 'Coaching-Prozess',
    desc: 'Regelmässige Sitzungen mit konkreten Übungen und Werkzeugen.',
  },
  {
    step: '04',
    title: 'Integration',
    desc: 'Nachhaltige Verankerung der neuen Muster in Ihrem Alltag.',
  },
];

export default function CouplesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/Paar_einfuehlsamer_Blick.png"
            alt="Paarberatung"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Paarberatung & Paartherapie
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Gemeinsam neue Wege finden
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Paarberatung hilft Ihnen, Kommunikationsmuster zu erkennen, Konflikte konstruktiv
              zu lösen und Ihre Beziehung auf ein neues Fundament zu stellen.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
            >
              Kostenloses Kennenlerngespräch buchen
            </Link>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              Was Sie erwartet
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Themen in der Paarberatung
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jede Beziehung ist einzigartig. Ich passe meine Arbeit an Ihre spezifischen
              Bedürfnisse und Ziele an.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((benefit) => (
              <div
                key={benefit.title}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
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
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
                Für wen ist das Angebot?
              </p>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
                Paarberatung ist für Sie, wenn...
              </h2>
              <ul className="space-y-3">
                {forWhom.map((item) => (
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
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/assets/paar_an_notebook.png"
                alt="Paar im Gespräch"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              Der Prozess
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              So arbeiten wir zusammen
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

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Buchen Sie jetzt Ihr kostenloses Kennenlerngespräch und erfahren Sie,
            wie Paarberatung Ihre Beziehung verändern kann.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 text-base"
          >
            Kostenloses Kennenlerngespräch buchen
          </Link>
        </div>
      </section>
    </div>
  );
}
