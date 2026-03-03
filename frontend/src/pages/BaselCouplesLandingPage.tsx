import { useEffect, useRef, useState } from 'react';
import { Play, Pause, Volume2, VolumeX, Calendar, CheckCircle, Heart, MessageCircle, Users, ArrowRight, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';

const GTAG_ID = 'AW-17916128725';
const CONTACT_URL = '/kontakt';

export default function BaselCouplesLandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // SEO meta tags
  useEffect(() => {
    document.title = 'Paarberatung Basel – Professionelle Paartherapie | PaarWeg';

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'Paarberatung in Basel: Professionelle Unterstützung für Paare in Krisen, bei Kommunikationsproblemen und Konflikten. Jetzt kostenloses Kennenlerngespräch buchen.');

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://www.paarweg.com/paarberatung-basel');

    const ogTags = [
      { property: 'og:title', content: 'Paarberatung Basel – PaarWeg' },
      { property: 'og:description', content: 'Professionelle Paarberatung in Basel. Kostenloses Kennenlerngespräch buchen.' },
      { property: 'og:url', content: 'https://www.paarweg.com/paarberatung-basel' },
      { property: 'og:type', content: 'website' },
      { property: 'og:image', content: 'https://www.paarweg.com/assets/paar_an_notebook-1.png' },
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
  }, []);

  // Scoped Google Tag for Basel page only
  useEffect(() => {
    const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const gtagScript = document.createElement('script');
      gtagScript.async = true;
      gtagScript.src = scriptSrc;
      gtagScript.id = 'gtag-basel-script';
      document.head.appendChild(gtagScript);
    }
    const inlineScript = document.createElement('script');
    inlineScript.id = 'gtag-basel-inline';
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GTAG_ID}');
    `;
    document.head.appendChild(inlineScript);

    return () => {
      const s1 = document.getElementById('gtag-basel-script');
      const s2 = document.getElementById('gtag-basel-inline');
      if (s1) s1.remove();
      if (s2) s2.remove();
    };
  }, []);

  // Video event listeners
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

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;
    if (video.paused || video.ended) {
      if (video.ended) video.currentTime = 0;
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
      {/* Hero Section */}
      <section className="relative bg-primary/5 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">Paarberatung Basel</p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
              Klarheit für Ihre Partnerschaft gewinnen
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Viele Paare stehen irgendwann an einem Punkt, an dem Gespräche eskalieren, Schweigen überwiegt oder die Verbindung unsicher geworden ist.
            </p>
            <p className="text-lg text-muted-foreground mb-4">
              In dieser Phase geht es nicht immer darum, etwas „wiederherzustellen", sondern darum, Klarheit zu gewinnen.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Als erfahrener Paarberatungscoach begleite ich Sie dabei, Ihre Situation offen zu betrachten, Muster zu verstehen und eine bewusste Entscheidung für Ihren weiteren Weg zu treffen – respektvoll, strukturiert und auf Augenhöhe.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button size="lg" className="text-base px-8" asChild>
                <a href={CONTACT_URL}>
                  <Calendar className="mr-2 h-5 w-5" />
                  Kostenloses Kennenlerngespräch buchen
                </a>
              </Button>
              <Button size="lg" variant="outline" className="text-base px-8" asChild>
                <a href="/">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Mehr über PaarWeg
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Video Section – directly below hero */}
      <section className="py-10 md:py-14 bg-primary/5">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="relative w-full" style={{ aspectRatio: '4/5' }}>
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-2xl shadow-xl"
              autoPlay
              muted
              playsInline
              loop
              style={{ aspectRatio: '4/5' }}
            >
              <source src="/assets/PaarWeg_ad.mp4" type="video/mp4" />
            </video>
            <button
              onClick={togglePlay}
              className="absolute bottom-4 left-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              aria-label={isPlaying ? 'Video pausieren' : 'Video abspielen'}
            >
              {isPlaying ? <Pause className="h-5 w-5" /> : <Play className="h-5 w-5" />}
            </button>
            <button
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              aria-label={isMuted ? 'Ton einschalten' : 'Ton ausschalten'}
            >
              {isMuted ? <VolumeX className="h-5 w-5" /> : <Volume2 className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </section>

      {/* Probleme Section */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            Kennen Sie das?
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-lg">
            Diese Situationen erleben viele Paare – Sie sind damit nicht allein.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: MessageCircle, text: 'Gespräche enden immer wieder im Streit oder im Schweigen' },
              { icon: Heart, text: 'Die emotionale Nähe und Verbindung fehlt zunehmend' },
              { icon: Users, text: 'Sie reden aneinander vorbei, obwohl Sie es besser wollen' },
              { icon: Phone, text: 'Ein konkreter Auslöser (Vertrauensbruch, Krise) belastet die Beziehung' },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-start gap-4 p-5 rounded-xl bg-primary/5 border border-primary/10">
                <Icon className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                <p className="text-foreground">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Wie ich helfe */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            Wie Paarberatung bei mir funktioniert
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-lg">
            Kein Schuldzuweisen, kein Urteil – sondern ein strukturierter Weg zu mehr Verständnis.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                step: '1',
                title: 'Kostenloses Kennenlerngespräch',
                desc: 'In einem ersten, unverbindlichen Gespräch lernen wir uns kennen. Sie schildern Ihre Situation, ich erkläre meinen Ansatz.',
              },
              {
                step: '2',
                title: 'Gemeinsame Zielsetzung',
                desc: 'Wir definieren gemeinsam, was Sie sich für Ihre Beziehung wünschen und welche Themen wir angehen.',
              },
              {
                step: '3',
                title: 'Begleitung & Umsetzung',
                desc: 'In regelmässigen Sitzungen arbeiten wir an konkreten Mustern, Kommunikation und neuen Wegen füreinander.',
              },
            ].map(({ step, title, desc }) => (
              <div key={step} className="flex flex-col items-center text-center p-6 rounded-2xl bg-background border border-border shadow-sm">
                <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold text-lg mb-4">
                  {step}
                </div>
                <h3 className="font-semibold text-foreground mb-2">{title}</h3>
                <p className="text-muted-foreground text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Warum PaarWeg */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-10">
            Warum Paare PaarWeg wählen
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {[
              'Erfahrener Coach mit fundierter Ausbildung',
              'Wertschätzender, neutraler Umgang mit beiden Partnern',
              'Klare Struktur und lösungsorientiertes Vorgehen',
              'Kostenloses Kennenlerngespräch ohne Verpflichtung',
              'Diskretion und professionelle Schweigepflicht',
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3 p-4 rounded-xl bg-primary/5">
                <CheckCircle className="h-5 w-5 text-primary shrink-0" />
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-14 md:py-20 bg-primary/10">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Bereit für den ersten Schritt?
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Buchen Sie jetzt Ihr kostenloses Kennenlerngespräch – unverbindlich und ohne Verpflichtung. Ich freue mich darauf, Sie kennenzulernen.
          </p>
          <Button size="lg" className="text-base px-10" asChild>
            <a href={CONTACT_URL}>
              <Calendar className="mr-2 h-5 w-5" />
              Kostenloses Kennenlerngespräch buchen
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
