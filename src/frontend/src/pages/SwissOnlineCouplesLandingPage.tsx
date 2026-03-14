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

const ONLINE_TESTIMONIALS = [
  {
    quote:
      "Wir wohnen auf dem Land und hätten sonst stundenlang fahren müssen. Online war die perfekte Lösung – und die Qualität der Gespräche hat uns wirklich überrascht.",
    name: "Petra & Daniel",
    location: "Thun",
    ocid: "schweiz.testimonials.item.1",
  },
  {
    quote:
      "Ich war sehr skeptisch gegenüber Online-Beratung. Heute würde ich sagen: Die Hemmschwelle war unbegründet. Es ist persönlich, strukturiert und sehr wirkungsvoll.",
    name: "Beat",
    location: "Luzern",
    ocid: "schweiz.testimonials.item.2",
  },
  {
    quote:
      "Wir haben von Beginn an online beraten – und haben das nie bereut. Die Möglichkeit, abends von zu Hause aus zu sprechen, hat den Prozess für uns überhaupt erst möglich gemacht.",
    name: "Claudia & Stefan",
    location: "St. Gallen",
    ocid: "schweiz.testimonials.item.3",
  },
];

export default function SwissOnlineCouplesLandingPage() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);

  // SEO meta tags + JSON-LD
  useEffect(() => {
    document.title =
      "Online Paarberatung Schweiz – persönlich & flexibel | PaarWeg";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Online Paarberatung für Paare in der ganzen Schweiz. Professionell, strukturiert und flexibel von zu Hause. Kostenloses Kennenlerngespräch – unverbindlich.",
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute(
      "href",
      "https://www.paarweg.com/online-paarberatung-schweiz",
    );

    const ogTags = [
      {
        property: "og:title",
        content:
          "Online Paarberatung Schweiz – persönlich & flexibel | PaarWeg",
      },
      {
        property: "og:description",
        content:
          "Online Paarberatung für Paare in der ganzen Schweiz. Professionell, strukturiert und flexibel.",
      },
      {
        property: "og:url",
        content: "https://www.paarweg.com/online-paarberatung-schweiz",
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

    // JSON-LD structured data
    const jsonLd = document.createElement("script");
    jsonLd.type = "application/ld+json";
    jsonLd.id = "jsonld-schweiz";
    jsonLd.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Online Paarberatung Schweiz",
      provider: {
        "@type": "Person",
        name: "Roland Soder",
        url: "https://www.paarweg.com",
      },
      areaServed: {
        "@type": "Country",
        name: "Switzerland",
      },
      serviceType: "Online Paarberatung",
      url: "https://www.paarweg.com/online-paarberatung-schweiz",
    });
    document.head.appendChild(jsonLd);

    return () => {
      const ld = document.getElementById("jsonld-schweiz");
      if (ld) ld.remove();
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
              Online Paarberatung Schweiz
            </p>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground leading-tight mb-5">
              Online-Paarberatung Schweiz – wenn Gespräche nicht mehr verbinden
            </h1>
            <p className="text-lg text-muted-foreground mb-4">
              Kommunikationsprobleme in der Partnerschaft und ständig Streit in
              der Beziehung belasten viele Paare – quer durch die ganze Schweiz.
            </p>
            <p className="text-sm text-muted-foreground italic mb-8">
              Online Paarcoaching bietet einen strukturierten Rahmen für Klärung
              und Veränderung – schweizweit, flexibel und ohne Anfahrtsweg.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Button
                size="lg"
                className="text-base px-8"
                asChild
                data-ocid="schweiz.primary_button"
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
                data-ocid="schweiz.secondary_button"
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
              "Online-Paarberatung – schweizweit verfügbar",
              "Einstieg auch mit nur einem Partner möglich",
              "Kostenloses, unverbindliches Kennenlerngespräch",
              "Keine Anreise – von überall in der Schweiz",
            ].map((item, i) => (
              <div
                key={item}
                className="flex flex-col items-center text-center gap-2 p-4 rounded-xl bg-background border border-primary/10"
                data-ocid={`schweiz.item.${i + 1}`}
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
            Warum Online-Paarberatung in der Schweiz gut funktioniert
          </h2>
          <p className="text-muted-foreground text-center mb-8 text-lg">
            Gerade in der Schweiz – mit langen Arbeitswegen und vollen
            Terminkalendern – ist das Online-Setting ein echter Vorteil.
          </p>
          <div className="space-y-4 mb-8">
            {[
              {
                icon: MessageCircle,
                text: "Gespräche online können überraschend persönlich und wirksam sein",
              },
              {
                icon: Home,
                text: "In der eigenen Umgebung sprechen viele Menschen entspannter und offener",
              },
              {
                icon: ShieldCheck,
                text: "Kein Weg, keine Parkplatzsuche – für Paare überall in der Schweiz",
              },
              {
                icon: Users,
                text: "Abendtermine möglich – auch wenn der Alltag wenig Spielraum lässt",
              },
              {
                icon: Heart,
                text: "Entscheidend ist die Qualität des Prozesses – nicht der Ort",
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
              data-ocid="schweiz.kennenlernen.primary_button"
            >
              <Link to="/kennenlerngespräch">
                <Calendar className="mr-2 h-5 w-5" />
                Jetzt Kennenlerngespräch buchen
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
            Nicht immer sind beide Partner bereit – oder beide überhaupt
            anwesend. Ein Einstieg alleine ist möglich.
          </p>
          <p className="text-muted-foreground text-lg mb-6">
            Viele Prozesse beginnen mit einem ersten Einzelgespräch.
          </p>
          <div className="space-y-3 mb-6">
            {[
              "Die eigene Situation und die eigenen Wünsche klarer sehen",
              "Muster in der Beziehungsdynamik besser verstehen",
              "Mögliche nächste Schritte erkennen und abwägen",
            ].map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary mt-0.5 shrink-0" />
                <p className="text-foreground">{item}</p>
              </div>
            ))}
          </div>
          <p className="text-sm text-muted-foreground italic">
            Manchmal führt das zu dem Entschluss, gemeinsam weiterzumachen –
            manchmal auch zu einem neuen Verständnis für sich selbst.
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
            Im kostenlosen Kennenlerngespräch zeige ich Ihnen, wie der Prozess
            abläuft und was Sie erwartet.
          </p>
          <p className="text-muted-foreground text-lg mb-4">
            Viele Paare sind überrascht, wie direkt und strukturiert das
            Gespräch ist – ohne Floskeln, ohne Umwege.
          </p>
          <p className="text-muted-foreground text-lg mb-8">
            Danach entscheiden Sie selbst, ob Sie weitermachen möchten. Keine
            Verpflichtung, kein Druck.
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
              data-ocid="schweiz.kennenlernen2.primary_button"
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
            PaarWeg unterstützt dabei: Gemeinsam herausfinden, was möglich ist
            und welcher Weg für beide stimmig ist.
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
                desc: "Muster erkennen, Perspektiven erweitern, neue Wege gehen.",
              },
              {
                icon: Heart,
                title: "Raum für beide",
                desc: "Beide Partner kommen zu Wort – gleichwertig und ohne Wertung.",
              },
              {
                icon: Users,
                title: "Individuell angepasst",
                desc: "Kein Schema F. Der Prozess richtet sich nach Ihrer Situation.",
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
              data-ocid="schweiz.ansatz.primary_button"
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
              data-ocid="schweiz.ansatz.secondary_button"
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
            data-ocid="schweiz.final.primary_button"
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
