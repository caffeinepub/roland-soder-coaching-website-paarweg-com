import { Link } from '@tanstack/react-router';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Heart, Lightbulb, TrendingUp, ArrowRight, Monitor } from 'lucide-react';
import { useEffect } from 'react';
import MobileReadMore from '@/components/MobileReadMore';

export default function HomePage() {
  useEffect(() => {
    document.title = 'PaarWeg – Paarcoaching & Beziehungsbegleitung für Paare, Frauen und Männer | Roland Soder';
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professionelles Paarcoaching, Beziehungsbegleitung und Coaching für Paare – online. Roland Soder begleitet Sie zu mehr Nähe, Klarheit und gemeinsamer Entwicklung.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/');

    // Open Graph tags
    const ogTags = [
      { property: 'og:title', content: 'PaarWeg – Paarcoaching & Beziehungsbegleitung | Roland Soder' },
      { property: 'og:description', content: 'Professionelles Paarcoaching, Beziehungsbegleitung und Coaching für Paare – online. Roland Soder begleitet Sie zu mehr Nähe, Klarheit und gemeinsamer Entwicklung.' },
      { property: 'og:type', content: 'website' },
      { property: 'og:url', content: 'https://www.paarweg.com/' },
      { property: 'og:image', content: 'https://www.paarweg.com/assets/PaarWeg Logo final (3).png' },
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

    // Twitter Card tags
    const twitterTags = [
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:title', content: 'PaarWeg – Paarcoaching & Beziehungsbegleitung | Roland Soder' },
      { name: 'twitter:description', content: 'Professionelles Paarcoaching, Beziehungsbegleitung und Coaching für Paare – online. Roland Soder begleitet Sie zu mehr Nähe, Klarheit und gemeinsamer Entwicklung.' },
      { name: 'twitter:image', content: 'https://www.paarweg.com/assets/PaarWeg Logo final (3).png' },
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

    // Structured data (JSON-LD)
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      "name": "Roland Soder Coaching – PaarWeg",
      "image": "https://www.paarweg.com/assets/PaarWeg Logo final (3).png",
      "@id": "https://www.paarweg.com",
      "url": "https://www.paarweg.com",
      "telephone": "+41797703925",
      "email": "info@paarweg.com",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Basel",
        "addressCountry": "CH"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 47.5584,
        "longitude": 7.5733
      },
      "openingHoursSpecification": {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday"
        ],
        "opens": "09:00",
        "closes": "18:00"
      },
      "sameAs": [],
      "priceRange": "€€",
      "description": "Professionelles Paarcoaching, Beziehungsbegleitung und Coaching für Paare – online. Roland Soder begleitet Sie zu mehr Nähe, Klarheit und gemeinsamer Entwicklung.",
      "areaServed": ["Basel", "Schweiz", "Deutschland"],
      "serviceType": ["Paarcoaching", "Beziehungsbegleitung", "Coaching für Paare", "Systemische Beratung", "Online Coaching Paar"]
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <div className="w-full">
      {/* Logo and Welcome Section - Substantially Enlarged */}
      <section className="bg-gradient-to-b from-background via-muted/10 to-background py-24 md:py-36 lg:py-48">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-6xl text-center space-y-14 md:space-y-20 lg:space-y-24">
            <div className="flex justify-center">
              <img
                src="/assets/PaarWeg Logo final (3).png"
                alt="PaarWeg – Roland Soder Coaching & Beziehungsbegleitung"
                className="h-48 w-auto sm:h-56 md:h-72 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] object-contain"
                style={{ imageRendering: 'crisp-edges' }}
              />
            </div>
            <p className="text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl text-muted-foreground font-light tracking-wide leading-relaxed px-4 md:px-8">
              Willkommen bei PaarWeg – Raum für Entwicklung, Verbindung und neue Impulse
            </p>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10">
        <div className="container mx-auto px-4 py-20 md:px-6 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-6">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Paarcoaching und Beziehungsbegleitung – in jeder Phase
                </h1>
                <MobileReadMore collapsedHeight="250px">
                  <div className="space-y-4 text-lg text-muted-foreground md:text-xl">
                    <p>
                      Wenn die Nähe verloren gegangen ist. Wenn Gespräche zu Streit werden oder in Schweigen enden. 
                      Wenn Sie sich fremd geworden sind, obwohl Sie nebeneinander leben.
                    </p>
                    <p>
                      Oder wenn Ihre Beziehung stabil ist und Sie spüren: Da ist mehr möglich. 
                      Mehr Tiefe. Mehr Verbindung. Neue Impulse für gemeinsames Wachstum.
                    </p>
                    <p>
                      Vielleicht läuft es gut – und Sie möchten es bewusst so halten. Frische Perspektiven gewinnen. 
                      Sich gegenseitig noch besser verstehen. Ihre Beziehung als Entwicklungsraum nutzen.
                    </p>
                    <p className="font-medium text-foreground">
                      Ob in der Krise, auf dem Weg zu mehr oder in einer gesunden Beziehung, die neue Inspiration sucht – 
                      es ist Zeit innezuhalten. Nicht um aufzugeben, sondern um bewusst weiterzugehen. 
                      Gemeinsam. Mit Raum für beide Perspektiven.
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
                src="/assets/Startseite.png"
                alt="PaarWeg Coaching – einladender Start in die gemeinsame Entwicklung"
                className="rounded-2xl object-cover shadow-2xl w-full"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Online Coaching Section */}
      <section className="bg-accent/5 py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center text-center space-y-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                <Monitor className="h-8 w-8 text-primary" />
              </div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
                Flexibel und ortsunabhängig – alle Sitzungen finden online statt
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl">
                Alle Coaching- und Beziehungsbegleitungs-Sitzungen finden online statt – Sie benötigen lediglich einen Computer, 
                ein Notebook oder ein Tablet mit Kamera. Das ermöglicht volle Flexibilität – ortsunabhängig und persönlich.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Beziehung als Entwicklungsweg Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Beziehung stärken als Entwicklungsweg
            </h2>
            <MobileReadMore collapsedHeight="180px">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Eine Beziehung ist kein Zustand, den man erreicht – sie ist ein lebendiger Prozess. 
                  Sie verändert sich mit uns, fordert uns heraus, lädt uns ein zu wachsen.
                </p>
                <p>
                  Manche Paare kommen in der Krise. Andere kommen, weil sie in einer stabilen Beziehung leben 
                  und neue Impulse suchen – mehr Tiefe, frische Perspektiven, bewusste Weiterentwicklung. 
                  Wieder andere wollen nicht warten, bis es schwierig wird, sondern präventiv gestalten, 
                  was zwischen ihnen ist.
                </p>
                <p className="font-medium text-foreground">
                  Coaching und Beziehungsbegleitung sind keine Reparatur. Sie sind eine Investition. 
                  In Verbindung. In Klarheit. In ein gemeinsames Leben, das nicht nur funktioniert, 
                  sondern erfüllt.
                </p>
              </div>
            </MobileReadMore>
          </div>
        </div>
      </section>

      {/* Beziehungsrealität Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Beziehungsrealität
            </h2>
            <MobileReadMore collapsedHeight="200px">
              <div className="space-y-6 text-lg text-muted-foreground">
                <p>
                  Jede Beziehung durchläuft Phasen der Distanz. Momente, in denen Worte fehlen oder zu viel gesagt wird. 
                  Zeiten, in denen man sich fragt: Wie sind wir hier gelandet?
                </p>
                <p>
                  Das ist keine Ausnahme. Das ist Realität. Beziehungen sind lebendig – sie verändern sich, 
                  fordern heraus, bringen uns an Grenzen. Die Frage ist nicht, ob Krisen kommen. 
                  Die Frage ist: Wie gehen wir damit um?
                </p>
                <p>
                  Und auch in guten Zeiten gilt: Beziehungen brauchen Aufmerksamkeit. Reflexion. 
                  Den Mut, immer wieder neu hinzuschauen und gemeinsam zu wachsen.
                </p>
                <p className="font-medium text-foreground">
                  Schweigen ist eine Antwort. Rückzug ist eine Antwort. Aber es gibt auch eine andere: 
                  Hinschauen. Gemeinsam. Mit der Bereitschaft, etwas zu verändern oder zu vertiefen.
                </p>
              </div>
            </MobileReadMore>
          </div>
        </div>
      </section>

      {/* Was Paare hier finden Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Was Paare hier finden
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Drei zentrale Werte, die den Weg zu einer tragfähigen Beziehung ebnen
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            <Card className="border-2 transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Klarheit</h3>
                <p className="text-muted-foreground">
                  Verstehen, was wirklich ist. Nicht was sein sollte, nicht was war – sondern was jetzt ist. 
                  Klarheit über eigene Bedürfnisse, über Muster, über das, was zwischen Ihnen steht. 
                  Ohne Klarheit gibt es keine Veränderung.
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
                  nicht nur nebeneinander existieren. Verbindung entsteht nicht durch Worte allein, 
                  sondern durch echte Präsenz und den Mut, verletzlich zu sein.
                </p>
              </CardContent>
            </Card>

            <Card className="border-2 transition-all hover:shadow-lg">
              <CardContent className="pt-8">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                  <TrendingUp className="h-7 w-7 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Entwicklung</h3>
                <p className="text-muted-foreground">
                  Wachsen – als Paar und als Einzelne. Entwicklung bedeutet nicht Perfektion. 
                  Es bedeutet Bewegung. Den Mut, alte Muster zu hinterfragen und neue Wege zu gehen. 
                  Gemeinsam, ohne sich selbst aufzugeben.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Teasers für Paare, Frauen und Männer Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
              Individuelle Perspektiven
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
              Jede Perspektive ist wichtig. Erfahren Sie mehr über die spezifischen Themen, 
              die Paare, Frauen und Männer in Beziehungen bewegen.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-3">
            {/* Paare Teaser */}
            <Card className="overflow-hidden border-2 transition-all hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/Paar_einfuehlsamer_Blick-1.png"
                  alt="Paar blickt sich einfühlsam an – Symbol für achtsames Paarcoaching"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-semibold">Für Paare</h3>
                <p className="mb-6 text-muted-foreground">
                  Wenn Sie gemeinsam wachsen möchten. Wenn Sie neue Perspektiven suchen, 
                  tiefere Verbindung aufbauen oder präventiv in Ihre Beziehung investieren wollen. 
                  Für Paare in jeder Phase – von der Krise bis zur bewussten Weiterentwicklung.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/paare">
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Frauen Teaser */}
            <Card className="overflow-hidden border-2 transition-all hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/Frau_nachdenklich.png"
                  alt="Nachdenkliche Frau am Fenster - Coaching für Frauen in Beziehungsfragen"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-semibold">Für Frauen</h3>
                <p className="mb-6 text-muted-foreground">
                  Wenn Sie sich erschöpft fühlen vom Versuch, alles richtig zu machen. 
                  Wenn Sie sich unsichtbar fühlen in Ihrer Beziehung. Wenn Sie sich nach Leichtigkeit sehnen, 
                  nach echtem Gesehen-Werden, nach einem Raum, in dem Sie einfach sein dürfen.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/frauen">
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Männer Teaser */}
            <Card className="overflow-hidden border-2 transition-all hover:shadow-xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src="/assets/Mann_nachdenklich.png"
                  alt="Nachdenklicher Mann – Coaching für Männer in Beziehungsfragen"
                  className="h-full w-full object-cover transition-transform hover:scale-105"
                  loading="lazy"
                />
              </div>
              <CardContent className="p-8">
                <h3 className="mb-4 text-2xl font-semibold">Für Männer</h3>
                <p className="mb-6 text-muted-foreground">
                  Wenn Sie spüren, dass etwas nicht stimmt, aber nicht wissen, wie Sie es ansprechen sollen. 
                  Wenn Sie sich hilflos fühlen, weil nichts, was Sie tun, richtig zu sein scheint. 
                  Wenn Sie sich nach echter Verbindung sehnen, aber nicht wissen, wie Sie sie erreichen.
                </p>
                <Button asChild variant="outline" className="w-full">
                  <Link to="/maenner">
                    Mehr erfahren
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
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
              <Button asChild variant="outline" size="lg" className="text-base">
                <Link to="/kontakt">
                  Kontakt aufnehmen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
