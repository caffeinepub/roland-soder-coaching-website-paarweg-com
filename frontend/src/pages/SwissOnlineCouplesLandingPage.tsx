import { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { ArrowRight, Calendar, Heart, MessageCircle, Users2, CheckCircle2, Video, Clock, Shield, Lightbulb, Play, Pause, Volume2, VolumeX } from 'lucide-react';

export default function SwissOnlineCouplesLandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

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
      { property: 'og:image', content: 'https://www.paarweg.com/assets/generated/swiss-couples-hero.dim_1200x600.png' },
      { property: 'og:locale', content: 'de_CH' },
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
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: 'Online Paarberatung Schweiz',
      provider: {
        '@type': 'Person',
        name: 'Roland Soder',
        url: 'https://www.paarweg.com',
      },
      serviceType: 'Paarberatung',
      areaServed: {
        '@type': 'Country',
        name: 'Switzerland',
      },
      url: 'https://www.paarweg.com/online-paarberatung-schweiz',
      description: 'Online Paarberatung Schweiz bei Kommunikationsproblemen in der Partnerschaft und ständig Streit in der Beziehung.',
    };

    let scriptTag = document.querySelector('script[type="application/ld+json"]');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(jsonLd);
  }, []);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handlePlay = () => setIsPlaying(true);
    const handlePause = () => setIsPlaying(false);
    const handleEnded = () => setIsPlaying(false);

    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (video.paused || video.ended) {
      if (video.ended) {
        video.currentTime = 0;
      }
      video.play();
    } else {
      video.pause();
    }
  };

  const toggleMute = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = !video.muted;
    setIsMuted(video.muted);
  };

  return (
    <div className="w-full">
      {/* Hero Section with Video */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/10 to-accent/5">
        <div className="container mx-auto px-4 py-12 md:py-20 lg:py-24">
          <div className="flex flex-col gap-8">
            {/* Text Content */}
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="mb-6 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
                Online Paarberatung Schweiz
              </h1>
              <p className="mb-4 text-xl text-muted-foreground sm:text-2xl">
                Wenn Gespräche nicht mehr verbinden
              </p>
              <p className="mb-8 text-lg text-muted-foreground">
                Online Paarberatung Schweiz bei Kommunikationsproblemen in der Partnerschaft und ständig Streit in der Beziehung. Professionell, diskret, schweizweit mit PaarWeg.
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

            {/* Hero Video – portrait 4:5 (1080×1350) */}
            <div className="mx-auto w-full" style={{ maxWidth: '540px' }}>
              <div
                className="relative overflow-hidden rounded-2xl shadow-2xl bg-muted"
                style={{ aspectRatio: '4 / 5' }}
              >
                <video
                  ref={videoRef}
                  autoPlay
                  muted
                  playsInline
                  className="absolute inset-0 h-full w-full object-cover"
                >
                  <source src="/assets/PaarWeg_ad.mp4" type="video/mp4" />
                </video>

                {/* Video Controls Overlay */}
                <div className="absolute inset-0 flex items-end justify-between p-4">
                  {/* Play/Pause Button */}
                  <button
                    onClick={togglePlayPause}
                    aria-label={isPlaying ? 'Video pausieren' : 'Video abspielen'}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60"
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5" />
                    ) : (
                      <Play className="h-5 w-5 translate-x-0.5" />
                    )}
                  </button>

                  {/* Mute/Unmute Button */}
                  <button
                    onClick={toggleMute}
                    aria-label={isMuted ? 'Ton einschalten' : 'Ton ausschalten'}
                    className="flex h-11 w-11 items-center justify-center rounded-full bg-black/50 text-white backdrop-blur-sm transition-all hover:bg-black/70 focus:outline-none focus:ring-2 focus:ring-white/60"
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5" />
                    ) : (
                      <Volume2 className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Communication Problems Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Kommunikationsprobleme in der Partnerschaft
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              Wenn Worte nicht mehr ankommen – und Schweigen lauter wird als jedes Gespräch
            </p>

            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <MessageCircle className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Aneinander vorbeireden</h3>
                <p className="text-muted-foreground">
                  Sie sagen etwas – und Ihr Partner hört etwas anderes. Missverständnisse häufen sich. Das Gefühl, nicht wirklich gehört zu werden, wächst.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Emotionale Distanz</h3>
                <p className="text-muted-foreground">
                  Die Verbindung fehlt. Sie funktionieren im Alltag, aber die Nähe und Wärme von früher scheinen weit weg.
                </p>
              </div>

              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                  <Users2 className="h-8 w-8 text-primary" />
                </div>
                <h3 className="mb-3 text-xl font-semibold">Ständig Streit</h3>
                <p className="text-muted-foreground">
                  Dieselben Themen, immer wieder. Jedes Gespräch endet im Konflikt. Sie wissen beide, dass es so nicht weitergehen kann.
                </p>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-muted/30 p-8 text-center">
              <p className="text-lg text-muted-foreground">
                Kommunikationsprobleme in der Partnerschaft sind häufig – und lösbar. Mit professioneller Begleitung finden viele Paare neue Wege, 
                einander wieder wirklich zu verstehen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Conflict Patterns Section */}
      <section className="bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-4 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Ständig Streit in der Beziehung
            </h2>
            <p className="mb-12 text-center text-lg text-muted-foreground">
              Wiederkehrende Konflikte sind kein Zeichen von Schwäche – sondern ein Signal, dass etwas Wichtiges gehört werden will
            </p>

            <div className="space-y-6">
              <div className="rounded-xl bg-background p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">Warum Konflikte sich wiederholen</h3>
                <p className="text-muted-foreground">
                  Hinter jedem Streit stecken oft tiefere Bedürfnisse, die nicht ausgedrückt werden können. Wenn diese Muster nicht erkannt werden, 
                  dreht sich die Spirale weiter – egal wie oft man dasselbe Thema bespricht.
                </p>
              </div>

              <div className="rounded-xl bg-background p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">Was Paarberatung verändern kann</h3>
                <p className="text-muted-foreground">
                  In der Paarberatung lernen Sie, die Muster hinter Ihren Konflikten zu erkennen. Sie entwickeln neue Wege, 
                  schwierige Themen anzusprechen – ohne dass es sofort eskaliert. Und Sie entdecken, was Sie beide wirklich brauchen.
                </p>
              </div>

              <div className="rounded-xl bg-background p-6 shadow-sm">
                <h3 className="mb-2 text-xl font-semibold">Für Paare in der ganzen Schweiz</h3>
                <p className="text-muted-foreground">
                  Ob Sie in Zürich, Basel, Bern, Luzern oder anderswo in der Schweiz leben – online Paarberatung macht professionelle 
                  Unterstützung für alle zugänglich. Ohne Anfahrt, ohne Wartezeiten, ohne Kompromisse bei der Qualität.
                </p>
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
            </div>
          </div>
        </div>
      </section>

      {/* How Online Counseling Works */}
      <section className="py-16 md:py-24">
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
                  <h3 className="mb-2 text-xl font-semibold">Erstgespräch buchen</h3>
                  <p className="text-muted-foreground">
                    Sie buchen online einen Termin für das unverbindliche Erstgespräch (60 Minuten, 60 CHF). 
                    Kein Druck, keine Verpflichtung – einfach ein erstes Kennenlernen.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-xl bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  2
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Online per Videoanruf</h3>
                  <p className="text-muted-foreground">
                    Die Sitzungen finden bequem von zu Hause statt – per Videoanruf, von überall in der Schweiz. 
                    Kein Pendeln, keine Parkplatzsuche, kein Stress.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-xl bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  3
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Gemeinsam arbeiten</h3>
                  <p className="text-muted-foreground">
                    In den Sitzungen schauen wir gemeinsam auf Ihre Situation. Beide Perspektiven haben Platz. 
                    Wir arbeiten an konkreten Veränderungen – Schritt für Schritt.
                  </p>
                </div>
              </div>

              <div className="flex gap-6 rounded-xl bg-background p-6 shadow-sm">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-bold text-primary-foreground">
                  4
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-semibold">Spürbare Veränderung</h3>
                  <p className="text-muted-foreground">
                    Viele Paare berichten schon nach wenigen Sitzungen von spürbaren Veränderungen – mehr Verständnis, 
                    weniger Eskalation, neue Wege der Verbindung.
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

      {/* When Counseling Makes Sense */}
      <section className="bg-muted/20 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Wann macht Paarberatung Sinn?
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4 rounded-xl bg-background p-6 shadow-sm">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="text-muted-foreground">
                  Wenn Sie das Gefühl haben, dass Sie aneinander vorbeireden – und nicht wissen, wie Sie das ändern sollen.
                </p>
              </div>
              <div className="flex gap-4 rounded-xl bg-background p-6 shadow-sm">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="text-muted-foreground">
                  Wenn dieselben Konflikte immer wieder auftauchen – und Sie beide erschöpft davon sind.
                </p>
              </div>
              <div className="flex gap-4 rounded-xl bg-background p-6 shadow-sm">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="text-muted-foreground">
                  Wenn die Nähe und Verbindung verloren gegangen ist – und Sie sich das zurückwünschen.
                </p>
              </div>
              <div className="flex gap-4 rounded-xl bg-background p-6 shadow-sm">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="text-muted-foreground">
                  Wenn Sie an einem Scheideweg stehen – und gemeinsam herausfinden wollen, wie es weitergehen soll.
                </p>
              </div>
              <div className="flex gap-4 rounded-xl bg-background p-6 shadow-sm">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="text-muted-foreground">
                  Wenn Sie Ihre Beziehung stärken wollen – auch wenn es (noch) keine große Krise gibt.
                </p>
              </div>
              <div className="flex gap-4 rounded-xl bg-background p-6 shadow-sm">
                <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                <p className="text-muted-foreground">
                  Wenn Sie sich professionelle Begleitung wünschen – diskret, ohne Anfahrt, von überall in der Schweiz.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Online Works */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Warum Online-Coaching funktioniert
            </h2>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Video className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Vertraute Umgebung</h3>
                  <p className="text-muted-foreground">
                    Viele Paare öffnen sich leichter, wenn sie in ihrer eigenen Umgebung sind. Das eigene Zuhause kann ein sicherer Rahmen sein.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Zeitersparnis</h3>
                  <p className="text-muted-foreground">
                    Keine Anfahrt, keine Parkplatzsuche. Sie sparen Zeit und Energie – und können sich voll auf das Gespräch konzentrieren.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Diskret & anonym</h3>
                  <p className="text-muted-foreground">
                    Niemand sieht Sie in einem Wartezimmer. Online-Beratung ist diskret – ein wichtiger Aspekt für viele Paare.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="mb-2 text-lg font-semibold">Gleiche Qualität</h3>
                  <p className="text-muted-foreground">
                    Studien zeigen: Online-Beratung ist genauso wirksam wie Präsenzberatung. Die Verbindung entsteht durch das Gespräch – nicht durch den Raum.
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-12 rounded-2xl bg-primary/5 p-8">
              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 h-8 w-8 shrink-0 text-primary" />
                <div>
                  <h3 className="mb-3 text-xl font-semibold">Schweizweit für Sie da</h3>
                  <p className="text-muted-foreground">
                    Ob Zürich, Basel, Bern, Luzern, St. Gallen oder Genf – mit PaarWeg erhalten Paare aus der ganzen Schweiz 
                    Zugang zu professioneller Paarberatung. Online, flexibel und auf Augenhöhe.
                  </p>
                </div>
              </div>
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
              Einfach ein erstes Gespräch – von überall in der Schweiz.
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
              Für Paare aus der ganzen Schweiz – online, flexibel und vertraulich
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
