import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Award, BookOpen, Heart } from 'lucide-react';
import MobileReadMore from '@/components/MobileReadMore';

const CALENDLY_URL = 'https://calendly.com/paarweg-info/paarweg-session-90-min-klon';

export default function AboutPage() {
  const openCalendly = () => window.open(CALENDLY_URL, '_blank');

  useEffect(() => {
    document.title = 'Über mich – Roland Soder | PaarWeg';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Lernen Sie Roland Soder kennen – Ihr Coach für Paar- und Einzelcoaching bei PaarWeg in Basel und online.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/ueber-mich');

    const ogTags = [
      { property: 'og:title', content: 'Über mich – Roland Soder | PaarWeg' },
      { property: 'og:description', content: 'Lernen Sie Roland Soder kennen – Ihr Coach für Paar- und Einzelcoaching bei PaarWeg in Basel und online.' },
      { property: 'og:url', content: 'https://www.paarweg.com/ueber-mich' },
    ];
    ogTags.forEach(({ property, content }) => {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('property', property);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, []);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Roland Soder
              </h1>
              <p className="text-xl text-primary font-medium mb-6">
                Coach für Paar- und Einzelcoaching
              </p>
              <MobileReadMore>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Ich begleite Menschen und Paare auf ihrem Weg zu mehr Verbindung, Klarheit und
                  Lebensfreude – einfühlsam, lösungsorientiert und auf Augenhöhe.
                </p>
              </MobileReadMore>
              <Button
                size="lg"
                onClick={openCalendly}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Lernen Sie mich kennen
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
            <div className="flex justify-center">
              <img
                src="/assets/Ich.jpg"
                alt="Roland Soder – Coach bei PaarWeg"
                className="rounded-2xl shadow-xl w-full max-w-sm object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Biography */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Mein Hintergrund</h2>
          <MobileReadMore>
            <div className="space-y-5 text-muted-foreground leading-relaxed">
              <p>
                Mein Weg zum Coaching begann durch eigene Erfahrungen in Beziehungen und die
                Erkenntnis, wie viel Potenzial in jedem Menschen steckt – wenn er den richtigen
                Rahmen und die richtige Unterstützung bekommt.
              </p>
              <p>
                Ich habe mich intensiv mit systemischen Coaching-Methoden, Kommunikationspsychologie
                und wertorientierter Beratung auseinandergesetzt. Diese Grundlagen verbinde ich mit
                einem tiefen Verständnis für menschliche Beziehungsdynamiken.
              </p>
              <p>
                In meiner Arbeit mit Paaren und Einzelpersonen erlebe ich immer wieder, wie
                scheinbar festgefahrene Situationen sich verändern können – wenn Menschen bereit
                sind, neue Perspektiven einzunehmen und aktiv an sich zu arbeiten.
              </p>
              <p>
                Mein Ansatz ist wertorientiert: Ich helfe Ihnen, Ihre eigenen Werte zu klären und
                danach zu handeln. Denn nachhaltige Veränderung entsteht nicht durch äusseren Druck,
                sondern durch innere Überzeugung.
              </p>
              <p>
                Ich lebe und arbeite in Basel und biete meine Dienstleistungen sowohl vor Ort als
                auch online an – damit Sie flexibel entscheiden können, was für Sie am besten passt.
              </p>
            </div>
          </MobileReadMore>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-12">
            Meine Werte
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="h-10 w-10 text-primary" />,
                title: 'Empathie',
                desc: 'Ich begegne jedem Menschen mit echtem Interesse und Einfühlungsvermögen.',
              },
              {
                icon: <BookOpen className="h-10 w-10 text-primary" />,
                title: 'Klarheit',
                desc: 'Ich helfe Ihnen, Klarheit über sich selbst und Ihre Situation zu gewinnen.',
              },
              {
                icon: <Award className="h-10 w-10 text-primary" />,
                title: 'Wirksamkeit',
                desc: 'Mein Fokus liegt auf nachhaltigen Veränderungen, die in Ihrem Alltag wirken.',
              },
            ].map((value) => (
              <div
                key={value.title}
                className="p-8 rounded-xl border border-border bg-card text-center hover:shadow-md transition-shadow"
              >
                <div className="flex justify-center mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold text-foreground mb-3">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Important Notice */}
      <section className="py-12 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800 rounded-xl p-6">
            <h3 className="text-base font-semibold text-foreground mb-3">Wichtiger Hinweis</h3>
            <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
              <p>
                Coaching ist keine Psychotherapie und ersetzt keine medizinische oder
                therapeutische Behandlung. Wenn Sie unter psychischen Erkrankungen leiden, wenden
                Sie sich bitte an einen Arzt oder Psychotherapeuten.
              </p>
              <p>
                Meine Arbeit richtet sich an Menschen, die grundsätzlich psychisch gesund sind und
                an ihrer persönlichen Entwicklung, ihren Beziehungen oder ihrer Lebensgestaltung
                arbeiten möchten.
              </p>
              <p>
                Bei akuten Krisen oder dem Verdacht auf psychische Erkrankungen empfehle ich
                ausdrücklich, professionelle therapeutische Hilfe in Anspruch zu nehmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-6">
            Lernen Sie mich kennen
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Ich freue mich darauf, Sie kennenzulernen und gemeinsam herauszufinden, wie ich Ihnen
            helfen kann.
          </p>
          <Button
            size="lg"
            onClick={openCalendly}
            className="bg-primary text-primary-foreground hover:bg-primary/90 text-base px-10"
          >
            Kennenlerngespräch buchen
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </div>
  );
}
