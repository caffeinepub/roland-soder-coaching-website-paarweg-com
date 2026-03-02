import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import MobileReadMore from '@/components/MobileReadMore';

const CALENDLY_URL = 'https://calendly.com/paarweg-info/paarweg-session-90-min-klon';

export default function WomenPage() {
  const openCalendly = () => window.open(CALENDLY_URL, '_blank');

  useEffect(() => {
    document.title = 'Coaching für Frauen in Beziehungen – Raum für Ihre Perspektive | PaarWeg';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Coaching für Frauen in Beziehungen – Raum für Ihre Perspektive, Ihre Bedürfnisse, Ihre Entwicklung. Buchen Sie ein kostenloses Kennenlerngespräch.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/frauen');

    const ogTags = [
      { property: 'og:title', content: 'Coaching für Frauen in Beziehungen | PaarWeg' },
      { property: 'og:description', content: 'Coaching für Frauen in Beziehungen – Raum für Ihre Perspektive, Ihre Bedürfnisse, Ihre Entwicklung.' },
      { property: 'og:url', content: 'https://www.paarweg.com/frauen' },
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
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10">
        <div className="container mx-auto px-4 py-20 md:px-6 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Coaching für Frauen in Beziehungen
                </h1>
                <MobileReadMore collapsedHeight="180px">
                  <div className="space-y-4 text-lg text-muted-foreground md:text-xl">
                    <p>
                      Sie geben viel – in der Beziehung, im Beruf, im Alltag.
                      Manchmal zu viel. Manchmal auf Kosten von sich selbst.
                      Und irgendwann fragen Sie sich: Was brauche ich eigentlich?
                    </p>
                    <p className="font-medium text-foreground">
                      Coaching für Frauen bietet Ihnen Raum für Ihre Perspektive.
                      Für Ihre Bedürfnisse. Für Ihre Entwicklung.
                    </p>
                  </div>
                </MobileReadMore>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="text-base">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kennenlerngespräch buchen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <img
                src="/assets/Frau_nachdenklich.png"
                alt="Nachdenkliche Frau am Fenster – Coaching für Frauen in Beziehungsfragen"
                className="rounded-2xl object-cover shadow-2xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Typische Situationen Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Typische Situationen
            </h2>
            <MobileReadMore collapsedHeight="200px">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Sie fühlen sich in Ihrer Beziehung nicht gesehen. Ihre Bedürfnisse kommen zu kurz.
                  Sie reden – aber es ändert sich nichts. Oder Sie reden gar nicht mehr,
                  weil Sie wissen, dass es wieder im Streit endet.
                </p>
                <p>
                  Oder Sie stehen vor einer Entscheidung: Bleiben oder gehen?
                  Sie wissen nicht, was Sie wollen – oder Sie wissen es, aber haben Angst vor dem nächsten Schritt.
                </p>
                <p>
                  Vielleicht läuft Ihre Beziehung gut – aber Sie spüren, dass Sie als Frau mehr sein könnten.
                  Mehr präsent. Mehr verbunden. Mehr Sie selbst.
                </p>
                <p className="font-medium text-foreground">
                  Coaching für Frauen ist kein Zeichen von Schwäche. Es ist ein Zeichen von Stärke –
                  die Bereitschaft, für sich selbst einzustehen und Verantwortung zu übernehmen.
                </p>
              </div>
            </MobileReadMore>
          </div>
        </div>
      </section>

      {/* Was Coaching bietet Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Was Coaching Ihnen bietet
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Klarheit</h3>
                <p className="text-muted-foreground">
                  Verstehen, was Sie wirklich wollen. Was Ihnen wichtig ist.
                  Was Sie brauchen – in der Beziehung und im Leben.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Verbindung</h3>
                <p className="text-muted-foreground">
                  Wieder in echten Kontakt kommen – mit sich selbst und mit Ihrem Partner.
                  Verbindung, die trägt und nährt.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Entwicklung</h3>
                <p className="text-muted-foreground">
                  Wachsen als Frau – in der Beziehung und im Leben.
                  Den Mut, alte Muster zu hinterfragen und neue Wege zu gehen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Themen Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Themen im Coaching für Frauen
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: 'Kommunikation in der Beziehung', desc: 'Wie Sie ansprechen, was Sie bewegt – ohne Eskalation.' },
                { title: 'Eigene Bedürfnisse erkennen', desc: 'Was Sie wirklich brauchen – und wie Sie dafür eintreten.' },
                { title: 'Grenzen setzen', desc: 'Wie Sie Nein sagen können, ohne sich schuldig zu fühlen.' },
                { title: 'Entscheidungen treffen', desc: 'Wenn Sie nicht wissen, ob Sie bleiben oder gehen sollen.' },
                { title: 'Selbstwert und Selbstbild', desc: 'Wie Sie sich selbst sehen – und wie das Ihre Beziehungen beeinflusst.' },
                { title: 'Persönliche Entwicklung', desc: 'Wachsen als Frau – in der Beziehung und im Leben.' },
              ].map(({ title, desc }) => (
                <Card key={title} className="border-2">
                  <CardContent className="pt-6">
                    <div className="flex items-start gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <div>
                        <h3 className="mb-1 font-semibold">{title}</h3>
                        <p className="text-sm text-muted-foreground">{desc}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Buchen Sie ein kostenloses Kennenlerngespräch
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Lernen Sie mich kennen und erfahren Sie, wie ich Sie auf Ihrem Weg begleiten kann.
              Das erste Gespräch ist kostenlos und unverbindlich.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base">
                <a
                  href={CALENDLY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Kennenlerngespräch buchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
