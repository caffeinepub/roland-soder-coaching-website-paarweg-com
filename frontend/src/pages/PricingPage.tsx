import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const pricingCards = [
  {
    title: 'Kennenlerngespräch',
    price: 'Kostenlos',
    duration: '30 Minuten',
    description: 'Das Erstgespräch ist kostenfrei. Es findet via Zoom oder WhatsApp statt und dauert ca. 30 Minuten.',
    features: [
      'Kostenlos & unverbindlich',
      'Via Zoom oder WhatsApp',
      'Ca. 30 Minuten',
      'Kennenlernen & Situationsanalyse',
      'Keine Verpflichtung',
    ],
    cta: 'Jetzt buchen',
    highlighted: false,
  },
  {
    title: 'Coaching-Session',
    price: '190 CHF',
    duration: '60 Minuten',
    description: 'Eine vollständige Coaching-Sitzung, individuell auf Ihre Bedürfnisse zugeschnitten.',
    features: [
      '60 Minuten Coaching',
      'In Basel oder online',
      'Individuelle Begleitung',
      'Konkrete Werkzeuge & Übungen',
      'Nachbereitung & Hausaufgaben',
    ],
    cta: 'Termin buchen',
    highlighted: true,
  },
];

const bookingProcess = [
  {
    step: '01',
    title: 'Kennenlerngespräch buchen',
    desc: 'Buchen Sie zunächst das kostenlose Kennenlerngespräch über den Kalender.',
  },
  {
    step: '02',
    title: 'Situation besprechen',
    desc: 'Wir besprechen Ihre Situation und klären, ob und wie ich Ihnen helfen kann.',
  },
  {
    step: '03',
    title: 'Coaching starten',
    desc: 'Bei gegenseitigem Interesse vereinbaren wir die ersten Coaching-Sitzungen.',
  },
  {
    step: '04',
    title: 'Flexibel bleiben',
    desc: 'Sie können jederzeit pausieren oder aufhören – keine Mindestlaufzeit.',
  },
];

const faqs = [
  {
    q: 'Wie viele Sitzungen brauche ich?',
    a: 'Das hängt von Ihrer Situation und Ihren Zielen ab. Viele Klienten erleben bereits nach 3–5 Sitzungen deutliche Veränderungen. Wir besprechen dies im Kennenlerngespräch und passen den Prozess laufend an.',
  },
  {
    q: 'Kann ich Sitzungen absagen oder verschieben?',
    a: 'Ja, Sitzungen können bis 24 Stunden vorher kostenlos abgesagt oder verschoben werden. Bei kurzfristigeren Absagen behalte ich mir vor, die Sitzung in Rechnung zu stellen.',
  },
  {
    q: 'Gibt es Pakete oder Rabatte?',
    a: 'Aktuell biete ich keine festen Pakete an. Wir besprechen im Kennenlerngespräch, was für Sie sinnvoll ist.',
  },
  {
    q: 'Werden die Kosten von der Krankenkasse übernommen?',
    a: 'Coaching ist keine Psychotherapie und wird in der Regel nicht von der Krankenkasse übernommen. Bitte klären Sie dies direkt mit Ihrer Versicherung.',
  },
  {
    q: 'Wie bezahle ich?',
    a: 'Die Bezahlung erfolgt nach der Sitzung per Banküberweisung oder Twint.',
  },
];

export default function PricingPage() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
            Preise
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Transparente Preise
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Klare Preise ohne versteckte Kosten. Starten Sie mit dem kostenlosen
            Kennenlerngespräch.
          </p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {pricingCards.map((card) => (
              <div
                key={card.title}
                className={`rounded-2xl border p-8 flex flex-col ${
                  card.highlighted
                    ? 'border-primary bg-primary/5 shadow-lg'
                    : 'border-border bg-card'
                }`}
              >
                {card.highlighted && (
                  <div className="mb-4">
                    <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs font-medium rounded-full">
                      Empfohlen
                    </span>
                  </div>
                )}
                <h2 className="text-2xl font-bold text-foreground mb-1">{card.title}</h2>
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-4xl font-bold text-primary">{card.price}</span>
                  <span className="text-muted-foreground text-sm">/ {card.duration}</span>
                </div>
                <p className="text-sm text-muted-foreground mb-6 leading-relaxed">{card.description}</p>
                <ul className="space-y-2 mb-8 flex-1">
                  {card.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-sm text-foreground/80">
                      <svg className="w-4 h-4 text-primary flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  to="/contact"
                  className={`inline-flex items-center justify-center px-6 py-3 rounded-full font-medium transition-colors duration-200 ${
                    card.highlighted
                      ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                      : 'border border-border text-foreground hover:bg-muted'
                  }`}
                >
                  {card.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Process */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              So geht es los
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Der Buchungsprozess
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {bookingProcess.map((item) => (
              <div key={item.step} className="text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                  <span className="text-primary font-bold">{item.step}</span>
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="text-sm font-medium text-primary uppercase tracking-widest mb-3">
              FAQ
            </p>
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Häufige Fragen zu den Preisen
            </h2>
          </div>
          <Accordion type="single" collapsible className="space-y-3">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border border-border rounded-2xl px-6 overflow-hidden"
              >
                <AccordionTrigger className="text-left font-semibold text-foreground py-4 hover:no-underline">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-4">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-primary/5 border-y border-primary/10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Starten Sie mit dem kostenlosen Gespräch
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Das Kennenlerngespräch ist kostenlos und unverbindlich.
            Lernen Sie mich kennen und entscheiden Sie dann.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center px-10 py-4 bg-primary text-primary-foreground rounded-full font-medium hover:bg-primary/90 transition-colors duration-200 text-base"
          >
            Kostenloses Kennenlerngespräch buchen
          </Link>
        </div>
      </section>
    </div>
  );
}
