import { Link } from '@tanstack/react-router';

const topics = [
  {
    title: 'Selbstwert & Selbstliebe',
    description: 'Stärken Sie Ihr Selbstbewusstsein und entwickeln Sie eine liebevolle Beziehung zu sich selbst.',
  },
  {
    title: 'Beziehungsmuster erkennen',
    description: 'Verstehen Sie, welche Muster Ihre Beziehungen prägen und wie Sie diese verändern können.',
  },
  {
    title: 'Grenzen setzen',
    description: 'Lernen Sie, klare und respektvolle Grenzen zu setzen – in der Partnerschaft und im Alltag.',
  },
  {
    title: 'Emotionale Intelligenz',
    description: 'Entwickeln Sie ein tieferes Verständnis für Ihre Emotionen und die Ihrer Mitmenschen.',
  },
  {
    title: 'Lebensziele & Werte',
    description: 'Klären Sie, was Ihnen wirklich wichtig ist, und richten Sie Ihr Leben danach aus.',
  },
  {
    title: 'Kommunikation in der Partnerschaft',
    description: 'Verbessern Sie die Kommunikation mit Ihrem Partner und stärken Sie die Verbindung.',
  },
];

const workingStyle = [
  {
    title: 'Empathisch & wertschätzend',
    description: 'Ich begegne Ihnen mit echtem Interesse und ohne Wertung.',
  },
  {
    title: 'Ressourcenorientiert',
    description: 'Wir arbeiten mit Ihren Stärken und bauen auf dem auf, was bereits gut funktioniert.',
  },
  {
    title: 'Praktisch & alltagsnah',
    description: 'Konkrete Übungen und Werkzeuge, die Sie direkt in Ihrem Alltag anwenden können.',
  },
  {
    title: 'Individuell & flexibel',
    description: 'Jede Frau ist einzigartig – mein Coaching passt sich Ihren Bedürfnissen an.',
  },
];

export default function WomenPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/Frau_nachdenklich.png"
            alt="Coaching für Frauen"
            className="w-full h-full object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Einzelcoaching für Frauen
            </p>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight mb-6">
              Ihre innere Stärke entdecken
            </h1>
            <p className="text-lg text-foreground/80 leading-relaxed mb-8">
              Coaching für Frauen, die mehr Klarheit, Selbstvertrauen und Erfüllung in ihrem
              Leben und ihren Beziehungen suchen.
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
              Jede Frau hat ihre eigene Geschichte und ihre eigenen Ziele. Ich begleite Sie
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
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
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
            <div className="aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src="/assets/Waldweg.png"
                alt="Coaching Atmosphäre"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
                  Meine Arbeitsweise
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  So arbeiten wir zusammen
                </h2>
                <p className="text-muted-foreground leading-relaxed">
                  Mein Coaching-Ansatz ist individuell, empathisch und lösungsorientiert.
                  Ich schaffe einen sicheren Raum, in dem Sie sich öffnen und wachsen können.
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
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bereit für Ihre Veränderung?
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
