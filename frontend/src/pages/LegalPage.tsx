import { useState } from 'react';

type Section = 'impressum' | 'datenschutz' | 'agb';

export default function LegalPage() {
  const [activeSection, setActiveSection] = useState<Section>('impressum');

  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-12 bg-muted/30">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Rechtliche Informationen
          </h1>
          <p className="text-muted-foreground">
            Impressum, Datenschutzerklärung und Allgemeine Geschäftsbedingungen.
          </p>
        </div>
      </section>

      {/* Tab Navigation */}
      <section className="bg-background border-b border-border sticky top-16 md:top-20 z-40">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 py-2">
            {(['impressum', 'datenschutz', 'agb'] as Section[]).map((section) => (
              <button
                key={section}
                onClick={() => setActiveSection(section)}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors capitalize ${
                  activeSection === section
                    ? 'bg-primary/10 text-primary'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {section === 'impressum' ? 'Impressum' : section === 'datenschutz' ? 'Datenschutz' : 'AGB'}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-12 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeSection === 'impressum' && (
            <div className="prose prose-sm max-w-none text-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-6">Impressum</h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Angaben gemäss Art. 12 DSG</h3>
              <p className="text-foreground/80 mb-4">
                <strong>Roland Soder</strong><br />
                Paar- und Einzelcoaching<br />
                Basel, Schweiz
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Kontakt</h3>
              <p className="text-foreground/80 mb-4">
                E-Mail: <a href="mailto:roland@paarweg.com" className="text-primary hover:underline">roland@paarweg.com</a><br />
                Website: <a href="https://www.paarweg.com" className="text-primary hover:underline">www.paarweg.com</a>
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Haftungsausschluss</h3>
              <p className="text-foreground/80 mb-4">
                Der Autor übernimmt keinerlei Gewähr hinsichtlich der inhaltlichen Richtigkeit,
                Genauigkeit, Aktualität, Zuverlässigkeit und Vollständigkeit der Informationen.
                Haftungsansprüche gegen den Autor wegen Schäden materieller oder immaterieller Art,
                welche aus dem Zugriff oder der Nutzung bzw. Nichtnutzung der veröffentlichten
                Informationen, durch Missbrauch der Verbindung oder durch technische Störungen entstanden
                sind, werden ausgeschlossen.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">Urheberrechte</h3>
              <p className="text-foreground/80 mb-4">
                Die Urheber- und alle anderen Rechte an Inhalten, Bildern, Fotos oder anderen Dateien
                auf der Website gehören ausschliesslich Roland Soder oder den speziell genannten
                Rechtsinhabern. Für die Reproduktion jeglicher Elemente ist die schriftliche Zustimmung
                der Urheberrechtsträger im Voraus einzuholen.
              </p>
            </div>
          )}

          {activeSection === 'datenschutz' && (
            <div className="prose prose-sm max-w-none text-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-6">Datenschutzerklärung</h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">1. Datenschutz auf einen Blick</h3>
              <p className="text-foreground/80 mb-4">
                Der Schutz Ihrer persönlichen Daten ist mir ein wichtiges Anliegen. Ich behandle Ihre
                personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften
                sowie dieser Datenschutzerklärung.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Verantwortliche Stelle</h3>
              <p className="text-foreground/80 mb-4">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:<br />
                <strong>Roland Soder</strong><br />
                Basel, Schweiz<br />
                E-Mail: roland@paarweg.com
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3. Erhebung und Verarbeitung von Daten</h3>
              <p className="text-foreground/80 mb-4">
                Beim Besuch dieser Website werden automatisch Informationen allgemeiner Natur erfasst
                (Server-Logfiles). Diese Daten sind nicht personenbezogen und werden nicht mit anderen
                Datenquellen zusammengeführt.
              </p>
              <p className="text-foreground/80 mb-4">
                Wenn Sie über Calendly einen Termin buchen, werden Ihre Daten von Calendly verarbeitet.
                Bitte beachten Sie die Datenschutzerklärung von Calendly.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4. Cookies</h3>
              <p className="text-foreground/80 mb-4">
                Diese Website verwendet keine eigenen Cookies. Drittanbieter-Dienste wie Calendly
                können eigene Cookies setzen.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">5. Ihre Rechte</h3>
              <p className="text-foreground/80 mb-4">
                Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der
                Verarbeitung Ihrer personenbezogenen Daten. Wenden Sie sich dazu an:
                roland@paarweg.com
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">6. Analytik</h3>
              <p className="text-foreground/80 mb-4">
                Diese Website verwendet Plausible Analytics, ein datenschutzfreundliches
                Analysetool, das keine Cookies setzt und keine personenbezogenen Daten speichert.
              </p>
            </div>
          )}

          {activeSection === 'agb' && (
            <div className="prose prose-sm max-w-none text-foreground">
              <h2 className="text-2xl font-bold text-foreground mb-6">Allgemeine Geschäftsbedingungen</h2>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">1. Geltungsbereich</h3>
              <p className="text-foreground/80 mb-4">
                Diese AGB gelten für alle Coaching-Dienstleistungen von Roland Soder, Basel.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Leistungen</h3>
              <p className="text-foreground/80 mb-4">
                Roland Soder bietet Paar- und Einzelcoaching an. Das Coaching ist keine
                Psychotherapie und ersetzt keine medizinische oder psychologische Behandlung.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">3. Termine und Absagen</h3>
              <p className="text-foreground/80 mb-4">
                Termine können bis 24 Stunden vor dem vereinbarten Zeitpunkt kostenlos abgesagt
                oder verschoben werden. Bei kurzfristigeren Absagen (weniger als 24 Stunden vorher)
                behält sich Roland Soder vor, die Sitzung in Rechnung zu stellen.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">4. Preise und Zahlung</h3>
              <p className="text-foreground/80 mb-4">
                Die aktuellen Preise sind auf der Website unter «Preise» aufgeführt. Die Zahlung
                erfolgt nach der Sitzung per Banküberweisung oder Twint.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">5. Vertraulichkeit</h3>
              <p className="text-foreground/80 mb-4">
                Alle Inhalte der Coaching-Sitzungen werden streng vertraulich behandelt.
                Ausnahmen gelten nur bei gesetzlicher Verpflichtung.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">6. Haftung</h3>
              <p className="text-foreground/80 mb-4">
                Roland Soder haftet nicht für Schäden, die durch die Umsetzung von
                Coaching-Empfehlungen entstehen. Der Klient trägt die Verantwortung für
                seine eigenen Entscheidungen und Handlungen.
              </p>

              <h3 className="text-lg font-semibold text-foreground mt-6 mb-3">7. Gerichtsstand</h3>
              <p className="text-foreground/80 mb-4">
                Gerichtsstand ist Basel-Stadt, Schweiz. Es gilt Schweizer Recht.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
