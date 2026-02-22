import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Heart, MessageCircle, Users2, CheckCircle2 } from 'lucide-react';

export default function ZurichCouplesLandingPage() {
  useEffect(() => {
    document.title = 'Paarberatung Zürich – Neue Wege für Ihre Beziehung online finden | PaarWeg';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Online Paarberatung & Coaching für Paare aus Zürich – flexibel, diskret, persönlich. Professionelle Unterstützung für mehr Nähe, Klarheit und gemeinsames Wachstum.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/paarberatung-zuerich');

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Paarberatung Zürich – Neue Wege für Ihre Beziehung online finden | PaarWeg' },
      { property: 'og:description', content: 'Online Paarberatung & Coaching für Paare aus Zürich – flexibel, diskret, persönlich. Professionelle Unterstützung für mehr Nähe, Klarheit und gemeinsames Wachstum.' },
      { property: 'og:url', content: 'https://www.paarweg.com/paarberatung-zuerich' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.paarweg.com/assets/paar_an_notebook-1.png' },
      { property: 'og:locale', content: 'de_DE' },
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
      {/* Hero Section with Image */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-accent/5">
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="flex flex-col gap-8">
            {/* Text Content */}
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Paarberatung Zürich
              </h1>
              <p className="mb-4 text-xl text-muted-foreground sm:text-2xl">
                Neue Wege für Ihre Beziehung online finden
              </p>
              <p className="mb-8 text-lg text-muted-foreground">
                Online Paarberatung & Coaching für Paare aus Zürich – flexibel, diskret, persönlich. Professionelle Unterstützung für mehr Nähe, Klarheit und gemeinsames Wachstum.
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
                <Button asChild variant="outline" size="lg" className="text-base">
                  <a href="/">
                    Mehr über PaarWeg
                  </a>
                </Button>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mx-auto w-full max-w-4xl">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="/assets/paar_an_notebook-1.png"
                  alt="Paar schaut gemeinsam auf Laptop während Online-Beratungssitzung"
                  className="h-full w-full object-cover"
                  loading="eager"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* When Relationships Get Stuck */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Wenn die Beziehung feststeckt
            </h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Festgefahrene Gespräche</h3>
                <p className="text-muted-foreground">
                  Sie reden aneinander vorbei. Diskussionen drehen sich im Kreis. Was als Gespräch beginnt, endet im Streit oder Schweigen.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Wachsende Distanz</h3>
                <p className="text-muted-foreground">
                  Die Nähe ist weg. Sie leben nebeneinander her, funktionieren im Alltag – aber die Verbindung fehlt.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Wiederkehrende Konflikte</h3>
                <p className="text-muted-foreground">
                  Bestimmte Themen lösen immer wieder Spannungen aus. Sie wissen beide, dass etwas nicht stimmt – finden aber allein keinen Weg heraus.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted/30 p-8 text-center">
              <p className="text-lg text-muted-foreground">
                Vielleicht erkennen Sie sich in einer dieser Situationen wieder. Vielleicht ist es auch etwas anderes, das Sie beschäftigt. 
                Was auch immer es ist – Sie sind damit nicht allein. Und es gibt Wege die weiterführen.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="/">
                  Mehr über PaarWeg
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How Online Counseling Works */}
      <section className="bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              So funktioniert Online-Paarberatung bei PaarWeg
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 rounded-xl bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Ortsunabhängig & flexibel</h3>
                  <p className="text-muted-foreground">
                    Sie sind in Zürich ansässig, müssen aber nirgendwo hinfahren. Die Sitzungen finden online per Videoanruf statt – 
                    von dort, wo Sie sich wohlfühlen. Das spart Zeit und gibt Ihnen Flexibilität bei der Terminplanung.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-xl bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Vertraulich & geschützt</h3>
                  <p className="text-muted-foreground">
                    Alles, was Sie mir anvertrauen, bleibt unter uns. Sie können offen sprechen, ohne Sorge, dass etwas 
                    nach außen dringt. Vertraulichkeit ist die Grundlage meiner Arbeit.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-xl bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Raum für beide Perspektiven</h3>
                  <p className="text-muted-foreground">
                    In der Paarberatung geht es nicht darum, wer recht hat. Es geht darum, einander wieder zu verstehen. 
                    Beide Sichtweisen haben Platz – ohne Bewertung, ohne Druck.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-xl bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  4
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Konkrete Impulse für Ihren Alltag</h3>
                  <p className="text-muted-foreground">
                    Wir arbeiten nicht nur am Verstehen, sondern auch an konkreten Schritten. Kleine Veränderungen, die im 
                    Alltag spürbar werden. Neue Wege der Kommunikation. Klarheit darüber, was Ihnen wichtig ist.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 flex flex-col gap-4 sm:flex-row sm:justify-center">
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
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="/">
                  Mehr über PaarWeg
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* PaarWeg Approach */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Die Arbeitsweise & Werte von PaarWeg
            </h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <div className="rounded-xl border-2 border-border bg-background p-6">
                <h3 className="mb-3 text-xl font-semibold">Respektvoll & auf Augenhöhe</h3>
                <p className="text-muted-foreground">
                  Ich begegne Ihnen mit Respekt und Wertschätzung – für das, was Sie mitbringen, für Ihre Geschichte und für den Mut, 
                  sich Unterstützung zu holen. Sie sind die Experten für Ihre Beziehung. Ich begleite Sie dabei, neue 
                  Perspektiven zu entdecken und eigene Lösungen zu entwickeln.
                </p>
              </div>

              <div className="rounded-xl border-2 border-border bg-background p-6">
                <h3 className="mb-3 text-xl font-semibold">Lösungsorientiert & reflektiert</h3>
                <p className="text-muted-foreground">
                  Wir schauen nicht nur auf Probleme, sondern vor allem auf Möglichkeiten. Was funktioniert bereits? 
                  Was wollen Sie verändern? Welche Ressourcen haben Sie? Gemeinsam finden wir heraus, welche Schritte 
                  für Sie richtig sind – passend zu Ihrer Situation.
                </p>
              </div>

              <div className="rounded-xl border-2 border-border bg-background p-6">
                <h3 className="mb-3 text-xl font-semibold">Klar & direkt</h3>
                <p className="text-muted-foreground">
                  Ich arbeite direkt und ehrlich. Wenn ich etwas beobachte, spreche ich es an – respektvoll, aber klar. 
                  Manchmal braucht es einen Spiegel von außen, um Muster zu erkennen. Gleichzeitig entscheiden Sie, was 
                  Sie damit machen. Kein Druck, keine vorgefertigten Lösungen.
                </p>
              </div>

              <div className="rounded-xl border-2 border-border bg-background p-6">
                <h3 className="mb-3 text-xl font-semibold">Professionell & erfahren</h3>
                <p className="text-muted-foreground">
                  Mit jahrelanger Erfahrung in Paarberatung und Coaching bringe ich fachliche Kompetenz 
                  und bewährte Methoden mit. Aber wichtiger noch: echtes Interesse an Ihrer einzigartigen Situation und 
                  Engagement, Sie auf Ihrem Weg zu unterstützen.
                </p>
              </div>
            </div>

            <div className="mt-10 rounded-2xl bg-primary/5 p-8">
              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Mein Versprechen an Sie</h3>
                  <p className="text-muted-foreground">
                    Ich verspreche keine schnellen Wunder. Aber ich verspreche Ihnen einen geschützten Raum, in dem Sie gehört werden. 
                    Einen Ort, an dem beide Perspektiven zählen. Und professionelle Begleitung auf dem Weg zu mehr Klarheit, 
                    Nähe und gemeinsamer Entwicklung.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex justify-center">
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="/">
                  Mehr über PaarWeg
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Der erste Schritt ist oft der schwerste
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Aber er lohnt sich. Im unverbindlichen Erstgespräch (60 Minuten, 60 CHF) lernen wir uns kennen, 
              klären Ihr Anliegen und schauen, ob die Chemie stimmt. Kein Druck. Keine Verpflichtung. 
              Einfach ein erstes Gespräch.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Button asChild size="lg" className="text-base">
                <a
                  href="https://calendly.com/paarweg-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Erstgespräch buchen
                </a>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-base">
                <a href="/kontakt">
                  Oder direkt Kontakt aufnehmen
                </a>
              </Button>
            </div>
            <p className="mt-8 text-sm text-muted-foreground">
              Für Paare aus Zürich und Umgebung – online, flexibel und vertraulich
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
