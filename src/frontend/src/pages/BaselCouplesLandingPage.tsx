import { Button } from "@/components/ui/button";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Brain,
  Calendar,
  CheckCircle,
  Heart,
  Home,
  MessageCircle,
  Pause,
  Play,
  Quote,
  ShieldCheck,
  Users,
  Volume2,
  VolumeX,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const GTAG_ID = "AW-17916128725";

const ONLINE_TESTIMONIALS = [
  {
    quote:
      "Wir haben lange gezögert, ob wir das online machen sollen. Aber schon nach dem ersten Gespräch war klar: Es funktioniert. Wir waren entspannter als in einem fremden Büro.",
    name: "Andrea & Markus",
    location: "Basel",
    ocid: "basel.testimonials.item.1",
  },
  {
    quote:
      "Ich habe zuerst alleine begonnen, weil mein Mann noch skeptisch war. Das hat geholfen. Heute machen wir die Sitzungen gemeinsam – und es tut uns beiden gut.",
    name: "Franziska",
    location: "Liestal",
    ocid: "basel.testimonials.item.2",
  },
  {
    quote:
      "Die Möglichkeit, abends nach der Arbeit einfach online einzuwählen, hat für uns den Unterschied gemacht. Wir hätten sonst nie regelmässig Termine gefunden.",
    name: "Simon & Karin",
    location: "Binningen",
    ocid: "basel.testimonials.item.3",
  },
];

export default function BaselCouplesLandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // SEO meta tags
  useEffect(() => {
    document.title =
      "Online-Paarberatung Basel – persönlich & flexibel | PaarWeg";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Online-Paarberatung für Paare in Basel. Professionell, strukturiert und diskret – von zu Hause aus. Kostenloses Kennenlerngespräch – unverbindlich.",
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://www.paarweg.com/paarberatung-basel",
    );

    const ogTags = [
      {
        property: "og:title",
        content: "Online-Paarberatung Basel – persönlich & flexibel | PaarWeg",
      },
      {
        property: "og:description",
        content:
          "Online-Paarberatung für Paare in Basel. Professionell, strukturiert und diskret – von zu Hause aus.",
      },
      {
        property: "og:url",
        content: "https://www.paarweg.com/paarberatung-basel",
      },
      { property: "og:type", content: "website" },
      {
        property: "og:image",
        content: "https://www.paarweg.com/assets/paar_an_notebook-1.png",
      },
      { property: "og:locale", content: "de_CH" },
    ];
    for (const { property, content } of ogTags) {
      let tag = document.querySelector(`meta[property="${property}"]`);
      if (!tag) {
        tag = document.createElement("meta");
        tag.setAttribute("property", property);
        document.head.appendChild(tag);
      }
      tag.setAttribute("content", content);
    }
  }, []);

  // Scoped Google Tag for Basel page only
  useEffect(() => {
    const scriptSrc = `https://www.googletagmanager.com/gtag/js?id=${GTAG_ID}`;
    if (!document.querySelector(`script[src="${scriptSrc}"]`)) {
      const gtagScript = document.createElement("script");
      gtagScript.async = true;
      gtagScript.src = scriptSrc;
      gtagScript.id = "gtag-basel-script";
      document.head.appendChild(gtagScript);
    }
    const inlineScript = document.createElement("script");
    inlineScript.id = "gtag-basel-inline";
    inlineScript.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GTAG_ID}');
    `;
    document.head.appendChild(inlineScript);

    return () => {
      const s1 = document.getElementById("gtag-basel-script");
      const s2 = document.getElementById("gtag-basel-inline");
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
    video.addEventListener("play", handlePlay);
    video.addEventListener("pause", handlePause);
    video.addEventListener("ended", handleEnded);
    return () => {
      video.removeEventListener("play", handlePlay);
      video.removeEventListener("pause", handlePause);
      video.removeEventListener("ended", handleEnded);
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
      {/* 1. Hero Section */}
      <section className="relative bg-primary/5 py-12 md:py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Paarberatung Basel
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
              Online-Paarberatung für Paare in Basel
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Wenn Gespräche nicht mehr gelingen, Distanz entsteht oder ein
              Konflikt die Beziehung belastet – dann kann ein strukturierter,
              neutraler Rahmen helfen, wieder Klarheit zu gewinnen.
            </p>
            <p className="text-sm text-muted-foreground italic mb-8">
              Diskret, professionell und bequem von zu Hause aus – ohne
              Anfahrtsweg.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="text-base px-8"
                asChild
                data-ocid="basel.primary_button"
              >
                <Link to="/kennenlerngespräch">
                  <Calendar className="mr-2 h-5 w-5" />
                  Unverb. Kennenlerngespräch vereinbaren
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8"
                asChild
                data-ocid="basel.secondary_button"
              >
                <a href="/">
                  <ArrowRight className="mr-2 h-5 w-5" />
                  Mehr über die Online-Paarberatung erfahren
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Video Section */}
      <section className="py-10 md:py-14 bg-primary/5">
        <div className="container mx-auto px-4 max-w-lg">
          <div className="relative w-full" style={{ aspectRatio: "4/5" }}>
            <video
              ref={videoRef}
              className="w-full h-full object-cover rounded-2xl shadow-xl"
              autoPlay
              muted
              playsInline
              loop
              style={{ aspectRatio: "4/5" }}
            >
              <source src="/assets/PaarWeg_ad.mp4" type="video/mp4" />
            </video>
            <button
              type="button"
              onClick={togglePlay}
              className="absolute bottom-4 left-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              aria-label={isPlaying ? "Video pausieren" : "Video abspielen"}
            >
              {isPlaying ? (
                <Pause className="h-5 w-5" />
              ) : (
                <Play className="h-5 w-5" />
              )}
            </button>
            <button
              type="button"
              onClick={toggleMute}
              className="absolute bottom-4 right-4 bg-black/60 hover:bg-black/80 text-white rounded-full p-2 transition-colors"
              aria-label={isMuted ? "Ton einschalten" : "Ton ausschalten"}
            >
              {isMuted ? (
                <VolumeX className="h-5 w-5" />
              ) : (
                <Volume2 className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
      </section>

      {/* 3. Trust Block */}
      <section className="py-10 md:py-14 bg-primary/5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Online-Paarberatung – diskret und persönlich",
              "Einstieg auch mit nur einem Partner möglich",
              "Kostenloses, unverbindliches Kennenlerngespräch",
              "Flexibel von zu Hause – kein Anfahrtsweg",
            ].map((item, i) => (
              <div
                key={item}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-background border border-primary/10"
                data-ocid={`basel.item.${i + 1}`}
              >
                <CheckCircle className="h-6 w-6 text-primary shrink-0" />
                <p className="text-sm text-foreground font-medium">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Warum Online-Paarberatung funktioniert */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            Warum Online-Paarberatung gut funktioniert
          </h2>
          <p className="text-muted-foreground text-center mb-8 text-lg">
            Viele Paare sind anfangs unsicher, ob Paarberatung online dieselbe
            Wirkung haben kann wie ein Gespräch vor Ort.
            <br className="hidden sm:block" />
            Die Praxis zeigt: Sie kann – und bietet dabei echte Vorteile.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                icon: MessageCircle,
                text: "Online-Gespräche können überraschend nah und konzentriert sein",
              },
              {
                icon: Home,
                text: "Zu Hause sprechen viele Menschen offener als in einem fremden Büro",
              },
              {
                icon: ShieldCheck,
                text: "Keine Anreise, kein Zeitaufwand – leichter in den Alltag integrierbar",
              },
              {
                icon: Users,
                text: "Auch abends oder am Wochenende buchbar – für volle Terminkalender",
              },
              {
                icon: Heart,
                text: "Was zählt, ist die Qualität des Gesprächs – nicht der physische Ort",
              },
            ].map(({ icon: Icon, text }) => (
              <div
                key={text}
                className="flex items-start gap-4 p-4 rounded-xl bg-primary/5 border border-primary/10"
              >
                <Icon className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-foreground">{text}</p>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Button
              size="lg"
              className="text-base px-8"
              asChild
              data-ocid="basel.kennenlernen.primary_button"
            >
              <Link to="/kennenlerngespräch">
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt unverbindlich kennenlernen
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 5. Alleine beginnen */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
            Sie können auch alleine beginnen
          </h2>
          <p className="text-muted-foreground text-lg mb-3">
            Es kommt vor, dass ein Partner noch nicht bereit ist – oder dass Sie
            zunächst alleine Klarheit suchen.
          </p>
          <p className="text-muted-foreground text-lg mb-6">
            Ein erstes Gespräch ist jederzeit auch ohne den anderen Partner
            möglich.
          </p>
          <div className="space-y-3 mb-6">
            {[
              "Die eigene Situation klarer einschätzen",
              "Neue Handlungsmöglichkeiten erkennen",
              "Den eigenen Anteil an der Dynamik besser verstehen",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic">
            Manchmal entsteht daraus der Wunsch, die nächsten Schritte gemeinsam
            als Paar anzugehen.
          </p>
        </div>
      </section>

      {/* 6. Erst kennenlernen, dann entscheiden */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-6">
            Erst kennenlernen, dann entscheiden
          </h2>
          <p className="text-muted-foreground text-lg mb-4">
            Im Kennenlerngespräch erleben Sie, wie die Zusammenarbeit abläuft –
            und ob Sie sich in diesem Rahmen wohlfühlen.
          </p>
          <p className="text-muted-foreground text-lg mb-4">
            Es geht nicht darum, sofort eine Entscheidung zu treffen. Es geht
            darum, einen ersten Eindruck zu gewinnen.
          </p>
          <p className="text-muted-foreground text-lg mb-8">
            Danach entscheiden Sie in Ruhe, ob eine Zusammenarbeit für Sie
            sinnvoll ist. Kein Druck, keine Verpflichtung.
          </p>
          <div className="bg-primary/10 rounded-xl p-5 mb-8 text-center">
            <p className="text-foreground font-medium">
              Das Kennenlerngespräch ist kostenlos, dauert 30 Minuten und findet
              online statt.
            </p>
          </div>
          <div className="text-center">
            <Button
              size="lg"
              className="text-base px-8"
              asChild
              data-ocid="basel.kennenlernen2.primary_button"
            >
              <Link to="/kennenlerngespräch">
                <Calendar className="mr-2 h-5 w-5" />
                Kennenlerngespräch vereinbaren
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* 7. So funktioniert Online-Paarberatung bei PaarWeg */}
      <section className="py-14 md:py-20 bg-muted/30">
        <div className="container mx-auto px-4 max-w-4xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-4">
            So funktioniert Online-Paarberatung bei PaarWeg
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-lg">
            Ein klarer Rahmen, bewährte Methoden – und ein Prozess, der sich an
            Ihre Situation anpasst.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mb-10">
            {[
              {
                icon: Brain,
                title: "Strukturiert & fundiert",
                desc: "Wissenschaftlich gestützte Methoden, klar aufgebaut.",
              },
              {
                icon: MessageCircle,
                title: "Systemisch & lösungsorientiert",
                desc: "Muster verstehen, neue Wege entwickeln.",
              },
              {
                icon: Heart,
                title: "Raum für beide",
                desc: "Beide Partner kommen zu Wort – ohne Wertung.",
              },
              {
                icon: Users,
                title: "Individuell angepasst",
                desc: "Jedes Paar ist anders. Der Prozess passt sich an.",
              },
            ].map(({ icon: Icon, title, desc }) => (
              <div
                key={title}
                className="flex items-start gap-4 p-5 rounded-xl bg-background border border-border shadow-sm"
              >
                <Icon className="h-6 w-6 text-primary mt-0.5 shrink-0" />
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {title}
                  </h3>
                  <p className="text-sm text-muted-foreground">{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              size="lg"
              className="text-base px-8"
              asChild
              data-ocid="basel.ansatz.primary_button"
            >
              <Link to="/kennenlerngespräch">
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt Kennenlerngespräch buchen
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-base px-8"
              asChild
              data-ocid="basel.ansatz.secondary_button"
            >
              <a href="/">
                <ArrowRight className="mr-2 h-5 w-5" />
                Mehr über PaarWeg
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 8. Testimonials – Online-Setting */}
      <section className="py-14 md:py-20 bg-background">
        <div className="container mx-auto px-4 max-w-5xl">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground text-center mb-3">
            Was Paare über das Online-Setting sagen
          </h2>
          <p className="text-muted-foreground text-center mb-10 text-base">
            Erfahrungen aus dem Online-Coaching – in den eigenen Worten der
            Teilnehmenden.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {ONLINE_TESTIMONIALS.map(({ quote, name, location, ocid }) => (
              <div
                key={ocid}
                data-ocid={ocid}
                className="flex flex-col justify-between bg-[#f9f7f4] border border-primary/10 rounded-2xl p-6 shadow-sm"
              >
                <div>
                  <Quote
                    className="h-7 w-7 text-primary/30 mb-4"
                    aria-hidden="true"
                  />
                  <p className="text-foreground text-base italic leading-relaxed mb-6">
                    &ldquo;{quote}&rdquo;
                  </p>
                </div>
                <div className="border-t border-primary/10 pt-4">
                  <p className="text-sm font-semibold text-foreground">
                    {name}
                  </p>
                  <p className="text-xs text-muted-foreground mt-0.5">
                    {location}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Final CTA */}
      <section className="py-14 md:py-20 bg-primary/10">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Den ersten Schritt machen
          </h2>
          <p className="text-muted-foreground text-lg mb-8">
            Das Kennenlerngespräch ist kostenlos und unverbindlich. Sie erleben,
            wie Online-Paarberatung funktioniert – und entscheiden danach in
            Ruhe.
          </p>
          <Button
            size="lg"
            className="text-base px-10"
            asChild
            data-ocid="basel.final.primary_button"
          >
            <Link to="/kennenlerngespräch">
              <Calendar className="mr-2 h-5 w-5" />
              Unverb. Kennenlerngespräch vereinbaren
            </Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
