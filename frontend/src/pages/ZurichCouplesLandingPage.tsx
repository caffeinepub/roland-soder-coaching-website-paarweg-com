import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, CheckCircle, MapPin } from 'lucide-react';
import MobileReadMore from '@/components/MobileReadMore';
import CalendlyInlineWidget from '@/components/CalendlyInlineWidget';

const CALENDLY_URL = 'https://calendly.com/paarweg-info/paarweg-session-90-min-klon';

export default function ZurichCouplesLandingPage() {
  const openCalendly = () => window.open(CALENDLY_URL, '_blank');

  useEffect(() => {
    document.title = 'Paarberatung Zürich | PaarWeg – Online Paartherapie';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Professionelle Paarberatung für Paare aus Zürich. Online-Coaching bequem von zu Hause. Jetzt kostenloses Kennenlerngespräch buchen.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/paarberatung-zuerich');

    const ogTags = [
      { property: 'og:title', content: 'Paarberatung Zürich – PaarWeg' },
      { property: 'og:description', content: 'Professionelle Paarberatung in Zürich. Kostenloses Kennenlerngespräch buchen.' },
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

    // JSON-LD structured data
    const structuredData = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": "Paarberatung Zürich – PaarWeg",
      "provider": {
        "@type": "Person",
        "name": "Roland Soder",
      },
      "areaServed": "Zürich",
      "serviceType": "Paarberatung",
      "url": "https://www.paarweg.com/paarberatung-zuerich",
    };
    let scriptTag = document.querySelector('script[data-page="paarberatung-zuerich"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      scriptTag.setAttribute('data-page', 'paarberatung-zuerich');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(structuredData);
  }, []);

  return (
    <div className="w-full">
      {/* Hero */}
      <section className="bg-gradient-to-b from-primary/5 to-background py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 text-sm text-primary font-medium mb-4">
                <MapPin className="h-4 w-4" />
                Für Paare aus Zürich
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                Wieder zueinander finden
              </h1>
              <MobileReadMore>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Professionelle Paarberatung – bequem online von zu Hause aus. Ich begleite Paare
                  aus Zürich und der ganzen Schweiz auf ihrem Weg zu einer stärkeren Beziehung.
                </p>
              </MobileReadMore>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  onClick={openCalendly}
                  className="bg-primary text-primary-foreground hover:bg-primary/90"
                >
                  Kennenlerngespräch buchen
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="/assets/Paar_einfuehlsamer_Blick.png"
                alt="Paar im Gespräch"
                className="rounded-2xl shadow-xl w-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <video
            src="/assets/PaarWeg_ad.mp4"
            autoPlay
            muted
            loop
            playsInline
            className="w-full rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-muted/20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground text-center mb-10">
            Warum Online-Paarberatung?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Kein Anfahrtsweg – von zu Hause aus',
              'Flexible Terminzeiten',
              'Gleiche Qualität wie vor Ort',
              'Diskret und vertraulich',
              'Für Paare in der ganzen Schweiz',
              'Einfache Buchung online',
            ].map((benefit) => (
              <div key={benefit} className="flex items-center gap-3 p-4 rounded-lg bg-card border border-border">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm text-foreground">{benefit}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calendly */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-8">
            Jetzt Termin buchen
          </h2>
          <CalendlyInlineWidget url={CALENDLY_URL} />
        </div>
      </section>
    </div>
  );
}
