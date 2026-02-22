import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Heart, MessageCircle, Users2, CheckCircle2, Video, Clock, Shield, Lightbulb } from 'lucide-react';

export default function SwissOnlineCouplesLandingPage() {
  useEffect(() => {
    document.title = 'Online Paarberatung Schweiz – Wenn Gespräche nicht mehr verbinden | PaarWeg';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Online Paarberatung Schweiz bei Kommunikationsproblemen in der Partnerschaft und ständig Streit in der Beziehung. Professionell, diskret, schweizweit mit PaarWeg.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/online-paarberatung-schweiz');

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'Online Paarberatung Schweiz – Wenn Gespräche nicht mehr verbinden | PaarWeg' },
      { property: 'og:description', content: 'Online Paarberatung Schweiz bei Kommunikationsproblemen in der Partnerschaft und ständig Streit in der Beziehung. Professionell, diskret, schweizweit mit PaarWeg.' },
      { property: 'og:url', content: 'https://www.paarweg.com/online-paarberatung-schweiz' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.paarweg.com/assets/paar_an_notebook-1.png' },
      { property: 'og:locale', content: 'de_CH' },
      { property: 'og:site_name', content: 'PaarWeg' },
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

    // JSON-LD structured data
    const jsonLd = {
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "name": "PaarWeg - Online Paarberatung Schweiz",
      "description": "Professionelle Online Paarberatung für Paare in der Schweiz bei Kommunikationsproblemen und Beziehungskonflikten",
      "url": "https://www.paarweg.com/online-paarberatung-schweiz",
      "areaServed": {
        "@type": "Country",
        "name": "Schweiz"
      },
      "serviceType": "Paarberatung",
      "provider": {
        "@type": "Person",
        "name": "Roland Soder"
      }
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLd);
  }, []);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-accent/5">
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="flex flex-col gap-8">
            {/* Text Content */}
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Online Paarberatung Schweiz – Wenn Gespräche nicht mehr verbinden
              </h1>
              <p className="mb-8 text-lg text-muted-foreground sm:text-xl">
                Kommunikationsprobleme und ständiger Streit belasten Ihre Beziehung? 
                PaarWeg bietet professionelle Online-Beratung – schweizweit, flexibel, diskret.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
                <Button asChild size="lg" className="text-base">
                  <a
                    href="https://calendly.com/paarweg-info"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Jetzt Erstgespräch buchen
                    <ArrowRight className="ml-2 h-5 w-5" />
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

      {/* Communication Problems Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Kommunikationsprobleme in der Partnerschaft
            </h2>
            
            <div className="space-y-8">
              <div className="text-center">
                <p className="text-lg text-muted-foreground">
                  Wenn Gespräche nicht mehr gelingen und Missverständnisse zunehmen:
                </p>
              </div>

              <div className="grid gap-6 md:grid-cols-2">
                <div className="rounded-xl border-2 border-border bg-background p-6">
                  <h3 className="mb-4 text-xl font-semibold text-foreground">Typische Situationen</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>Gespräche drehen sich im Kreis</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>Einer spricht, der andere zieht sich zurück</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>Wichtige Themen werden vermieden</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>Beide fühlen sich unverstanden</span>
                    </li>
                  </ul>
                </div>

                <div className="rounded-xl border-2 border-border bg-background p-6">
                  <h3 className="mb-4 text-xl font-semibold text-foreground">Was PaarWeg bietet</h3>
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>Strukturierter Rahmen für Klärung</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>Neutrale Perspektive von außen</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>Neue Kommunikationswege entwickeln</span>
                    </li>
                    <li className="flex gap-3">
                      <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                      <span>Unausgesprochene Bedürfnisse sichtbar machen</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Constant Conflict Section */}
      <section className="bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Ständig Streit in der Beziehung – Muster erkennen
            </h2>
            
            <div className="mb-8 text-center">
              <p className="text-lg text-muted-foreground">
                Wiederkehrende Konfliktdynamiken verstehen und durchbrechen:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center rounded-xl bg-background p-6 text-center shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Eskalationsmuster</h3>
                <ul className="space-y-2 text-left text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Aus Kleinigkeiten wird großer Konflikt</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Beide wissen nicht mehr, wie es anfing</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Emotionen übernehmen die Kontrolle</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center rounded-xl bg-background p-6 text-center shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Rückzug und Druck</h3>
                <ul className="space-y-2 text-left text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Einer möchte reden, der andere Abstand</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Je mehr Druck, desto mehr Rückzug</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Beide fühlen sich hilflos</span>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col items-center rounded-xl bg-background p-6 text-center shadow-sm">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Alte Verletzungen</h3>
                <ul className="space-y-2 text-left text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Frühere Erfahrungen schwingen mit</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Starke Reaktionen auf bestimmte Themen</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="mt-1 text-primary">•</span>
                    <span>Der aktuelle Konflikt ist nur Oberfläche</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-background p-8 text-center">
              <p className="text-lg font-medium text-foreground">
                PaarWeg hilft, diese Muster zu erkennen und neue Wege zu entwickeln.
              </p>
              <p className="mt-2 text-muted-foreground">
                Nicht Konflikte vermeiden, sondern konstruktiv damit umgehen.
              </p>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild size="lg" className="text-base">
                <a
                  href="https://calendly.com/paarweg-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jetzt Erstgespräch buchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* How Online Counseling Works - matching Basel page */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              So funktioniert Online-Paarberatung bei PaarWeg
            </h2>
            
            <div className="space-y-6">
              <div className="flex gap-6 rounded-xl bg-background p-6 shadow-sm border-2 border-border">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  1
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Ortsunabhängig & flexibel</h3>
                  <p className="text-muted-foreground">
                    Sie können von überall in der Schweiz teilnehmen, müssen nirgendwo hinfahren. Die Sitzungen finden online per Videoanruf statt – 
                    von dort, wo Sie sich wohlfühlen. Das spart Zeit und gibt Ihnen Flexibilität bei der Terminplanung.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-xl bg-background p-6 shadow-sm border-2 border-border">
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

              <div className="flex gap-6 rounded-xl bg-background p-6 shadow-sm border-2 border-border">
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

              <div className="flex gap-6 rounded-xl bg-background p-6 shadow-sm border-2 border-border">
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

            <div className="mt-12 flex justify-center">
              <Button asChild size="lg" className="text-base">
                <a
                  href="https://calendly.com/paarweg-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jetzt Erstgespräch buchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* When Counseling Makes Sense */}
      <section className="bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Wann Paarberatung sinnvoll ist
            </h2>
            
            <div className="mb-8 text-center">
              <p className="text-lg text-muted-foreground">
                Professionelle Unterstützung für Paare, die ihre Beziehung aktiv gestalten möchten:
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="rounded-xl border-2 border-border bg-background p-6">
                <h3 className="mb-4 text-xl font-semibold">Akute Herausforderungen</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>Sie reden aneinander vorbei</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>Bestimmte Themen führen immer zu Konflikten</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>Emotionale Verbindung ist verloren gegangen</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>Sie denken über Trennung nach</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl border-2 border-border bg-background p-6">
                <h3 className="mb-4 text-xl font-semibold">Präventiv & Entwicklung</h3>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>Berufliche Belastung wirkt sich aus</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>Präventiv an Beziehung arbeiten</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>Wichtige Entscheidungen stehen an</span>
                  </li>
                  <li className="flex gap-3">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" />
                    <span>Mehr Nähe und Verständnis entwickeln</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 rounded-2xl bg-primary/5 p-8 text-center">
              <p className="text-lg text-muted-foreground">
                <strong className="text-foreground">PaarWeg unterstützt dabei:</strong> Gemeinsam herausfinden, was möglich ist und welcher Weg für beide stimmig ist.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online Coaching Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Warum Online Paarcoaching funktioniert
            </h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-xl bg-background p-6 shadow-sm border-2 border-border">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Flexible Terminwahl</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Keine Anfahrtswege</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Termine passend zu Ihrem Alltag</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Auch abends oder am Wochenende</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-background p-6 shadow-sm border-2 border-border">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Diskretion & Komfort</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Aus vertrauter Umgebung</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Niemand sieht Sie kommen oder gehen</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Maximale Privatsphäre</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-background p-6 shadow-sm border-2 border-border">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Persönlicher Kontakt</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Face-to-Face per Video</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Mimik und Gestik sichtbar</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Gleiche Qualität wie vor Ort</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-background p-6 shadow-sm border-2 border-border">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Schweizweit verfügbar</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Unabhängig vom Wohnort</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Auch für ländliche Regionen</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Keine geografischen Einschränkungen</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-background p-6 shadow-sm border-2 border-border">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Bewährte Methoden</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Systemische Paarberatung</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Lösungsorientiertes Coaching</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Wertorientierte Gesprächsführung</span>
                  </li>
                </ul>
              </div>

              <div className="rounded-xl bg-background p-6 shadow-sm border-2 border-border">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Erfahrung & Kompetenz</h3>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Jahrelange Praxiserfahrung</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Professionelle Ausbildung</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="text-primary">•</span>
                    <span>Kontinuierliche Weiterbildung</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Button asChild size="lg" className="text-base">
                <a
                  href="https://calendly.com/paarweg-info"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Jetzt Erstgespräch buchen
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
