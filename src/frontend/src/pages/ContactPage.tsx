import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Mail, Phone, Calendar, CheckCircle2, MessageCircle } from 'lucide-react';

export default function ContactPage() {
  useEffect(() => {
    document.title = 'Kontakt & Terminbuchung – Online Paarcoaching & Beziehungsbegleitung | PaarWeg Roland Soder';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Kontaktieren Sie Roland Soder für ein Erstgespräch (60 Minuten, 60 CHF). Paarcoaching, Beziehungsbegleitung und Online Coaching für Paare in Basel. Flexible Online-Termine verfügbar.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/kontakt');

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Kontakt & Terminbuchung – Online Paarcoaching & Beziehungsbegleitung | PaarWeg' },
      { property: 'og:description', content: 'Erstgespräch (60 Minuten, 60 CHF) für Paarcoaching und Beziehungsbegleitung. Online-Termine für maximale Flexibilität.' },
      { property: 'og:url', content: 'https://www.paarweg.com/kontakt' },
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
          <div className="mx-auto max-w-3xl text-left md:text-center">
            <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl break-words">
              Kontakt & Terminbuchung
            </h1>
            <p className="text-lg text-muted-foreground md:text-xl break-words">
              Ich freue mich auf Ihre Nachricht. Gemeinsam finden wir heraus, 
              wie ich Sie auf Ihrem Weg begleiten kann. Der erste Schritt ist oft der schwerste – 
              aber er lohnt sich.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Options Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Contact Information */}
            <Card className="border-2">
              <CardHeader>
                <CardTitle className="text-2xl text-left">Direkter Kontakt</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-left">E-Mail</h3>
                    <a
                      href="mailto:info@paarweg.com"
                      className="text-muted-foreground hover:text-foreground transition-colors break-all"
                    >
                      info@paarweg.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-left">Telefon</h3>
                    <a
                      href="tel:+41797703925"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +41 79 770 39 25
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <MessageCircle className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold text-left">WhatsApp</h3>
                    <a
                      href="https://wa.me/+41797703925"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      +41 79 770 39 25
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Booking Card */}
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-accent/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-2xl text-left">
                  <Calendar className="h-6 w-6 text-primary" />
                  Termin buchen
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-left break-words">
                  Buchen Sie direkt online entweder das Erstgespräch (60 Minuten - 60 CHF) 
                  oder eine Coaching-Session (90 Minuten - 190 CHF) über meinen Buchungslink. 
                  Schnell, unkompliziert und transparent.
                </p>
                <Button asChild size="lg" className="w-full">
                  <a
                    href="https://calendly.com/paarweg-info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jetzt Termin wählen
                  </a>
                </Button>
                <p className="text-sm text-muted-foreground text-left break-words">
                  Die Gespräche finden online per Video-Call statt. 
                  Sie erhalten nach der Buchung alle Details per E-Mail.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How it works Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-left md:text-center text-3xl font-bold tracking-tight sm:text-4xl break-words">
              Wie läuft ein Erstgespräch ab?
            </h2>
            
            <div className="space-y-6">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="flex items-start gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10 font-semibold text-primary">
                      1
                    </div>
                    <div>
                      <h3 className="mb-2 font-semibold text-left">Terminbuchung</h3>
                      <p className="text-sm text-muted-foreground text-left break-words">
                        Sie buchen einen Termin über den Buchungslink oder schreiben mir eine E-Mail, rufen mich an 
                        oder kontaktieren mich per WhatsApp. Ich melde mich zeitnah bei Ihnen, um einen passenden Termin zu finden.
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
                      <h3 className="mb-2 font-semibold text-left">Vorbereitung</h3>
                      <p className="text-sm text-muted-foreground text-left break-words">
                        Sie erhalten einen Link zum Video-Call. Sorgen Sie bitte für eine ruhige, ungestörte Umgebung 
                        und prüfen Sie, sofern möglich, vorab kurz die Technik, damit wir entspannt starten können. 
                        Es gibt keine Hausaufgaben – kommen Sie einfach so, wie Sie sind.
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
                      <h3 className="mb-2 font-semibold text-left">Das Gespräch</h3>
                      <p className="text-sm text-muted-foreground text-left break-words">
                        Im Erstgespräch (60 Minuten, 60 CHF) klären wir Ihr Anliegen, besprechen meine Arbeitsweise 
                        und schauen, ob die Chemie stimmt. Sie haben Raum für alle Ihre Fragen.
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
                      <h3 className="mb-2 font-semibold text-left">Entscheidung</h3>
                      <p className="text-sm text-muted-foreground text-left break-words">
                        Nach dem Gespräch entscheiden Sie in Ruhe, ob Sie mit mir arbeiten möchten. 
                        Es gibt keinen Druck, keine Verpflichtung. Wenn es passt, vereinbaren wir weitere Termine. 
                        Wenn nicht, ist das auch völlig in Ordnung.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-8 rounded-xl bg-primary/5 p-6">
              <div className="flex items-start gap-3">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-semibold text-left">Wichtig zu wissen</h3>
                  <p className="text-sm text-muted-foreground text-left break-words">
                    Das Erstgespräch kostet 60 CHF für 60 Minuten und dient dem gegenseitigen Kennenlernen. 
                    Sie gehen keine langfristige Verpflichtung ein. Alles, was Sie mir erzählen, bleibt vertraulich.
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button for Booking Link */}
            <div className="mt-10 text-left md:text-center">
              <Button asChild size="lg" className="px-8 py-6 text-base w-full md:w-auto">
                <a
                  href="https://calendly.com/paarweg-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Calendar className="h-5 w-5 mr-2" />
                  Jetzt Erstgespräch buchen
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <img
              src="/assets/Videocall.png"
              alt="Online Paarcoaching Videocall - Persönliche Beratung per Video"
              className="rounded-2xl object-cover shadow-xl w-full"
              loading="lazy"
            />
            <p className="mt-6 text-left md:text-center text-sm text-muted-foreground break-words">
              Vertrauliche Online-Gespräche in angenehmer Atmosphäre – flexibel und persönlich
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-left md:text-center text-3xl font-bold tracking-tight sm:text-4xl break-words">
              Häufige Fragen
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              <AccordionItem value="item-1" className="rounded-lg border bg-card px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Was kostet das Coaching?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground text-left break-words">
                  Das Erstgespräch kostet 60 CHF für 60 Minuten. Coaching-Sitzungen kosten 190 CHF für 90 Minuten, 
                  unabhängig davon, ob Sie alleine oder als Paar kommen. Ich arbeite transparent und fair.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-2" className="rounded-lg border bg-card px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Wie lange dauert ein Coaching?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground text-left break-words">
                  Das ist sehr individuell. Manche Themen klären sich in wenigen Sitzungen, 
                  andere brauchen längere Begleitung. Wir besprechen das gemeinsam und passen den Umfang 
                  an Ihre Bedürfnisse an. Es gibt keine Mindestlaufzeit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-3" className="rounded-lg border bg-card px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Arbeiten Sie online oder vor Ort?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground text-left break-words">
                  Grundsätzlich finden alle Sitzungen online per Video-Call statt. 
                  Das ermöglicht flexible Termingestaltung und spart Anfahrtswege. 
                  Die Qualität der Begleitung ist online genauso hoch wie vor Ort. 
                  Präsenz-Termine sind in Ausnahmefällen nach Absprache möglich.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-4" className="rounded-lg border bg-card px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Ich habe keine oder wenig Erfahrung mit Video-Calls – ist das ein Problem?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground text-left break-words">
                  Nein, überhaupt nicht. Wenn Sie wenig oder keine Erfahrung mit Video-Calls haben, 
                  melden Sie sich gerne vorab bei mir. Ich unterstütze Sie Schritt für Schritt dabei, 
                  alles in Ruhe einzurichten, sodass Sie entspannt und gut vorbereitet in unser Gespräch starten können.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-5" className="rounded-lg border bg-card px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Ist das Coaching vertraulich?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground text-left break-words">
                  Absolut. Alles, was Sie mir anvertrauen, bleibt zwischen uns. 
                  Vertraulichkeit ist die Grundlage meiner Arbeit und eine Selbstverständlichkeit.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-6" className="rounded-lg border bg-card px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Kann ich auch alleine kommen, wenn es um Paarthemen geht?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground text-left break-words">
                  Ja, das ist möglich und oft sogar sinnvoll. Manchmal ist es hilfreich, 
                  erst einmal für sich selbst Klarheit zu gewinnen, bevor man den Partner einbezieht. 
                  Wir besprechen im Erstgespräch, was für Sie der beste Weg ist.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="item-7" className="rounded-lg border bg-card px-6">
                <AccordionTrigger className="text-left font-semibold hover:no-underline">
                  Was ist der Unterschied zwischen Coaching und Therapie?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground text-left break-words">
                  Coaching richtet sich an psychisch gesunde Menschen, die an ihrer Entwicklung arbeiten möchten. 
                  Therapie behandelt psychische Erkrankungen. Wenn Sie unsicher sind, 
                  klären wir im Erstgespräch, was für Sie das Richtige ist.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </section>
    </div>
  );
}
