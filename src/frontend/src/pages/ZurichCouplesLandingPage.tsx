import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Heart, MessageSquare, Users, ArrowRight, Calendar, CheckCircle2 } from 'lucide-react';

export default function ZurichCouplesLandingPage() {
  useEffect(() => {
    document.title = 'Paarberatung Zürich – Online neue Wege für eure Beziehung finden | PaarWeg';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Online-Paarberatung & Paarcoaching für Paare aus Zürich – flexibel, diskret, persönlich. Professionelle Begleitung für mehr Nähe, Klarheit und gemeinsame Entwicklung.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/paarberatung-zuerich');

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Paarberatung Zürich – Online neue Wege für eure Beziehung finden | PaarWeg' },
      { property: 'og:description', content: 'Online-Paarberatung & Paarcoaching für Paare aus Zürich – flexibel, diskret, persönlich. Professionelle Begleitung für mehr Nähe, Klarheit und gemeinsame Entwicklung.' },
      { property: 'og:url', content: 'https://www.paarweg.com/paarberatung-zuerich' },
      { property: 'og:type', content: 'website' },
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
          <div className="mx-auto max-w-4xl text-left md:text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl break-words">
              Paarberatung Zürich – online neue Wege für eure Beziehung finden
            </h1>
            <p className="mb-8 text-lg text-muted-foreground md:text-xl break-words">
              Online-Paarberatung & Coaching für Paare aus Zürich – flexibel, diskret, persönlich
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base">
                <a
                  href="https://calendly.com/paarweg-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Unverbindliches Erstgespräch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Challenges Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-left md:text-center text-3xl font-bold tracking-tight sm:text-4xl break-words">
              Wenn die Beziehung ins Stocken gerät
            </h2>
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-left">Festgefahrene Gespräche</h3>
                      <p className="text-sm text-muted-foreground text-left break-words">
                        Ihr redet aneinander vorbei. Diskussionen drehen sich im Kreis. 
                        Was als Gespräch beginnt, endet in Streit oder Schweigen. 
                        Die gleichen Themen kommen immer wieder hoch – ohne Lösung.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Heart className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-left">Wachsende Distanz</h3>
                      <p className="text-sm text-muted-foreground text-left break-words">
                        Die Nähe ist verloren gegangen. Ihr lebt nebeneinander her, 
                        funktioniert im Alltag – aber die Verbindung fehlt. 
                        Es fühlt sich an, als wärt ihr euch fremd geworden.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                      <Users className="h-6 w-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-left">Wiederkehrende Konflikte</h3>
                      <p className="text-sm text-muted-foreground text-left break-words">
                        Bestimmte Themen lösen immer wieder Spannungen aus. 
                        Ihr wisst beide, dass etwas nicht stimmt – aber alleine findet ihr keinen Weg heraus. 
                        Die Muster wiederholen sich, obwohl ihr es anders wollt.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 rounded-xl bg-muted/30 p-6">
              <p className="text-sm text-muted-foreground text-left md:text-center break-words">
                Vielleicht erkennt ihr euch in einer dieser Situationen wieder. 
                Vielleicht ist es etwas anderes, das euch beschäftigt. 
                Was auch immer es ist – ihr seid nicht allein damit. 
                Und es gibt Wege, die weiterführen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How it Works Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-left md:text-center text-3xl font-bold tracking-tight sm:text-4xl break-words">
              Wie Online-Paarberatung bei PaarWeg funktioniert
            </h2>
            
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      1
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-left">Ortsunabhängig & flexibel</h3>
                      <p className="text-sm text-muted-foreground text-left break-words">
                        Ihr seid in Zürich zu Hause, müsst aber nicht extra irgendwohin fahren. 
                        Die Gespräche finden online per Video-Call statt – von dort, wo ihr euch wohlfühlt. 
                        Das spart Zeit und gibt euch Flexibilität bei der Terminwahl.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      2
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-left">Vertraulich & geschützt</h3>
                      <p className="text-sm text-muted-foreground text-left break-words">
                        Alles, was ihr mir anvertraut, bleibt zwischen uns. 
                        Ihr könnt offen sprechen, ohne Sorge, dass etwas nach außen dringt. 
                        Vertraulichkeit ist die Grundlage meiner Arbeit.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      3
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-left">Raum für beide Perspektiven</h3>
                      <p className="text-sm text-muted-foreground text-left break-words">
                        In der Paarberatung geht es nicht darum, wer recht hat. 
                        Es geht darum, einander wieder zu verstehen. 
                        Beide Sichtweisen haben Platz – ohne Bewertung, ohne Druck.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      4
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-left">Konkrete Impulse für euren Alltag</h3>
                      <p className="text-sm text-muted-foreground text-left break-words">
                        Wir arbeiten nicht nur an Verständnis, sondern auch an konkreten Schritten. 
                        Kleine Veränderungen, die im Alltag spürbar werden. 
                        Neue Wege in der Kommunikation. Klarheit über das, was euch wichtig ist.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-left md:text-center text-3xl font-bold tracking-tight sm:text-4xl break-words">
              Haltung & Ansatz von PaarWeg
            </h2>
            
            <div className="space-y-8">
              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl text-left">Wertschätzend & auf Augenhöhe</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-left break-words">
                    Ich begegne euch mit Respekt und Wertschätzung – für das, was ihr mitbringt, 
                    für eure Geschichte und für den Mut, euch Unterstützung zu holen. 
                    Ihr seid die Experten für eure Beziehung. Ich begleite euch dabei, 
                    neue Perspektiven zu entdecken und eigene Lösungen zu entwickeln.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl text-left">Lösungsorientiert & reflektiert</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-left break-words">
                    Wir schauen nicht nur auf Probleme, sondern vor allem auf Möglichkeiten. 
                    Was funktioniert bereits? Was wollt ihr verändern? Welche Ressourcen habt ihr? 
                    Gemeinsam finden wir heraus, welche Schritte für euch stimmig sind – 
                    ohne vorgefertigte Rezepte, sondern passend zu eurer Situation.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardHeader>
                  <CardTitle className="text-xl text-left">Klar & ohne Umschweife</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground text-left break-words">
                    Ich arbeite direkt und ehrlich. Wenn ich etwas beobachte, spreche ich es an – 
                    respektvoll, aber klar. Manchmal braucht es einen Spiegel von außen, 
                    um Muster zu erkennen. Gleichzeitig entscheidet ihr selbst, 
                    was ihr daraus macht. Es gibt keinen Druck, keine vorgefertigten Lösungen.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 rounded-xl bg-primary/5 p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-semibold text-left">Mein Versprechen an euch</h3>
                  <p className="text-sm text-muted-foreground text-left break-words">
                    Ich verspreche euch keine schnellen Wunder. Aber ich verspreche euch einen geschützten Raum, 
                    in dem ihr gehört werdet. Einen Ort, an dem beide Perspektiven zählen. 
                    Und professionelle Begleitung auf dem Weg zu mehr Klarheit, Nähe und gemeinsamer Entwicklung.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/5 via-accent/5 to-muted/20 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-left md:text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl break-words">
              Der erste Schritt ist oft der schwerste
            </h2>
            <p className="mb-8 text-lg text-muted-foreground break-words">
              Aber er lohnt sich. Im unverbindlichen Erstgespräch (60 Minuten, 60 CHF) 
              lernen wir uns kennen, klären euer Anliegen und schauen, ob die Chemie stimmt. 
              Ohne Druck. Ohne Verpflichtung. Einfach ein erstes Gespräch.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base">
                <a
                  href="https://calendly.com/paarweg-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Jetzt Erstgespräch buchen
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="/kontakt">
                  Oder direkt Kontakt aufnehmen
                </a>
              </Button>
            </div>
            <p className="mt-6 text-sm text-muted-foreground break-words">
              Für Paare aus Zürich und Umgebung – online, flexibel und vertraulich
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
