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
                      Wenn Sie sich zurückziehen, weil Gespräche immer wieder eskalieren. 
                      Wenn Sie sich fragen, ob Sie überhaupt noch der richtige Partner sind.
                    </p>
                    <p>
                      Wenn Sie sich wünschen, dass es besser wird – aber nicht wissen, wie. 
                      Wenn Sie Verantwortung übernehmen wollen, aber nicht wissen, wo Sie anfangen sollen. 
                      Wenn Sie Klarheit brauchen – über sich selbst, über Ihre Beziehung, über das, was Sie wirklich wollen.
                    </p>
                    <p className="font-medium text-foreground">
                      Hier ist Raum für Sie. Ohne Urteile. Ohne Vorwürfe. 
                      Für die Frage: Was brauche ich, um ein guter Partner zu sein – und ein guter Mensch?
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
                      <h3 className="mb-2 font-semibold">Kommunikation</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Gespräche immer wieder eskalieren oder im Schweigen enden. 
                        Wenn Sie nicht wissen, wie Sie ansprechen sollen, was Sie bewegt. 
                        Wenn Sie sich missverstanden fühlen.
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
                        Wenn Sie sich zurückziehen, weil Sie nicht wissen, wie Sie reagieren sollen. 
                        Wenn Sie Konflikte vermeiden, weil Sie Angst haben, es schlimmer zu machen. 
                        Wenn Sie sich emotional abschneiden.
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
                      <h3 className="mb-2 font-semibold">Verantwortung</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie Verantwortung übernehmen wollen, aber nicht wissen, wie. 
                        Wenn Sie sich fragen, was Sie anders machen könnten. 
                        Wenn Sie bereit sind hinzuschauen – auch bei sich selbst.
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
                      <h3 className="mb-2 font-semibold">Identität</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie sich fragen, wer Sie eigentlich sind – jenseits von Partner, Vater, Versorger. 
                        Wenn Sie sich verloren fühlen. Wenn Sie nicht mehr wissen, was Sie wollen.
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
                        Wenn Sie Klarheit brauchen, um eine Entscheidung treffen zu können. 
                        Wenn Sie sich fragen, ob es noch Hoffnung gibt.
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
                      <h3 className="mb-2 font-semibold">Nähe</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie sich nach echter Verbindung sehnen, aber nicht wissen, wie Sie sie herstellen können. 
                        Wenn Intimität fehlt – emotional oder körperlich. 
                        Wenn Sie sich fremd geworden sind.
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
                  Im Coaching für Männer geht es nicht darum, Ihnen zu sagen, was Sie falsch gemacht haben. 
                  Es geht darum, einen Raum zu schaffen, in dem Sie ehrlich hinschauen können – 
                  ohne Urteile, ohne Vorwürfe. In dem Sie verstehen können, was in Ihnen vorgeht. 
                  In dem Sie Klarheit gewinnen können über das, was Sie wirklich wollen.
                </p>
                <p>
                  Ich höre zu. Ich stelle Fragen. Ich benenne, was ich sehe – auch wenn es unangenehm ist. 
                  Ich fordere Sie heraus, ohne Sie zu überfordern. Ich bin nicht hier, um Ihnen zu sagen, 
                  dass Sie der Schuldige sind. Ich bin hier, um Sie dabei zu unterstützen, 
                  Verantwortung zu übernehmen – für sich selbst und für Ihre Beziehung.
                </p>
                <p>
                  Wir schauen auf Ihre Muster, auf Ihre Bedürfnisse, auf das, was Sie zurückhält. 
                  Wir entwickeln konkrete Strategien, wie Sie anders reagieren können – 
                  in Konflikten, in schwierigen Momenten, in der Alltagsroutine. 
                  Und wir klären, was Sie wirklich wollen – nicht was Sie wollen sollten.
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
              Drei zentrale Werte, die den Weg zu mehr Klarheit und Verbindung ebnen
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Compass className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Orientierung</h3>
                <p className="text-muted-foreground">
                  Verstehen, was wirklich los ist – in der Beziehung und in sich selbst. 
                  Klarheit über eigene Bedürfnisse, über Muster, über das, was Sie wirklich wollen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Stärke</h3>
                <p className="text-muted-foreground">
                  Nicht die Stärke, die alles kontrolliert – sondern die Stärke, die ehrlich hinschaut. 
                  Die Verantwortung übernimmt. Die verletzlich sein kann, ohne sich zu verlieren.
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
                  Wieder echte Nähe herstellen. Sich wirklich begegnen – nicht nur nebeneinander existieren. 
                  Verbindung entsteht durch Präsenz, durch Ehrlichkeit, durch den Mut, sich zu zeigen.
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
                    „Ich dachte, ich müsste das alleine lösen. Dass es ein Zeichen von Schwäche ist, 
                    Hilfe zu suchen. Das Coaching hat mir gezeigt, dass das Gegenteil wahr ist. 
                    Dass es Mut braucht, ehrlich hinzuschauen. Und dass dieser Mut alles verändert."
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
              Buchen Sie ein kostenloses Kennenlerngespräch. Wir klären gemeinsam, 
              ob und wie ich Sie auf Ihrem Weg begleiten kann.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base">
                <a
                  href="https://calendly.com/paarweg-info"
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
