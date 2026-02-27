import { Link } from '@tanstack/react-router';

const qualifications = [
  {
    title: 'Systemischer Coach',
    institution: 'Zertifizierte Ausbildung',
    description: 'Systemische Beratung und Coaching nach anerkannten Standards.',
  },
  {
    title: 'NLP Practitioner',
    institution: 'NLP-Ausbildung',
    description: 'Neurolinguistisches Programmieren für nachhaltige Veränderung.',
  },
  {
    title: 'Paarberater',
    institution: 'Spezialisierung Paarberatung',
    description: 'Fundierte Ausbildung in Paar- und Beziehungsberatung.',
  },
  {
    title: 'Kommunikationstrainer',
    institution: 'Gewaltfreie Kommunikation',
    description: 'Ausbildung in gewaltfreier Kommunikation nach Marshall Rosenberg.',
  },
];

const values = [
  {
    title: 'Empathie',
    description: 'Ich begegne jedem Menschen mit echtem Interesse und Einfühlungsvermögen.',
  },
  {
    title: 'Vertraulichkeit',
    description: 'Alles, was in unseren Sitzungen besprochen wird, bleibt absolut vertraulich.',
  },
  {
    title: 'Ressourcenorientierung',
    description: 'Ich glaube an die Stärken und Ressourcen jedes Menschen.',
  },
  {
    title: 'Lösungsfokus',
    description: 'Wir schauen nach vorne und entwickeln gemeinsam praktische Lösungen.',
  },
];

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
                  Über mich
                </p>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  Roland Soder
                </h1>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Ich bin Roland Soder, zertifizierter Paar- und Einzelcoach mit Praxis in Basel.
                  Seit über 10 Jahren begleite ich Menschen und Paare auf ihrem Weg zu mehr
                  Erfüllung, Verbindung und Lebensfreude.
                </p>
              </div>
              <p className="text-foreground/80 leading-relaxed">
                Mein Ansatz ist systemisch, lösungsorientiert und immer auf Ihre individuellen
                Bedürfnisse ausgerichtet. Ich glaube daran, dass jeder Mensch die Ressourcen
                in sich trägt, die er für positive Veränderungen braucht – manchmal braucht
                es nur einen erfahrenen Begleiter, der hilft, diese zu entdecken.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                In meiner Arbeit verbinde ich bewährte Methoden aus der systemischen Beratung,
                dem NLP und der gewaltfreien Kommunikation mit einem tiefen Verständnis für
                menschliche Beziehungsdynamiken.
              </p>
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                Kostenloses Kennenlerngespräch buchen
              </Link>
            </div>
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/assets/Ich.jpg"
                  alt="Roland Soder – Paar- und Einzelcoach"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Qualifications */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              Ausbildung & Qualifikationen
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Meine Qualifikationen
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Fundierte Ausbildungen bilden die Grundlage meiner Arbeit.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {qualifications.map((q) => (
              <div
                key={q.title}
                className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-lg font-semibold text-foreground mb-1">{q.title}</h3>
                <p className="text-sm text-primary font-medium mb-3">{q.institution}</p>
                <p className="text-sm text-muted-foreground leading-relaxed">{q.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              Meine Werte
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Was mich antreibt
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => (
              <div key={v.title} className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold text-lg">
                    {v.title.charAt(0)}
                  </span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{v.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Lernen Sie mich kennen
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Im kostenlosen Kennenlerngespräch erfahren Sie mehr über meine Arbeitsweise
            und wir schauen gemeinsam, ob wir gut zusammenpassen.
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
