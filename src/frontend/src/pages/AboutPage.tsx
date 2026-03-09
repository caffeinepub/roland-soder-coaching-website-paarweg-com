import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  Eye,
  Heart,
  Info,
  Users,
} from "lucide-react";
import { useEffect } from "react";

export default function AboutPage() {
  useEffect(() => {
    document.title =
      "Roland Soder – Dipl. wertorientierter systemischer Master of Coaching & Partnervermittlung | PaarWeg";

    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement("meta");
      metaDescription.setAttribute("name", "description");
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute(
      "content",
      "Lernen Sie Roland Soder kennen – Dipl. wertorientierter systemischer Master of Coaching und Mitgründer von paarwärts®. Empathisch, klar und authentisch. Wertorientiertes Paarcoaching in Basel.",
    );

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.paarweg.com/ueber-mich");

    // Open Graph tags
    const ogTags = [
      {
        property: "og:title",
        content:
          "Roland Soder – Dipl. wertorientierter systemischer Master of Coaching & Partnervermittlung | PaarWeg",
      },
      {
        property: "og:description",
        content:
          "Dipl. wertorientierter systemischer Master of Coaching für Paarcoaching und Beziehungsbegleitung. Mitgründer von paarwärts® Premium-Partnervermittlung. Empathisch, klar und authentisch.",
      },
      { property: "og:url", content: "https://www.paarweg.com/ueber-mich" },
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

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10">
        <div className="container mx-auto px-4 py-20 md:px-6 md:py-32">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <div className="flex flex-col justify-center space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                  Roland Soder
                </h1>
                <p className="text-xl font-medium text-primary">
                  Dipl. wertorientierter systemischer Master of Coaching
                </p>
                <div className="space-y-4 text-lg text-muted-foreground">
                  <p>
                    Ich begleite Menschen und Paare auf ihrem Weg zu mehr
                    Klarheit, Nähe und authentischer Verbindung. Ohne Floskeln,
                    mit klarer Haltung und echtem Interesse an dem, was wirklich
                    ist.
                  </p>
                  <p>
                    Meine Arbeit basiert auf der Überzeugung, dass Beziehungen
                    wachsen können – wenn beide bereit sind hinzuschauen, wenn
                    Raum ist für beide Perspektiven, und wenn Veränderung nicht
                    als Bedrohung, sondern als Chance verstanden wird.
                  </p>
                </div>
              </div>
            </div>
            <div className="relative flex items-center justify-center">
              <img
                src="/assets/Ich.jpg"
                alt="Roland Soder – Dipl. wertorientierter systemischer Master of Coaching"
                className="w-64 rounded-2xl object-cover shadow-2xl md:w-80"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Meine Haltung
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Beziehungen sind komplex. Sie fordern uns heraus, bringen uns an
                unsere Grenzen und zeigen uns, wo wir noch wachsen dürfen. Das
                ist nicht angenehm – aber es ist wertvoll. Krisen sind keine
                Zeichen des Scheiterns, sondern Einladungen zur Entwicklung.
              </p>
              <p>
                Ich glaube nicht an schnelle Lösungen oder einfache Rezepte.
                Jede Beziehung ist einzigartig, jeder Mensch bringt seine eigene
                Geschichte mit. Was für das eine Paar funktioniert, muss für ein
                anderes nicht passen. Deshalb gibt es bei mir keine
                Standardlösungen, sondern individuelle Begleitung.
              </p>
              <p>
                Meine Aufgabe ist es, einen Raum zu schaffen, in dem beide
                Seiten gehört werden, in dem Klarheit entstehen kann und in dem
                echte Veränderung möglich wird. Ich bin nicht hier, um zu
                urteilen oder Partei zu ergreifen. Ich bin hier, um zu verstehen
                – und Sie dabei zu helfen, einander zu verstehen.
              </p>
              <p>
                Dabei arbeite ich ohne Schuldzuweisung, aber mit klarer
                Benennung dessen, was ist. Ich bin nicht neutral – ich bin
                parteilich für die Beziehung und für das Wachstum beider
                Partner. Ich fordere heraus, ohne zu überfordern. Ich benenne,
                ohne zu verurteilen. Ich begleite, ohne die Verantwortung
                abzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Werte, die meine Arbeit prägen
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <Heart className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Empathie</h3>
                      <p className="text-sm text-muted-foreground">
                        Ich höre zu, verstehe und nehme ernst, was Sie bewegt.
                        Empathie bedeutet nicht, alles gutzuheißen – aber alles
                        zu verstehen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <Eye className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Klarheit</h3>
                      <p className="text-sm text-muted-foreground">
                        Ich benenne, was ich sehe – auch wenn es unangenehm ist.
                        Klarheit ist die Grundlage für Veränderung.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <Users className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Respekt</h3>
                      <p className="text-sm text-muted-foreground">
                        Ich respektiere Ihre Entscheidungen, Ihre Grenzen und
                        Ihren Weg – auch wenn er anders ist, als ich ihn gehen
                        würde.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Authentizität</h3>
                      <p className="text-sm text-muted-foreground">
                        Ich bin echt, keine Rolle. Was Sie sehen, ist was Sie
                        bekommen – mit allen Ecken und Kanten.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Wie ich arbeite
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Systemisch</h3>
                      <p className="text-sm text-muted-foreground">
                        Ich schaue auf Muster, Dynamiken und Wechselwirkungen –
                        nicht nur auf einzelne Verhaltensweisen. Beziehungen
                        sind Systeme, und Veränderung in einem Teil wirkt sich
                        auf das Ganze aus.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Lösungsorientiert</h3>
                      <p className="text-sm text-muted-foreground">
                        Wir analysieren nicht endlos die Vergangenheit, sondern
                        entwickeln konkrete Schritte für die Zukunft. Verstehen
                        ist wichtig – aber Handeln ist entscheidend.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">
                        Empathisch und klar
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Ich höre zu, verstehe – und benenne auch das, was
                        unangenehm ist. Ohne Vorwurf, aber mit Klarheit.
                        Empathie ohne Klarheit ist wirkungslos.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">
                        Ressourcenorientiert
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        Ich fokussiere auf das, was funktioniert, auf Stärken
                        und Potenziale – nicht nur auf Probleme. Jede Beziehung
                        hat Ressourcen, auch in der Krise.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Prozessorientiert</h3>
                      <p className="text-sm text-muted-foreground">
                        Veränderung braucht Zeit. Ich begleite Sie durch den
                        Prozess, ohne zu drängen, aber auch ohne Sie in der
                        Komfortzone zu lassen.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2">
                <CardContent className="pt-6">
                  <div className="mb-3 flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-2 font-semibold">Erfahrungsbasiert</h3>
                      <p className="text-sm text-muted-foreground">
                        Ich bringe nicht nur theoretisches Wissen mit, sondern
                        auch Lebenserfahrung. Ich weiß, dass Beziehungen komplex
                        sind – aus eigener Erfahrung.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Value-Oriented Coaching Section */}
            <div className="mt-12">
              <Card className="border-2 bg-muted/30">
                <CardContent className="pt-8">
                  <div className="mb-4 flex items-start gap-3">
                    <Compass className="mt-1 h-7 w-7 shrink-0 text-primary" />
                    <div>
                      <h3 className="mb-3 text-xl font-semibold">
                        Wertorientiertes Arbeiten
                      </h3>
                      <div className="space-y-4 text-muted-foreground">
                        <p>
                          Als{" "}
                          <strong className="text-foreground">
                            Dipl. wertorientierter systemischer Master of
                            Coaching
                          </strong>{" "}
                          ist das wertorientierte Arbeiten ein zentraler
                          Bestandteil meiner Begleitung. Werte sind der innere
                          Kompass, der uns Orientierung gibt – besonders dann,
                          wenn wir uns in Beziehungen verloren fühlen oder nicht
                          mehr wissen, wohin der gemeinsame Weg führen soll.
                        </p>
                        <p>
                          Im Coachingprozess schauen wir gemeinsam auf Ihre
                          persönlichen Werte und die Werte Ihrer Beziehung: Was
                          ist Ihnen wirklich wichtig? Was gibt Ihrem Leben und
                          Ihrer Partnerschaft Sinn? Wo stimmen Ihre Werte
                          überein – und wo gibt es Unterschiede, die zu
                          Konflikten führen?
                        </p>
                        <p>
                          Diese{" "}
                          <strong className="text-foreground">
                            Werteklärung
                          </strong>{" "}
                          schafft Klarheit und ermöglicht es, Entscheidungen
                          bewusster zu treffen. Sie hilft dabei, zu verstehen,
                          warum bestimmte Themen so viel Gewicht haben, warum
                          manche Konflikte immer wiederkehren – und wo echte
                          Veränderung ansetzen kann.
                        </p>
                        <p>
                          Wertorientiertes Coaching bedeutet nicht, dass ich
                          Ihnen sage, welche Werte „richtig" sind. Es bedeutet,
                          dass ich Sie dabei unterstütze,{" "}
                          <strong className="text-foreground">
                            Ihre eigenen Werte zu erkennen, zu benennen und
                            danach zu handeln
                          </strong>
                          . Authentizität entsteht, wenn unser Handeln mit
                          unseren Werten übereinstimmt. Und genau das ist die
                          Grundlage für eine erfüllte Beziehung.
                        </p>
                        <p className="text-sm italic">
                          Dieser Ansatz verbindet sich nahtlos mit meiner
                          systemischen und ressourcenorientierten Arbeitsweise:
                          Werte geben Richtung, Empathie schafft Verbindung, und
                          Klarheit ermöglicht Veränderung.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Background Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <h2 className="mb-8 text-center text-3xl font-bold tracking-tight sm:text-4xl">
              Mein Hintergrund
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground">
              <p>
                Ich arbeite seit vielen Jahren mit Paaren und Einzelpersonen.
                Meine Ausbildungen und Weiterbildungen umfassen systemische
                Beratung und verschiedene Ansätze der
                Persönlichkeitsentwicklung. Ich bilde mich kontinuierlich
                weiter, weil ich glaube, dass gute Begleitung lebenslanges
                Lernen erfordert.
              </p>
              <p>
                Ich bin Mitgründer von{" "}
                <strong className="text-foreground">paarwärts®</strong>, einer
                Premium-Partnervermittlung. In diesem Rahmen habe ich zahlreiche
                intensive Gespräche mit Singles geführt – über Beziehungsmuster,
                wiederkehrende Herausforderungen und die Frage, warum frühere
                Partnerschaften gescheitert sind. Diese Erfahrung hat meinen
                Blick für Beziehungsdynamiken geschärft und fließt heute direkt
                in meine Coaching-Arbeit ein.
              </p>
              <p>
                Ich begegne Menschen mit Respekt, Neugier und dem echten
                Interesse daran, was sie bewegt. Ich bin nicht hier, um zu
                urteilen oder Ratschläge zu erteilen – sondern um gemeinsam mit
                Ihnen herauszufinden, was wirklich gebraucht wird und welche
                Schritte sinnvoll sind.
              </p>
              <p>
                Meine Arbeit ist geprägt von der Überzeugung, dass jeder Mensch
                die Ressourcen in sich trägt, die er für Veränderung braucht.
                Meine Aufgabe ist es, diese sichtbar zu machen und nutzbar zu
                machen.
              </p>
              <p>
                Ich lebe selbst in einer Partnerschaft und weiß aus eigener
                Erfahrung, dass Beziehungen Arbeit bedeuten – schöne,
                herausfordernde, manchmal anstrengende Arbeit. Diese persönliche
                Erfahrung fließt in meine Begleitung ein: nicht als Ratschlag,
                sondern als Verständnis.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notice Section */}
      <section className="py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl">
            <Card className="border-2 border-primary/20 bg-primary/5">
              <CardContent className="pt-8 pb-8">
                <div className="flex items-start gap-4">
                  <Info className="mt-1 h-6 w-6 shrink-0 text-primary" />
                  <div>
                    <h2 className="mb-4 text-xl font-semibold">
                      Wichtiger Hinweis
                    </h2>
                    <div className="space-y-4 text-muted-foreground">
                      <p>
                        Mein Angebot ist Coaching, keine Therapie. Ich arbeite
                        mit Menschen, die grundsätzlich psychisch gesund sind
                        und an ihrer Beziehung oder persönlichen Entwicklung
                        arbeiten möchten.
                      </p>
                      <p>
                        Bei psychischen Erkrankungen, akuten Krisen,
                        Suchtproblematiken oder traumatischen Erfahrungen
                        empfehle ich therapeutische oder ärztliche
                        Unterstützung. Coaching kann Therapie nicht ersetzen –
                        aber es kann eine wertvolle Ergänzung sein oder im
                        Anschluss an eine Therapie sinnvoll sein.
                      </p>
                      <p>
                        Wenn Sie unsicher sind, ob Coaching das Richtige für Sie
                        ist, klären wir das gerne im Kennenlerngespräch.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-muted/30 py-20 md:py-28">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-6 text-3xl font-bold tracking-tight sm:text-4xl">
              Lernen Sie mich kennen
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Am besten lernen wir uns in einem unverbindlichen
              Kennenlerngespräch kennen. Erzählen Sie mir, was Sie bewegt – ich
              höre zu.
            </p>
            <Button asChild size="lg" className="gap-2">
              <Link to="/kennenlerngespräch">
                Kennenlerngespräch buchen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
