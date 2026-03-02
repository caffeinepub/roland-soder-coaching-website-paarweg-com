import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Eye, Sparkles, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import MobileReadMore from '@/components/MobileReadMore';

export default function WomenPage() {
  useEffect(() => {
    document.title = 'Coaching für Frauen in Beziehungen – Raum für Sie | PaarWeg';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Coaching für Frauen in Beziehungen – wenn Sie sich erschöpft, unsichtbar oder unverstanden fühlen. Raum für Ihre Perspektive, Ihre Bedürfnisse, Ihre Entwicklung.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/frauen');

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Coaching für Frauen in Beziehungen | PaarWeg' },
      { property: 'og:description', content: 'Coaching für Frauen in Beziehungen – wenn Sie sich erschöpft, unsichtbar oder unverstanden fühlen. Raum für Ihre Perspektive, Ihre Bedürfnisse, Ihre Entwicklung.' },
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
                <MobileReadMore collapsedHeight="200px">
                  <div className="space-y-4 text-lg text-muted-foreground md:text-xl">
                    <p>
                      Wenn Sie das Gefühl haben, immer wieder dieselben Gespräche zu führen – 
                      und nichts ändert sich. Wenn Sie sich erschöpft fühlen vom Erklären, vom Kämpfen, 
                      vom Hoffen. Wenn Sie sich fragen, ob Sie zu viel wollen oder zu wenig bekommen.
                    </p>
                    <p>
                      Wenn Sie spüren, dass Sie sich selbst verloren haben – in der Beziehung, 
                      in der Rolle, in den Erwartungen. Wenn Sie nicht mehr wissen, was Sie wollen. 
                      Wenn Sie Klarheit brauchen – über sich selbst, über Ihre Beziehung, über das, was Sie wirklich brauchen.
                    </p>
                    <p className="font-medium text-foreground">
                      Hier ist Raum für Sie. Für Ihre Perspektive. Für Ihre Bedürfnisse. 
                      Für die Frage: Was brauche ich, um in dieser Beziehung ich selbst zu sein?
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
                src="/assets/Frau_nachdenklich.png"
                alt="Nachdenkliche Frau – Coaching für Frauen in Beziehungsfragen"
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
              Typische Themen im Coaching für Frauen
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Erschöpfung</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie das Gefühl haben, immer wieder dieselben Gespräche zu führen – und nichts ändert sich. 
                        Wenn Sie sich erschöpft fühlen vom Erklären, vom Kämpfen, vom Hoffen.
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
                      <h3 className="mb-2 font-semibold">Selbstverlust</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie spüren, dass Sie sich selbst verloren haben – in der Beziehung, in der Rolle, in den Erwartungen. 
                        Wenn Sie nicht mehr wissen, was Sie wollen.
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
                        Wenn Gespräche immer wieder eskalieren oder im Schweigen enden. 
                        Wenn Sie nicht gehört werden. Wenn Sie nicht wissen, wie Sie ansprechen sollen, was Sie bewegt.
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
                      <h3 className="mb-2 font-semibold">Grenzen</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie Schwierigkeiten haben, Grenzen zu setzen. Wenn Sie sich schuldig fühlen, 
                        wenn Sie Nein sagen. Wenn Sie sich fragen, ob Ihre Bedürfnisse berechtigt sind.
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
              Wie ich mit Frauen arbeite
            </h2>
            <MobileReadMore collapsedHeight="220px">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Im Coaching für Frauen geht es darum, einen Raum zu schaffen, in dem Sie wirklich gehört werden. 
                  In dem Ihre Perspektive zählt. In dem Sie nicht erklären oder rechtfertigen müssen, 
                  was Sie fühlen. In dem Sie herausfinden können, was Sie wirklich brauchen.
                </p>
                <p>
                  Ich höre zu. Ich stelle Fragen. Ich benenne, was ich sehe – auch wenn es unangenehm ist. 
                  Ich helfe Ihnen dabei, Ihre eigenen Muster zu erkennen – nicht um Sie zu kritisieren, 
                  sondern um Ihnen mehr Wahlmöglichkeiten zu geben. Mehr Freiheit. Mehr Klarheit.
                </p>
                <p>
                  Wir schauen auf Ihre Bedürfnisse, auf Ihre Grenzen, auf das, was Sie zurückhält. 
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

      {/* Was Frauen im Coaching finden Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Was Frauen im Coaching finden
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Drei zentrale Werte, die den Weg zu mehr Klarheit und Verbindung ebnen
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Eye className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Sichtbarkeit</h3>
                <p className="text-muted-foreground">
                  Gehört werden. Gesehen werden. Nicht mehr erklären müssen, was Sie fühlen. 
                  Sichtbarkeit beginnt damit, dass Sie sich selbst wieder sehen – klar und ohne Selbstkritik.
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
                  Wieder echte Nähe herstellen. Sich wirklich begegnen – nicht nur nebeneinander existieren. 
                  Verbindung entsteht durch Präsenz, durch Ehrlichkeit, durch den Mut, sich zu zeigen.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Entwicklung</h3>
                <p className="text-muted-foreground">
                  Wachsen – als Frau und als Partnerin. Entwicklung bedeutet Bewegung. 
                  Den Mut, alte Muster zu hinterfragen und neue Wege zu gehen. Für sich selbst, ohne sich aufzugeben.
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
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <blockquote className="space-y-4 text-center">
                  <p className="text-lg italic text-muted-foreground md:text-xl">
                    „Ich hatte das Gefühl, immer wieder gegen eine Wand zu reden. Das Coaching hat mir geholfen 
                    zu verstehen, was ich wirklich brauche – und wie ich es so kommunizieren kann, 
                    dass mein Partner es auch hören kann. Das hat alles verändert."
                  </p>
                  <footer className="text-sm font-medium text-foreground">
                    — Nicole, 42 Jahre
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
