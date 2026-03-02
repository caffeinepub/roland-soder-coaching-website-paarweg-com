import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Compass, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import MobileReadMore from '@/components/MobileReadMore';

const CALENDLY_URL = 'https://calendly.com/paarweg-info/paarweg-session-90-min-klon';

export default function MenPage() {
  useEffect(() => {
    document.title = 'Coaching für Männer in Beziehungen – Raum für Klarheit | PaarWeg';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Coaching für Männer in Beziehungen – wenn Sie spüren, dass etwas nicht stimmt, aber nicht wissen, wie Sie es ansprechen sollen. Raum für Klarheit, Orientierung und echte Verbindung.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/maenner');

    const ogTags = [
      { property: 'og:title', content: 'Coaching für Männer in Beziehungen | PaarWeg' },
      { property: 'og:description', content: 'Coaching für Männer in Beziehungen – wenn Sie spüren, dass etwas nicht stimmt, aber nicht wissen, wie Sie es ansprechen sollen.' },
      { property: 'og:url', content: 'https://www.paarweg.com/maenner' },
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
                  Coaching für Männer in Beziehungen
                </h1>
                <MobileReadMore collapsedHeight="180px">
                  <div className="space-y-4 text-lg text-muted-foreground md:text-xl">
                    <p>
                      Sie spüren, dass etwas nicht stimmt – aber Sie wissen nicht genau, was.
                      Oder Sie wissen es, aber nicht, wie Sie es ansprechen sollen.
                      Oder Sie haben es angesprochen – und es hat nichts verändert.
                    </p>
                    <p className="font-medium text-foreground">
                      Coaching für Männer bietet Ihnen Raum, um Klarheit zu gewinnen.
                      Über sich selbst. Über Ihre Beziehung. Über das, was Sie wirklich wollen.
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
                src="/assets/Mann_nachdenklich.png"
                alt="Nachdenklicher Mann – Coaching für Männer in Beziehungsfragen"
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
                  Sie fühlen sich in Ihrer Beziehung unverstanden. Gespräche enden im Streit oder im Schweigen.
                  Sie ziehen sich zurück – nicht weil Sie es wollen, sondern weil Sie nicht wissen, wie es anders gehen soll.
                </p>
                <p>
                  Oder Sie stehen vor einer Entscheidung: Trennung oder Neuanfang?
                  Sie wissen nicht, was Sie wollen – oder Sie wissen es, aber haben Angst vor den Konsequenzen.
                </p>
                <p>
                  Vielleicht läuft Ihre Beziehung gut – aber Sie spüren, dass Sie als Mann mehr sein könnten.
                  Mehr präsent. Mehr verbunden. Mehr Sie selbst.
                </p>
                <p className="font-medium text-foreground">
                  Coaching für Männer ist kein Zeichen von Schwäche. Es ist ein Zeichen von Stärke –
                  die Bereitschaft, hinzuschauen und Verantwortung zu übernehmen.
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
                  <Compass className="h-7 w-7 text-primary" />
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
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Orientierung</h3>
                <p className="text-muted-foreground">
                  Einen klaren Blick auf Ihre Situation. Konkrete Schritte, wie es weitergehen kann.
                  Ohne Urteile, ohne Druck.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Users className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Verbindung</h3>
                <p className="text-muted-foreground">
                  Wieder in echten Kontakt kommen – mit sich selbst und mit Ihrem Partner oder Ihrer Partnerin.
                  Verbindung, die trägt.
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
              Themen im Coaching für Männer
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              {[
                { title: 'Kommunikation in der Beziehung', desc: 'Wie Sie ansprechen, was Sie bewegt – ohne Eskalation.' },
                { title: 'Nähe und Distanz', desc: 'Wie Sie Verbindung aufbauen, ohne sich selbst zu verlieren.' },
                { title: 'Konflikte und Muster', desc: 'Warum immer wieder die gleichen Themen auftauchen – und wie Sie das ändern.' },
                { title: 'Entscheidungen treffen', desc: 'Wenn Sie nicht wissen, ob Sie bleiben oder gehen sollen.' },
                { title: 'Rolle als Mann', desc: 'Was es für Sie bedeutet, ein guter Partner, Vater oder Mensch zu sein.' },
                { title: 'Persönliche Entwicklung', desc: 'Wachsen als Mann – in der Beziehung und im Leben.' },
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
