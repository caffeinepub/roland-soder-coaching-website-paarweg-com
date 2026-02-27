import { Link } from '@tanstack/react-router';

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative min-h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/Startseite.png"
            alt="Paarweg Startseite"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-2xl">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-4">
              Paar- & Einzelcoaching in Basel
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Ihr Weg zu einer{' '}
              <span className="text-primary">erfüllten Beziehung</span>
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 leading-relaxed mb-8">
              Professionelles Coaching für Paare und Einzelpersonen. Ich begleite Sie
              auf dem Weg zu mehr Verbindung, Verständnis und Lebensfreude.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 text-base"
              >
                Kostenloses Kennenlerngespräch buchen
              </Link>
              <Link
                to="/couples"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground rounded-full font-medium hover:bg-muted transition-colors duration-200 text-base"
              >
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              Meine Angebote
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Coaching für jeden Lebensbereich
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ob als Paar oder als Einzelperson – ich unterstütze Sie dabei, Ihre Ziele zu erreichen
              und Ihre Beziehungen zu stärken.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Couples */}
            <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/Paar_einfuehlsamer_Blick.png"
                  alt="Paarberatung"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Paarberatung</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Gemeinsam neue Wege finden. Ich helfe Ihnen, Kommunikationsmuster zu erkennen
                  und Ihre Beziehung auf ein neues Fundament zu stellen.
                </p>
                <Link
                  to="/couples"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                >
                  Mehr erfahren
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Women */}
            <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/Frau_nachdenklich.png"
                  alt="Coaching für Frauen"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Coaching für Frauen</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Stärken Sie Ihre innere Stimme. Entdecken Sie Ihre Ressourcen und gestalten
                  Sie Ihr Leben und Ihre Beziehungen bewusster.
                </p>
                <Link
                  to="/women"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                >
                  Mehr erfahren
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>

            {/* Men */}
            <div className="group bg-card rounded-2xl overflow-hidden border border-border hover:shadow-lg transition-all duration-300">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/Mann_nachdenklich.png"
                  alt="Coaching für Männer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-foreground mb-3">Coaching für Männer</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                  Klarheit gewinnen und Stärke zeigen. Ich begleite Sie dabei, Ihre Rolle in
                  Beziehungen neu zu definieren und authentisch zu leben.
                </p>
                <Link
                  to="/men"
                  className="text-sm font-medium text-primary hover:text-primary/80 transition-colors inline-flex items-center gap-1"
                >
                  Mehr erfahren
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden">
                <img
                  src="/assets/Ich.jpg"
                  alt="Roland Soder"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 bg-primary text-primary-foreground rounded-2xl p-4 shadow-lg">
                <p className="text-2xl font-bold">10+</p>
                <p className="text-xs font-medium opacity-90">Jahre Erfahrung</p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
                  Über mich
                </p>
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                  Roland Soder
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Als zertifizierter Coach und Berater begleite ich Menschen und Paare auf ihrem
                  Weg zu mehr Erfüllung und Verbindung. Mein Ansatz verbindet systemisches Denken
                  mit praktischen Werkzeugen für den Alltag.
                </p>
              </div>
              <ul className="space-y-3">
                {[
                  'Zertifizierter Paar- und Einzelcoach',
                  'Systemische Beratung & NLP',
                  'Über 10 Jahre Erfahrung',
                  'Praxis in Basel, Sitzungen auch online',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-foreground/80">
                    <span className="w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                      <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                to="/about"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-border text-foreground rounded-full font-medium hover:bg-muted transition-colors duration-200"
              >
                Mehr über mich
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-background">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              So funktioniert es
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ihr Weg zum Coaching
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              In wenigen Schritten zu mehr Klarheit und Verbindung.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Kennenlerngespräch',
                desc: 'Kostenloses 30-minütiges Gespräch via Zoom oder WhatsApp, um Ihre Situation kennenzulernen.',
              },
              {
                step: '02',
                title: 'Analyse & Ziele',
                desc: 'Gemeinsam definieren wir Ihre Ziele und entwickeln einen individuellen Coaching-Plan.',
              },
              {
                step: '03',
                title: 'Coaching-Sitzungen',
                desc: 'Regelmässige Sitzungen in Basel oder online, angepasst an Ihren Rhythmus und Ihre Bedürfnisse.',
              },
              {
                step: '04',
                title: 'Nachhaltige Veränderung',
                desc: 'Praktische Werkzeuge und Strategien für dauerhaften Wandel in Ihrem Alltag.',
              },
            ].map((item) => (
              <div key={item.step} className="text-center space-y-4">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-lg font-bold text-primary">{item.step}</span>
                </div>
                <h3 className="text-lg font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary/5 border-y border-primary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Buchen Sie jetzt Ihr kostenloses Kennenlerngespräch und erfahren Sie,
            wie Coaching Ihr Leben verändern kann.
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
