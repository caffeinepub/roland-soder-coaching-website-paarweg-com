import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Shield, Compass, Users, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import MobileReadMore from '@/components/MobileReadMore';

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

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Coaching für Männer in Beziehungen | PaarWeg' },
      { property: 'og:description', content: 'Coaching für Männer in Beziehungen – wenn Sie spüren, dass etwas nicht stimmt, aber nicht wissen, wie Sie es ansprechen sollen. Raum für Klarheit, Orientierung und echte Verbindung.' },
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
                <MobileReadMore collapsedHeight="200px">
                  <div className="space-y-4 text-lg text-muted-foreground md:text-xl">
                    <p>
                      Wenn Sie spüren, dass etwas nicht stimmt, aber nicht wissen, wie Sie es ansprechen sollen. 
                      Wenn Sie sich hilflos fühlen, weil nichts, was Sie tun, richtig zu sein scheint. 
                      Wenn Sie sich nach echter Verbindung sehnen, aber nicht wissen, wie Sie sie erreichen.
                    </p>
                    <p>
                      Wenn Sie das Gefühl haben, dass Ihre Partnerin Sie nicht versteht. 
                      Wenn Sie sich zurückziehen, weil Sie nicht wissen, was Sie sagen sollen. 
                      Wenn Sie sich fragen, ob Sie überhaupt noch der Richtige sind.
                    </p>
                    <p className="font-medium text-foreground">
                      Hier ist Raum für Ihre Perspektive. Für Ihre Fragen. Für die Suche nach Klarheit – 
                      ohne Vorwürfe, ohne Druck, ohne Erwartungen.
                    </p>
                  </div>
                </MobileReadMore>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Button asChild size="lg" className="text-base">
                  <a
                    href="https://calendly.com/paarweg-info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Erstgespräch buchen
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

      {/* Typische Themen Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Typische Themen im Coaching für Männer
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Hilflosigkeit</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie nicht wissen, was Sie tun sollen. Wenn nichts, was Sie versuchen, zu funktionieren scheint. 
                        Wenn Sie das Gefühl haben, dass Sie es nur noch schlimmer machen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Rückzug</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie sich zurückziehen, weil Sie nicht wissen, was Sie sagen sollen. 
                        Wenn Sie Konflikten aus dem Weg gehen, weil Sie nicht wissen, wie Sie damit umgehen sollen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Kommunikation</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie nicht wissen, wie Sie ansprechen sollen, was Sie bewegt. 
                        Wenn Sie das Gefühl haben, dass Ihre Partnerin Sie nicht versteht. 
                        Wenn Gespräche zu Streit werden.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Erwartungen</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie das Gefühl haben, dass Sie nie genug sind. 
                        Wenn Sie sich fragen, was Ihre Partnerin eigentlich von Ihnen will. 
                        Wenn Sie nicht wissen, wie Sie es richtig machen sollen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Entscheidungen</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie nicht wissen, ob Sie bleiben oder gehen sollen. 
                        Wenn Sie sich fragen, ob es noch Hoffnung gibt. 
                        Wenn Sie Klarheit brauchen, um eine Entscheidung treffen zu können.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Verbindung</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie sich nach echter Nähe sehnen, aber nicht wissen, wie Sie sie erreichen. 
                        Wenn Sie sich fremd geworden sind. Wenn Sie nicht wissen, wie Sie wieder zueinander finden.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Wie ich arbeite Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Wie ich mit Männern arbeite
            </h2>
            <MobileReadMore collapsedHeight="220px">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Im Coaching für Männer geht es nicht darum, Ihnen zu sagen, was Sie falsch machen. 
                  Es geht darum, einen Raum zu schaffen, in dem Sie selbst herausfinden können, was Sie brauchen. 
                  In dem Sie Klarheit gewinnen. In dem Sie verstehen, was zwischen Ihnen und Ihrer Partnerin steht – 
                  und was Sie tun können, um das zu verändern.
                </p>
                <p>
                  Ich höre zu. Ich stelle Fragen. Ich benenne, was ich sehe – auch wenn es unangenehm ist. 
                  Ich fordere Sie heraus, ohne Sie zu verurteilen. Ich bin nicht hier, um Ihnen zu sagen, 
                  dass Sie schuld sind. Ich bin hier, um Sie dabei zu unterstützen, Verantwortung zu übernehmen – 
                  für sich selbst und für die Beziehung.
                </p>
                <p>
                  Wir schauen auf Ihre Bedürfnisse, auf Ihre Muster, auf das, was Sie zurückhält. 
                  Wir entwickeln Strategien, wie Sie für sich einstehen können – ohne sich zurückzuziehen. 
                  Wie Sie kommunizieren können – ohne dass es zu Streit wird. 
                  Wie Sie Nähe herstellen können – ohne sich zu verlieren.
                </p>
                <p className="font-medium text-foreground">
                  Coaching ist keine Therapie. Es ist ein Prozess der Selbstklärung. 
                  Ein Raum, in dem Sie sich selbst wieder begegnen können. 
                  Ein Weg zu mehr Klarheit, Orientierung und innerer Stärke.
                </p>
              </div>
            </MobileReadMore>
          </div>
        </div>
      </section>

      {/* Was Männer im Coaching finden Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Was Männer im Coaching finden
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Drei zentrale Werte, die den Weg zu mehr Klarheit ebnen
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Compass className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Klarheit</h3>
                <p className="text-muted-foreground">
                  Verstehen, was wirklich los ist. Nicht was sein sollte, sondern was ist. 
                  Klarheit über Ihre Bedürfnisse, über Ihre Muster, über das, was Sie wirklich wollen.
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
                  Wissen, was Sie tun können. Konkrete Strategien entwickeln. 
                  Handlungsfähigkeit zurückgewinnen. Nicht mehr hilflos sein, sondern aktiv gestalten.
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
                  Lernen, wie Sie Nähe herstellen können. Wie Sie kommunizieren können, ohne dass es zu Streit wird. 
                  Wie Sie für sich einstehen können, ohne sich zurückzuziehen.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <Card className="border-2 bg-background">
              <CardContent className="pt-8">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <blockquote className="space-y-4 text-center">
                  <p className="text-lg italic text-muted-foreground md:text-xl">
                    „Ich habe gelernt, dass Rückzug keine Lösung ist. Dass ich nicht hilflos bin. 
                    Dass ich etwas tun kann – auch wenn es unangenehm ist. 
                    Das hat unsere Beziehung gerettet."
                  </p>
                  <footer className="text-sm font-medium text-foreground">
                    — Mann, 45 Jahre
                  </footer>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-secondary/5 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Bereit für den nächsten Schritt?
            </h2>
            <p className="text-lg text-muted-foreground md:text-xl">
              Buchen Sie ein unverbindliches Erstgespräch. Wir klären gemeinsam, 
              ob und wie ich Sie auf Ihrem Weg begleiten kann.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base">
                <a
                  href="https://calendly.com/paarweg-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Erstgespräch buchen
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
