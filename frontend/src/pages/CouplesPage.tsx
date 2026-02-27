import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Users, Compass, ArrowRight, CheckCircle2 } from 'lucide-react';
import { useEffect } from 'react';
import MobileReadMore from '@/components/MobileReadMore';

export default function CouplesPage() {
  useEffect(() => {
    document.title = 'Paarcoaching & Beziehungsbegleitung für Paare – in jeder Phase | PaarWeg';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Paarcoaching für Paare in jeder Phase – von der Krise bis zur bewussten Weiterentwicklung. Online-Begleitung für mehr Nähe, Klarheit und gemeinsames Wachstum.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/paare');

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Paarcoaching & Beziehungsbegleitung für Paare | PaarWeg' },
      { property: 'og:description', content: 'Paarcoaching für Paare in jeder Phase – von der Krise bis zur bewussten Weiterentwicklung. Online-Begleitung für mehr Nähe, Klarheit und gemeinsames Wachstum.' },
      { property: 'og:url', content: 'https://www.paarweg.com/paare' },
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
                  Paarcoaching – für Paare in jeder Phase
                </h1>
                <MobileReadMore collapsedHeight="180px">
                  <div className="space-y-4 text-lg text-muted-foreground md:text-xl">
                    <p>
                      Ob Sie gerade eine schwierige Phase durchleben oder Ihre Beziehung bewusst weiterentwickeln möchten – 
                      Paarcoaching bietet Raum für beide Perspektiven. Für Klarheit, Verbindung und gemeinsames Wachstum.
                    </p>
                    <p className="font-medium text-foreground">
                      Hier geht es nicht um Schuld oder Richtig und Falsch. Hier geht es darum, einander wieder zu verstehen, 
                      neue Wege zu finden und gemeinsam zu entscheiden, wie es weitergehen soll.
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
                src="/assets/Paar_einfuehlsamer_Blick-1.png"
                alt="Paar blickt sich einfühlsam an – Symbol für achtsames Paarcoaching"
                className="rounded-2xl object-cover shadow-2xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Für wen ist Paarcoaching? Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Für wen ist Paarcoaching?
            </h2>
            <MobileReadMore collapsedHeight="220px">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Paarcoaching ist für Paare, die bereit sind hinzuschauen. Die nicht aufgeben wollen, 
                  aber auch nicht weitermachen können wie bisher. Die spüren, dass etwas fehlt – 
                  oder dass mehr möglich ist.
                </p>
                <p>
                  Es ist für Paare in der Krise, die nicht wissen, wie sie wieder zueinander finden sollen. 
                  Für Paare, die sich auseinandergelebt haben und sich fragen, ob es noch einen gemeinsamen Weg gibt. 
                  Für Paare, die immer wieder die gleichen Konflikte haben und nicht wissen, wie sie da rauskommen.
                </p>
                <p>
                  Aber auch für Paare, die in einer stabilen Beziehung leben und neue Impulse suchen. 
                  Die ihre Beziehung bewusst gestalten wollen. Die präventiv investieren möchten, 
                  bevor es schwierig wird. Die gemeinsam wachsen wollen.
                </p>
                <p className="font-medium text-foreground">
                  Paarcoaching ist für alle, die bereit sind, Verantwortung zu übernehmen – 
                  für sich selbst und für die Beziehung. Die bereit sind, ehrlich hinzuschauen 
                  und auch unangenehme Wahrheiten anzuerkennen.
                </p>
              </div>
            </MobileReadMore>
          </div>
        </div>
      </section>

      {/* Typische Themen Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Typische Themen im Paarcoaching
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Kommunikation</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Gespräche zu Streit werden oder im Schweigen enden. 
                        Wenn Sie sich nicht mehr verstanden fühlen oder nicht wissen, wie Sie ansprechen sollen, was Sie bewegt.
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
                      <h3 className="mb-2 font-semibold">Nähe und Distanz</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie sich fremd geworden sind. Wenn die Nähe fehlt, aber Sie nicht wissen, wie Sie sie zurückgewinnen. 
                        Wenn einer mehr Nähe sucht und der andere mehr Raum braucht.
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
                      <h3 className="mb-2 font-semibold">Konflikte</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn die gleichen Themen immer wiederkehren. Wenn Sie nicht wissen, wie Sie Konflikte konstruktiv lösen können. 
                        Wenn Streit eskaliert oder vermieden wird.
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
                      <h3 className="mb-2 font-semibold">Vertrauen</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Vertrauen verloren gegangen ist – durch Affären, Lügen oder andere Verletzungen. 
                        Wenn Sie nicht wissen, ob Sie wieder vertrauen können.
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
                      <h3 className="mb-2 font-semibold">Lebensphasen</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn sich durch Kinder, Beruf oder andere Veränderungen die Beziehung verändert hat. 
                        Wenn Sie sich neu orientieren müssen.
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
                      <h3 className="mb-2 font-semibold">Weiterentwicklung</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie gemeinsam wachsen möchten. Wenn Sie neue Impulse suchen. 
                        Wenn Sie Ihre Beziehung bewusst gestalten wollen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Wie läuft Paarcoaching ab? Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Wie läuft Paarcoaching ab?
            </h2>
            <MobileReadMore collapsedHeight="200px">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Paarcoaching beginnt mit einem Erstgespräch, in dem wir klären, worum es geht, 
                  was Sie sich wünschen und ob ich die richtige Begleitung für Sie bin. 
                  Dieses Gespräch ist unverbindlich und kostet 60 CHF für 60 Minuten.
                </p>
                <p>
                  Danach arbeiten wir in regelmäßigen Sitzungen – meist alle 2-4 Wochen, je nach Bedarf. 
                  Eine Sitzung dauert 90 Minuten und kostet 190 CHF. Alle Sitzungen finden online statt, 
                  Sie benötigen lediglich einen Computer oder ein Tablet mit Kamera.
                </p>
                <p>
                  Im Coaching schaffen wir Raum für beide Perspektiven. Ich höre zu, stelle Fragen, 
                  benenne, was ich sehe – und helfe Ihnen dabei, einander wieder zu verstehen. 
                  Wir schauen auf Muster, auf Bedürfnisse, auf das, was zwischen Ihnen steht. 
                  Und wir entwickeln konkrete Schritte, wie es weitergehen kann.
                </p>
                <p className="font-medium text-foreground">
                  Wie lange ein Coaching dauert, hängt von Ihnen ab. Manche Paare kommen für 3-5 Sitzungen, 
                  andere begleite ich über mehrere Monate. Wichtig ist: Sie entscheiden, wie lange Sie bleiben möchten.
                </p>
              </div>
            </MobileReadMore>
          </div>
        </div>
      </section>

      {/* Was Paare im Coaching finden Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Was Paare im Coaching finden
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Drei zentrale Werte, die den Weg zu einer tragfähigen Beziehung ebnen
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
                  Verstehen, was wirklich ist. Nicht was sein sollte, nicht was war – sondern was jetzt ist. 
                  Klarheit über eigene Bedürfnisse, über Muster, über das, was zwischen Ihnen steht.
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
                  Wieder zueinander finden. Sich gesehen fühlen. Einander wirklich begegnen – 
                  nicht nur nebeneinander existieren. Verbindung entsteht durch echte Präsenz und den Mut, verletzlich zu sein.
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
                  Wachsen – als Paar und als Einzelne. Entwicklung bedeutet Bewegung. 
                  Den Mut, alte Muster zu hinterfragen und neue Wege zu gehen. Gemeinsam, ohne sich selbst aufzugeben.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <Card className="border-2 bg-muted/30">
              <CardContent className="pt-8">
                <div className="mb-6 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                    <Heart className="h-8 w-8 text-primary" />
                  </div>
                </div>
                <blockquote className="space-y-4 text-center">
                  <p className="text-lg italic text-muted-foreground md:text-xl">
                    „Wir waren kurz davor aufzugeben. Das Coaching hat uns geholfen zu verstehen, 
                    was wirklich zwischen uns steht – und dass wir beide einen Anteil daran haben. 
                    Heute reden wir wieder miteinander. Nicht perfekt, aber echt."
                  </p>
                  <footer className="text-sm font-medium text-foreground">
                    — Paar, 38 und 41 Jahre
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
