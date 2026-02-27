import { Link } from '@tanstack/react-router';

const topics = [
  {
    title: 'Männliche Identität',
    description: 'Erkunden Sie, was es für Sie bedeutet, ein Mann zu sein, und wie Sie authentisch leben können.',
  },
  {
    title: 'Emotionen verstehen',
    description: 'Lernen Sie, Ihre Emotionen wahrzunehmen, zu verstehen und konstruktiv auszudrücken.',
  },
  {
    title: 'Beziehungen gestalten',
    description: 'Entwickeln Sie tiefere und erfüllendere Beziehungen – in der Partnerschaft und im Alltag.',
  },
  {
    title: 'Stärke & Verletzlichkeit',
    description: 'Entdecken Sie, wie echte Stärke und Verletzlichkeit zusammengehören.',
  },
  {
    title: 'Beruf & Privatleben',
    description: 'Finden Sie eine gesunde Balance zwischen beruflichen Anforderungen und persönlichem Wohlbefinden.',
  },
  {
    title: 'Kommunikation verbessern',
    description: 'Lernen Sie, klarer und empathischer zu kommunizieren – mit Ihrer Partnerin und anderen.',
  },
];

const workingStyle = [
  {
    title: 'Auf Augenhöhe',
    description: 'Ich begegne Ihnen respektvoll und ohne Vorurteile.',
  },
  {
    title: 'Direkt & klar',
    description: 'Klare Kommunikation und konkrete Handlungsschritte statt endloser Analyse.',
  },
  {
    title: 'Lösungsorientiert',
    description: 'Wir fokussieren uns auf das, was Sie erreichen möchten.',
  },
  {
    title: 'Vertraulich',
    description: 'Alles, was wir besprechen, bleibt absolut vertraulich.',
  },
];

export default function MenPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/Mann_nachdenklich.png"
            alt="Coaching für Männer"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Einzelcoaching für Männer
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Klarheit gewinnen, authentisch leben
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Coaching für Männer, die mehr Klarheit über sich selbst suchen und ihre
              Beziehungen bewusster gestalten möchten.
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

      {/* Topics */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              Coaching-Themen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Womit ich Ihnen helfen kann
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jeder Mann hat seine eigene Geschichte und seine eigenen Ziele. Ich begleite Sie
              auf Ihrem individuellen Weg.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {topics.map((topic) => (
              <div
                key={topic.title}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <svg className="w-5 h-5 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{topic.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{topic.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How I Work */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
                  Meine Arbeitsweise
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  So arbeiten wir zusammen
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mein Coaching für Männer ist direkt, respektvoll und lösungsorientiert.
                  Kein Psycho-Kram, sondern konkrete Werkzeuge für echte Veränderung.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {workingStyle.map((item) => (
                  <div key={item.title} className="bg-card border border-border rounded-xl p-4">
                    <h3 className="font-semibold text-foreground mb-1 text-sm">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/assets/Waldweg.png"
                alt="Coaching Atmosphäre"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bereit für den nächsten Schritt?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Machen Sie den ersten Schritt und buchen Sie Ihr kostenloses Kennenlerngespräch.
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
