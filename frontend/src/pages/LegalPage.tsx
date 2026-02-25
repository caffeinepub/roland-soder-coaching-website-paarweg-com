import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

export default function LegalPage() {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-background via-muted/20 to-accent/10 py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl">
              Impressum & Datenschutz
            </h1>
            <p className="text-lg text-muted-foreground">
              Rechtliche Informationen und Datenschutzhinweise
            </p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Impressum */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Impressum</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="mb-2 font-semibold">Angaben gemäß Schweizer Recht</h3>
                  <p className="text-muted-foreground">
                    Roland Soder Coaching<br />
                    Basel<br />
                    Schweiz
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 font-semibold">Kontakt</h3>
                  <p className="text-muted-foreground">
                    Telefon: +41 79 770 39 25<br />
                    E-Mail: info@paarweg.com
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 font-semibold">Verantwortlich für den Inhalt</h3>
                  <p className="text-muted-foreground">
                    Roland Soder<br />
                    Basel<br />
                    Schweiz
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-2 font-semibold">Haftungsausschluss</h3>
                  <h4 className="mb-2 mt-3 text-sm font-semibold">Haftung für Inhalte</h4>
                  <p className="text-sm text-muted-foreground">
                    Die Inhalte dieser Website wurden mit größter Sorgfalt erstellt. 
                    Für die Richtigkeit, Vollständigkeit und Aktualität der Inhalte kann jedoch keine Gewähr übernommen werden. 
                    Als Diensteanbieter bin ich für eigene Inhalte auf diesen Seiten nach den 
                    allgemeinen Gesetzen verantwortlich.
                  </p>
                  
                  <h4 className="mb-2 mt-3 text-sm font-semibold">Haftung für Links</h4>
                  <p className="text-sm text-muted-foreground">
                    Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. 
                    Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. 
                    Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich.
                  </p>
                  
                  <h4 className="mb-2 mt-3 text-sm font-semibold">Urheberrecht</h4>
                  <p className="text-sm text-muted-foreground">
                    Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem Schweizer Urheberrecht. 
                    Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes 
                    bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Datenschutz */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Datenschutzerklärung</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-3 font-semibold">1. Datenschutz auf einen Blick</h3>
                  <h4 className="mb-2 text-sm font-semibold">Allgemeine Hinweise</h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten 
                    passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, 
                    mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz 
                    entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">2. Datenerfassung auf dieser Website</h3>
                  <h4 className="mb-2 text-sm font-semibold">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. 
                    Dessen Kontaktdaten können Sie dem Impressum dieser Website entnehmen.
                  </p>
                  
                  <h4 className="mb-2 text-sm font-semibold">Wie erfassen wir Ihre Daten?</h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. 
                    Hierbei kann es sich z.B. um Daten handeln, die Sie uns per E-Mail oder Telefon mitteilen.
                  </p>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website 
                    durch unsere IT-Systeme erfasst. Das sind vor allem technische Daten (z.B. Internetbrowser, 
                    Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, 
                    sobald Sie diese Website betreten.
                  </p>
                  
                  <h4 className="mb-2 text-sm font-semibold">Wofür nutzen wir Ihre Daten?</h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                    Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
                  </p>
                  
                  <h4 className="mb-2 text-sm font-semibold">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
                  <p className="text-sm text-muted-foreground">
                    Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                    Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, 
                    die Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur 
                    Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft widerrufen.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">3. Hosting und Content Delivery Networks (CDN)</h3>
                  <h4 className="mb-2 text-sm font-semibold">Externes Hosting</h4>
                  <p className="text-sm text-muted-foreground">
                    Diese Website wird bei einem externen Dienstleister gehostet (Hoster). 
                    Die personenbezogenen Daten, die auf dieser Website erfasst werden, werden auf den Servern des Hosters gespeichert. 
                    Hierbei kann es sich v.a. um IP-Adressen, Kontaktanfragen, Meta- und Kommunikationsdaten, 
                    Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe und sonstige Daten, die über eine Website generiert werden, handeln.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">4. Allgemeine Hinweise und Pflichtinformationen</h3>
                  <h4 className="mb-2 text-sm font-semibold">Datenschutz</h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. 
                    Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften 
                    sowie dieser Datenschutzerklärung.
                  </p>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben. 
                    Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. 
                    Die vorliegende Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. 
                    Sie erläutert auch, wie und zu welchem Zweck das geschieht.
                  </p>
                  
                  <h4 className="mb-2 text-sm font-semibold">Hinweis zur verantwortlichen Stelle</h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:<br /><br />
                    Roland Soder Coaching<br />
                    Basel<br />
                    Schweiz<br />
                    Telefon: +41 79 770 39 25<br />
                    E-Mail: info@paarweg.com
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen 
                    über die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z.B. Namen, E-Mail-Adressen o. Ä.) entscheidet.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">5. Datenerfassung auf dieser Website</h3>
                  <h4 className="mb-2 text-sm font-semibold">Kontaktaufnahme</h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Wenn Sie uns per E-Mail oder Telefon kontaktieren, werden Ihre Angaben 
                    zwecks Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. 
                    Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
                  </p>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                    sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher 
                    Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse 
                    an der effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer 
                    Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Die von Ihnen mitgeteilten Daten verbleiben bei uns, bis Sie uns zur Löschung auffordern, 
                    Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt 
                    (z.B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen – 
                    insbesondere Aufbewahrungsfristen – bleiben unberührt.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">6. Cookies</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden 
                    und die Ihr Browser speichert. Sie dienen dazu, unser Angebot nutzerfreundlicher, effektiver und sicherer zu machen.
                  </p>
                  
                  <h4 className="mb-2 text-sm font-semibold">Essenzielle Cookies</h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Diese Cookies sind für den Betrieb der Website technisch notwendig und können nicht deaktiviert werden. 
                    Sie werden in der Regel nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt, die einer Dienstanforderung entsprechen, 
                    wie etwa dem Festlegen Ihrer Datenschutzeinstellungen, dem Anmelden oder dem Ausfüllen von Formularen.
                  </p>
                  
                  <h4 className="mb-2 text-sm font-semibold">Statistik-Cookies</h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Diese Cookies helfen uns zu verstehen, wie Besucher mit der Website interagieren, 
                    indem Informationen anonym gesammelt und gemeldet werden. Diese Cookies werden nur mit Ihrer Zustimmung gesetzt.
                  </p>
                  
                  <h4 className="mb-2 text-sm font-semibold">Marketing-Cookies</h4>
                  <p className="text-sm text-muted-foreground">
                    Diese Cookies werden verwendet, um Besuchern auf Webseiten zu folgen. 
                    Die Absicht ist, Anzeigen zu zeigen, die relevant und ansprechend für den einzelnen Benutzer sind. 
                    Diese Cookies werden nur mit Ihrer Zustimmung gesetzt.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">7. Ihre Rechte</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Sie haben jederzeit das Recht auf unentgeltliche Auskunft über Ihre gespeicherten personenbezogenen Daten, 
                    deren Herkunft und Empfänger und den Zweck der Datenverarbeitung sowie ein Recht auf Berichtigung 
                    oder Löschung dieser Daten. Hierzu sowie zu weiteren Fragen zum Thema personenbezogene Daten 
                    können Sie sich jederzeit an uns wenden.
                  </p>
                  
                  <h4 className="mb-2 text-sm font-semibold">Recht auf Einschränkung der Verarbeitung</h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
                  </p>
                  
                  <h4 className="mb-2 text-sm font-semibold">Recht auf Datenübertragbarkeit</h4>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags 
                    automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format aushändigen zu lassen.
                  </p>
                  
                  <h4 className="mb-2 text-sm font-semibold">Widerspruchsrecht</h4>
                  <p className="text-sm text-muted-foreground">
                    Sofern Ihre personenbezogenen Daten auf Grundlage von berechtigten Interessen gemäß Art. 6 Abs. 1 lit. f DSGVO 
                    verarbeitet werden, haben Sie das Recht, gemäß Art. 21 DSGVO Widerspruch gegen die Verarbeitung Ihrer 
                    personenbezogenen Daten einzulegen, soweit dafür Gründe vorliegen, die sich aus Ihrer besonderen Situation ergeben.
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* AGB */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Allgemeine Geschäftsbedingungen</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h3 className="mb-3 font-semibold">1. Geltungsbereich</h3>
                  <p className="text-sm text-muted-foreground">
                    Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Coaching-Leistungen von Roland Soder Coaching. 
                    Mit der Buchung eines Termins oder der Inanspruchnahme einer Leistung erkennen Sie diese AGB an.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">2. Leistungsumfang</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Das Coaching umfasst die Begleitung von Einzelpersonen und Paaren in Fragen der persönlichen 
                    und partnerschaftlichen Entwicklung. Die konkreten Inhalte und der Umfang werden individuell vereinbart.
                  </p>
                  <p className="mb-3 text-sm text-muted-foreground">
                    <strong>Wichtig:</strong> Coaching ist keine Psychotherapie und kein Ersatz für eine solche. 
                    Coaching richtet sich an psychisch gesunde Menschen, die an ihrer persönlichen oder partnerschaftlichen 
                    Entwicklung arbeiten möchten.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Bei psychischen Erkrankungen, akuten Krisen, Suchtproblematiken oder traumatischen Erfahrungen 
                    wird die Inanspruchnahme therapeutischer oder ärztlicher Hilfe empfohlen. 
                    Der Coach ist nicht berechtigt, Diagnosen zu stellen oder Therapien durchzuführen.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">3. Termine und Absagen</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Termine werden individuell vereinbart und sind verbindlich. 
                    Bei Verhinderung ist eine Absage bis spätestens 12 Stunden vor dem vereinbarten Termin erforderlich.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Bei späterer Absage oder Nichterscheinen ohne wichtigen Grund wird das volle Honorar fällig. 
                    Als wichtiger Grund gelten unvorhersehbare Ereignisse wie akute Erkrankung (mit ärztlichem Attest) 
                    oder andere außergewöhnliche Umstände.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">4. Honorar und Zahlung</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Das Honorar wird individuell vereinbart und ist nach jeder Sitzung fällig, 
                    sofern keine andere Vereinbarung getroffen wurde. Die Zahlung erfolgt per Rechnung.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Das Erstgespräch (60 Minuten) kostet 60 CHF und dient dem gegenseitigen Kennenlernen 
                    sowie der Klärung Ihres Anliegens.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">5. Vertraulichkeit</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Alle Inhalte der Coaching-Sitzungen werden streng vertraulich behandelt. 
                    Eine Weitergabe von Informationen an Dritte erfolgt nur mit ausdrücklicher Zustimmung des Klienten 
                    oder bei gesetzlicher Verpflichtung (z.B. bei konkreter Gefahr für Leib und Leben).
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Der Coach unterliegt keiner gesetzlichen Schweigepflicht wie Ärzte oder Psychotherapeuten, 
                    verpflichtet sich aber zur Verschwiegenheit über alle ihm anvertrauten Informationen.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">6. Eigenverantwortung des Klienten</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Der Klient trägt die Verantwortung für seine Entscheidungen und Handlungen. 
                    Der Coach gibt Impulse, stellt Fragen und begleitet Prozesse, trifft aber keine Entscheidungen für den Klienten.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Der Klient verpflichtet sich, den Coach über relevante gesundheitliche oder psychische Einschränkungen zu informieren, 
                    die für das Coaching von Bedeutung sein könnten.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">7. Haftung</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Die Haftung für Schäden, die aus der Coaching-Tätigkeit entstehen, ist auf Vorsatz und grobe Fahrlässigkeit beschränkt. 
                    Eine Haftung für den Erfolg des Coachings wird nicht übernommen.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Der Coach haftet nicht für Entscheidungen und Handlungen des Klienten, die dieser aufgrund oder während des Coachings trifft.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">8. Beendigung der Zusammenarbeit</h3>
                  <p className="text-sm text-muted-foreground">
                    Beide Parteien können die Zusammenarbeit jederzeit beenden. 
                    Bereits vereinbarte und bezahlte Termine werden nach den Regelungen unter Punkt 3 behandelt.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">9. Salvatorische Klausel</h3>
                  <p className="text-sm text-muted-foreground">
                    Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, 
                    bleibt die Wirksamkeit der übrigen Bestimmungen davon unberührt.
                  </p>
                </div>

                <Separator />

                <div>
                  <h3 className="mb-3 font-semibold">10. Anwendbares Recht und Gerichtsstand</h3>
                  <p className="mb-3 text-sm text-muted-foreground">
                    Es gilt das Recht der Schweiz. Gerichtsstand ist Basel.
                  </p>
                  <p className="text-sm text-muted-foreground">
                    Firmensitz: Basel, Schweiz
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
