import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { CheckCircle2, Calendar, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { useEffect } from 'react';

const CALENDLY_URL = 'https://calendly.com/paarweg-info/paarweg-session-90-min-klon';

export default function PricingPage() {
  useEffect(() => {
    document.title = 'Preise – Paarberatung Kosten & kostenloses Kennenlerngespräch buchen | PaarWeg Roland Soder';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Transparente Preise für Paarberatung und Coaching. Kostenloses Kennenlerngespräch (30 Min), Coaching-Sitzungen 190 CHF (90 Min). Online-Termine für maximale Flexibilität. Jetzt buchen bei PaarWeg Roland Soder.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/preise');

    const ogTags = [
      { property: 'og:title', content: 'Preise – Paarberatung Kosten & kostenloses Kennenlerngespräch buchen | PaarWeg' },
      { property: 'og:description', content: 'Transparente Preise für Paarberatung und Coaching. Kostenloses Kennenlerngespräch (30 Min), Coaching-Sitzungen 190 CHF. Online-Termine verfügbar.' },
      { property: 'og:url', content: 'https://www.paarweg.com/preise' },
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

    const twitterTags = [
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: 'Preise – Paarberatung Kosten & kostenloses Kennenlerngespräch buchen | PaarWeg' },
      { name: 'twitter:description', content: 'Transparente Preise für Paarberatung und Coaching. Kostenloses Kennenlerngespräch (30 Min), Coaching-Sitzungen 190 CHF.' },
    ];
    twitterTags.forEach(({ name, content }) => {
      let tag = document.querySelector(`meta[name="${name}"]`);
      if (!tag) {
        tag = document.createElement('meta');
        tag.setAttribute('name', name);
        document.head.appendChild(tag);
      }
      tag.setAttribute('content', content);
    });
  }, []);

  const faqItems = [
    {
      question: "Gibt es Ermäßigungen oder Pakete?",
      answer: "Ich arbeite ohne Paketbindung, damit Sie flexibel bleiben. In besonderen Fällen (z.B. finanzielle Härte) sprechen Sie mich gerne an – wir finden gemeinsam eine Lösung."
    },
    {
      question: "Werden die Kosten von der Krankenkasse übernommen?",
      answer: "Coaching ist keine Therapie und wird nicht von Krankenkassen übernommen."
    },
    {
      question: "Wie viele Sitzungen brauche ich?",
      answer: "Das ist sehr individuell. Manche Themen klären sich in wenigen Sitzungen, andere brauchen längere Begleitung. Wir besprechen das gemeinsam und passen den Umfang an Ihre Bedürfnisse an. Es gibt keine Mindestlaufzeit."
    },
    {
      question: "Was passiert, wenn ich einen Termin absagen muss?",
      answer: "Bitte sagen Sie Termine mindestens 12 Stunden vorher ab. Bei kurzfristigeren Absagen muss ich die Sitzung in Rechnung stellen, da ich die Zeit für Sie reserviert habe."
    },
    {
      question: "Kann ich auch nur Einzelsitzungen buchen, wenn es um Paarthemen geht?",
      answer: "Ja, das ist möglich und oft sogar sinnvoll. Der Preis bleibt gleich – 190 CHF für 90 Minuten, unabhängig davon, ob Sie alleine oder als Paar kommen."
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10">
        <div className="container mx-auto px-4 py-20 md:px-6 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Transparente Preise
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl">
              Klarheit von Anfang an. Keine versteckten Kosten, keine Überraschungen.
              Investieren Sie in Ihre Beziehung mit einem fairen und transparenten Preismodell.
            </p>
          </div>
        </div>
      </section>

      {/* Pricing Cards Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 max-w-5xl mx-auto">
            {/* Kennenlerngespräch Card */}
            <Card className="border-2 border-primary/20 shadow-lg">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Calendar className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Kennenlerngespräch</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Lernen Sie mich kennen und klären Sie Ihr Anliegen
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold">Kostenlos</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">30 Minuten</p>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Persönliches Kennenlernen per Video-Call
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Klärung Ihres Anliegens und Ihrer Ziele
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Vorstellung meiner Arbeitsweise
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Raum für alle Ihre Fragen
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Keine Verpflichtung zur weiteren Zusammenarbeit
                    </p>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full mt-6">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Kostenloses Kennenlerngespräch buchen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>

            {/* Coaching Sessions Card */}
            <Card className="border-2 border-primary/30 shadow-lg bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Sparkles className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-3xl">Coaching-Sitzungen</CardTitle>
                <p className="text-sm text-muted-foreground mt-2">
                  Einzelsitzung oder Paarsitzung
                </p>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="text-center">
                  <div className="flex items-baseline justify-center gap-2">
                    <span className="text-5xl font-bold">190</span>
                    <span className="text-2xl font-semibold text-muted-foreground">CHF</span>
                  </div>
                  <p className="mt-2 text-sm text-muted-foreground">90 Minuten</p>
                  <p className="mt-1 text-xs text-muted-foreground italic">
                    Unabhängig ob Einzel- oder Paarsitzung
                  </p>
                </div>

                <div className="space-y-3 pt-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Intensive Begleitung über 90 Minuten
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Systemische Paarbegleitung oder Einzelcoaching
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Flexible Online-Termine nach Vereinbarung
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Individuelle Begleitung auf Ihrem Weg
                    </p>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="h-5 w-5 shrink-0 text-primary mt-0.5" />
                    <p className="text-sm text-muted-foreground">
                      Keine Mindestlaufzeit oder Paketbindung
                    </p>
                  </div>
                </div>

                <Button asChild size="lg" className="w-full mt-6">
                  <a
                    href={CALENDLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Coaching-Sitzung buchen
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </a>
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Was Sie für Ihre Investition erhalten
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Coaching und Paarbegleitung sind eine Investition in Ihre Beziehung und in sich selbst.
                Eine Investition in Klarheit, Verbindung und gemeinsames Wachstum.
              </p>
              <p>
                Sie erhalten einen geschützten Raum, in dem beide Perspektiven Platz haben.
                Professionelle Begleitung durch einen erfahrenen systemischen Coach.
                Und die Möglichkeit, Ihre Beziehung bewusst zu gestalten – mit Empathie, Klarheit und Respekt.
              </p>
              <p className="font-medium text-foreground">
                Die Preise sind transparent und fair. Es gibt keine versteckten Kosten,
                keine Paketbindung, keine Mindestlaufzeit. Sie entscheiden nach jeder Sitzung,
                ob und wie Sie weitermachen möchten.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Online Flexibility Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Clock className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Flexible Online-Termine
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Alle Sitzungen finden online statt – Sie benötigen lediglich einen Computer,
                ein Notebook oder ein Tablet mit Kamera. Das ermöglicht maximale Flexibilität:
                Sie können von zu Hause aus teilnehmen, ohne Anfahrt, zu Zeiten, die für Sie passen.
              </p>
              <p className="text-muted-foreground">
                Termine können flexibel (auch abends oder am Wochenende) über mein Buchungstool gebucht werden – sollte kein passender Termin verfügbar sein, schreiben Sie mir bitte eine E-Mail oder WhatsApp und wir suchen nach einer Lösung.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Payment & Booking Process Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Buchung und Bezahlung
            </h2>

            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      1
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold">Kostenloses Kennenlerngespräch buchen</h3>
                      <p className="text-sm text-muted-foreground">
                        Buchen Sie Ihr kostenloses Kennenlerngespräch direkt über den Buchungslink oder kontaktieren Sie mich per E-Mail, Telefon oder WhatsApp.
                        Sie erhalten eine Bestätigung mit allen Details zum Video-Call.
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
                      <h3 className="mb-2 font-semibold">Kostenloses Kennenlerngespräch durchführen</h3>
                      <p className="text-sm text-muted-foreground">
                        Im kostenlosen Kennenlerngespräch (30 Minuten) lernen wir uns kennen, klären Ihr Anliegen und besprechen,
                        wie ich Sie unterstützen kann.
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
                      <h3 className="mb-2 font-semibold">Weitere Sitzungen vereinbaren</h3>
                      <p className="text-sm text-muted-foreground">
                        Wenn Sie sich für eine Zusammenarbeit entscheiden, vereinbaren wir gemeinsam
                        die nächsten Termine. Sie können flexibel entscheiden, wie oft und in welchem Rhythmus
                        Sie Sitzungen wahrnehmen möchten.
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
                      <h3 className="mb-2 font-semibold">Bezahlung</h3>
                      <p className="text-sm text-muted-foreground">
                        Die Bezahlung erfolgt per Rechnung oder Zahlungslink nach der Sitzung, je nach Vereinbarung.
                        Keine Vorauszahlung erforderlich.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Häufige Fragen zu den Preisen
            </h2>

            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqItems.map((item, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index}`}
                  className="border border-border/60 rounded-xl px-6 shadow-sm bg-card"
                >
                  <AccordionTrigger className="text-left hover:no-underline">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground text-left">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent/10 to-primary/5 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Bereit für den ersten Schritt?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Buchen Sie jetzt Ihr kostenloses Kennenlerngespräch.
              Ich freue mich darauf, Sie kennenzulernen.
            </p>
            <Button asChild size="lg" className="shadow-md">
              <a
                href={CALENDLY_URL}
                target="_blank"
                rel="noopener noreferrer"
              >
                Kostenloses Kennenlerngespräch buchen
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
