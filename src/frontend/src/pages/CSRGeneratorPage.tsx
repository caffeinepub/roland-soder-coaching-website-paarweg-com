import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Copy, Download, FileKey, AlertCircle, CheckCircle2, ExternalLink, AlertTriangle, RefreshCw } from 'lucide-react';
import { toast } from 'sonner';
import { useGenerateCSR, useGetCSRMetadata } from '@/hooks/useQueries';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function CSRGeneratorPage() {
  const [csrData, setCsrData] = useState<{ csr: string; publicKey: string } | null>(null);
  const [dnsWarning, setDnsWarning] = useState(false);
  const { data: metadata, isLoading: metadataLoading } = useGetCSRMetadata();
  const generateCSRMutation = useGenerateCSR();

  // Auto-generate CSR on page load
  useEffect(() => {
    if (metadata && !csrData && !generateCSRMutation.isPending) {
      handleGenerateCSR();
    }
  }, [metadata]);

  // Check DNS forwarding availability
  useEffect(() => {
    const checkDNS = async () => {
      try {
        const response = await fetch('https://www.paarweg.com', { method: 'HEAD', mode: 'no-cors' });
        setDnsWarning(false);
      } catch (error) {
        // DNS forwarding might not be available
        setDnsWarning(true);
      }
    };
    checkDNS();
  }, []);

  const handleGenerateCSR = async () => {
    try {
      const result = await generateCSRMutation.mutateAsync();
      setCsrData(result);
      toast.success('Neuer CSR erfolgreich generiert', {
        description: 'Ein komplett neuer CSR und Public Key wurden erstellt.',
      });
    } catch (err) {
      console.error('Error generating CSR:', err);
      toast.error('Fehler bei der CSR-Generierung', {
        description: 'Bitte versuchen Sie es erneut oder kontaktieren Sie den Support.',
      });
    }
  };

  const copyToClipboard = async (text: string, label: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(`${label} in die Zwischenablage kopiert`);
    } catch (err) {
      toast.error('Fehler beim Kopieren');
    }
  };

  const downloadFile = (content: string, filename: string) => {
    const blob = new Blob([content], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = filename;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    toast.success(`${filename} heruntergeladen`);
  };

  if (metadataLoading || (generateCSRMutation.isPending && !csrData)) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="text-center">
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p className="text-muted-foreground">
            {metadataLoading ? 'Lade CSR-Konfiguration...' : 'Generiere neuen CSR...'}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <FileKey className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              SSL Certificate Signing Request Generator
            </h1>
            <p className="text-lg text-muted-foreground">
              Generieren Sie einen neuen, gültigen CSR für www.paarweg.com zur Verwendung bei united-domains.de
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* DNS Warning */}
            {dnsWarning && (
              <Alert className="border-yellow-200 bg-yellow-50 text-yellow-900 dark:border-yellow-800 dark:bg-yellow-950 dark:text-yellow-100">
                <AlertTriangle className="h-4 w-4" />
                <AlertDescription>
                  <strong>Hinweis:</strong> DNS-Forwarding (CNAME-Auflösung) für www.paarweg.com ist möglicherweise noch nicht verfügbar. Der CSR und Public Key werden dennoch angezeigt und können verwendet werden.
                </AlertDescription>
              </Alert>
            )}

            {/* Configuration Card */}
            {metadata && (
              <Card>
                <CardHeader>
                  <CardTitle>CSR-Konfiguration für www.paarweg.com</CardTitle>
                  <CardDescription>
                    Die folgenden Informationen werden für die CSR-Generierung verwendet (RFC 2986 konform)
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Country (C)</Label>
                      <p className="mt-1 font-mono text-sm font-semibold">{metadata.country}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">State/Province (ST)</Label>
                      <p className="mt-1 font-mono text-sm font-semibold">{metadata.state}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Locality (L)</Label>
                      <p className="mt-1 font-mono text-sm font-semibold">{metadata.city}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Organization (O)</Label>
                      <p className="mt-1 font-mono text-sm font-semibold">{metadata.company}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Organizational Unit (OU)</Label>
                      <p className="mt-1 font-mono text-sm text-muted-foreground">(nicht angegeben)</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Common Name (CN)</Label>
                      <p className="mt-1 font-mono text-sm font-semibold text-primary">{metadata.commonName}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Email Address</Label>
                      <p className="mt-1 font-mono text-sm font-semibold">{metadata.email}</p>
                    </div>
                    <div>
                      <Label className="text-sm font-medium text-muted-foreground">Key Size</Label>
                      <p className="mt-1 font-mono text-sm font-semibold">2048-bit RSA</p>
                    </div>
                    <div className="sm:col-span-2">
                      <Label className="text-sm font-medium text-muted-foreground">Encoding Format</Label>
                      <p className="mt-1 font-mono text-sm font-semibold">Base64 PEM (RFC 2986 konform)</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Generate New CSR Button */}
            <div className="flex justify-center">
              <Button
                size="lg"
                onClick={handleGenerateCSR}
                disabled={generateCSRMutation.isPending || !metadata}
                className="px-8 py-6 text-base"
              >
                {generateCSRMutation.isPending ? (
                  <>
                    <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent" />
                    Generiere neuen CSR...
                  </>
                ) : (
                  <>
                    <RefreshCw className="mr-2 h-5 w-5" />
                    Neuen CSR Generieren
                  </>
                )}
              </Button>
            </div>

            {/* Error Alert */}
            {generateCSRMutation.isError && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  {generateCSRMutation.error?.message || 'Fehler bei der CSR-Generierung. Bitte versuchen Sie es erneut.'}
                </AlertDescription>
              </Alert>
            )}

            {/* Success Alert */}
            {csrData && (
              <Alert className="border-green-200 bg-green-50 text-green-900 dark:border-green-800 dark:bg-green-950 dark:text-green-100">
                <CheckCircle2 className="h-4 w-4" />
                <AlertDescription>
                  <strong>Neuer CSR erfolgreich generiert!</strong> Sie können den CSR-Text und Public Key nun bei united-domains.de hochladen. Dieser CSR ist komplett neu und RFC 2986 konform.
                </AlertDescription>
              </Alert>
            )}

            {/* CSR Output */}
            {csrData && (
              <>
                {/* Quick Instructions */}
                <Card className="border-primary/50 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="text-lg">Nächste Schritte</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      Kopieren Sie den CSR‑Text in das Feld „Zertifikatsanforderung" im Bereich SSL/TLS bei united-domains.de, speichern Sie und starten Sie die Zertifikatserstellung.
                    </p>
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardHeader>
                    <CardTitle className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <span className="flex items-center gap-2">
                        <FileKey className="h-5 w-5 text-primary" />
                        Certificate Signing Request (CSR)
                      </span>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(csrData.csr, 'CSR')}
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          Kopieren
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadFile(csrData.csr, 'paarweg_csr.pem')}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Base64 PEM-encoded CSR für <strong>www.paarweg.com</strong> (2048-bit RSA, RFC 2986 konform)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={csrData.csr}
                      readOnly
                      className="min-h-[250px] font-mono text-xs"
                    />
                  </CardContent>
                </Card>

                <Card className="border-primary/50">
                  <CardHeader>
                    <CardTitle className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                      <span className="flex items-center gap-2">
                        <FileKey className="h-5 w-5 text-primary" />
                        Public Key
                      </span>
                      <div className="flex gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => copyToClipboard(csrData.publicKey, 'Public Key')}
                        >
                          <Copy className="mr-2 h-4 w-4" />
                          Kopieren
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => downloadFile(csrData.publicKey, 'paarweg_public_key.pem')}
                        >
                          <Download className="mr-2 h-4 w-4" />
                          Download
                        </Button>
                      </div>
                    </CardTitle>
                    <CardDescription>
                      Öffentlicher Schlüssel im PEM-Format (2048-bit RSA)
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Textarea
                      value={csrData.publicKey}
                      readOnly
                      className="min-h-[200px] font-mono text-xs"
                    />
                  </CardContent>
                </Card>

                {/* Step-by-Step Guide */}
                <Card className="border-primary/30 bg-primary/5">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileKey className="h-5 w-5 text-primary" />
                      Schritt-für-Schritt-Anleitung: CSR bei united-domains.de hochladen
                    </CardTitle>
                    <CardDescription>
                      Folgen Sie diesen Schritten, um Ihr SSL-Zertifikat für www.paarweg.com zu beantragen
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible className="w-full">
                      <AccordionItem value="step-1">
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                              1
                            </div>
                            <span className="font-semibold">Bei united-domains.de anmelden</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11 pt-2">
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Öffnen Sie Ihren Browser und navigieren Sie zu:</p>
                            <a
                              href="https://www.united-domains.de"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 font-medium text-primary hover:underline"
                            >
                              www.united-domains.de
                              <ExternalLink className="h-3 w-3" />
                            </a>
                            <p className="pt-2">Melden Sie sich mit Ihren Zugangsdaten an.</p>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="step-2">
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                              2
                            </div>
                            <span className="font-semibold">Domain-Verwaltung öffnen</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11 pt-2">
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Nach der Anmeldung:</p>
                            <ul className="list-inside list-disc space-y-1 pl-2">
                              <li>Klicken Sie auf <strong>"Domain-Verwaltung"</strong> im Hauptmenü</li>
                              <li>Wählen Sie die Domain <strong>paarweg.com</strong> aus</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="step-3">
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                              3
                            </div>
                            <span className="font-semibold">SSL/TLS-Bereich aufrufen</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11 pt-2">
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <p>In der Domain-Verwaltung:</p>
                            <ul className="list-inside list-disc space-y-1 pl-2">
                              <li>Navigieren Sie zum Bereich <strong>"SSL/TLS"</strong> oder <strong>"Sicherheit"</strong></li>
                              <li>Dieser Bereich befindet sich meist in der linken Seitenleiste oder im Hauptmenü der Domain-Einstellungen</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="step-4">
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                              4
                            </div>
                            <span className="font-semibold">Eigenes Zertifikat verwenden / CSR einreichen</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11 pt-2">
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Im SSL/TLS-Bereich:</p>
                            <ul className="list-inside list-disc space-y-1 pl-2">
                              <li>Suchen Sie nach der Option <strong>"Eigenes Zertifikat verwenden"</strong> oder <strong>"CSR einreichen"</strong></li>
                              <li>Klicken Sie auf diese Option, um das CSR-Formular zu öffnen</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="step-5">
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                              5
                            </div>
                            <span className="font-semibold">CSR-Text einfügen</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11 pt-2">
                          <div className="space-y-3 text-sm text-muted-foreground">
                            <p>Im CSR-Formular:</p>
                            <ul className="list-inside list-disc space-y-1 pl-2">
                              <li>
                                Kopieren Sie den kompletten <strong>CSR-Text</strong> von oben (inklusive{' '}
                                <code className="rounded bg-muted px-1 py-0.5 text-xs">-----BEGIN CERTIFICATE REQUEST-----</code> und{' '}
                                <code className="rounded bg-muted px-1 py-0.5 text-xs">-----END CERTIFICATE REQUEST-----</code>)
                              </li>
                              <li>Fügen Sie den CSR-Text in das dafür vorgesehene Textfeld ein</li>
                              <li>
                                Alternativ können Sie die heruntergeladene{' '}
                                <code className="rounded bg-muted px-1 py-0.5 text-xs">paarweg_csr.pem</code> Datei hochladen, falls eine
                                Upload-Option verfügbar ist
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="step-6">
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                              6
                            </div>
                            <span className="font-semibold">Abschließen und bestätigen</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11 pt-2">
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Nachdem Sie den CSR eingefügt haben:</p>
                            <ul className="list-inside list-disc space-y-1 pl-2">
                              <li>Überprüfen Sie alle Angaben auf Richtigkeit</li>
                              <li>
                                Klicken Sie auf <strong>"Absenden"</strong>, <strong>"Bestätigen"</strong> oder{' '}
                                <strong>"Zertifikat beantragen"</strong>
                              </li>
                              <li>United-domains.de wird nun Ihr SSL-Zertifikat für www.paarweg.com ausstellen</li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value="step-7">
                        <AccordionTrigger className="text-left">
                          <div className="flex items-center gap-3">
                            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary text-sm font-bold text-primary-foreground">
                              7
                            </div>
                            <span className="font-semibold">Wartezeit und Aktivierung</span>
                          </div>
                        </AccordionTrigger>
                        <AccordionContent className="pl-11 pt-2">
                          <div className="space-y-2 text-sm text-muted-foreground">
                            <p>Nach der Einreichung:</p>
                            <ul className="list-inside list-disc space-y-1 pl-2">
                              <li>
                                Die Ausstellung des Zertifikats dauert in der Regel <strong>30–60 Minuten</strong>
                              </li>
                              <li>Sie erhalten eine Bestätigungs-E-Mail, sobald das Zertifikat bereit ist</li>
                              <li>
                                Nach der Aktivierung ist Ihre Domain <strong>www.paarweg.com</strong> über HTTPS erreichbar
                              </li>
                              <li>
                                Testen Sie die HTTPS-Verbindung, indem Sie{' '}
                                <code className="rounded bg-muted px-1 py-0.5 text-xs">https://www.paarweg.com</code> in Ihrem Browser
                                aufrufen
                              </li>
                            </ul>
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Security Notice */}
            <Alert>
              <AlertCircle className="h-4 w-4" />
              <AlertDescription>
                <strong>Sicherheitshinweis:</strong> Der private Schlüssel wird lokal in Ihrem Browser generiert und niemals an das
                Backend übertragen. Jeder Klick auf "Neuen CSR Generieren" erstellt ein komplett neues Schlüsselpaar. Bewahren Sie den privaten Schlüssel sicher auf und teilen Sie ihn niemals mit Dritten.
              </AlertDescription>
            </Alert>

            {/* Technical Details */}
            <Card className="border-muted">
              <CardHeader>
                <CardTitle className="text-base">Technische Details</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm text-muted-foreground">
                <p>
                  • <strong>Domain:</strong> www.paarweg.com (Common Name)
                </p>
                <p>
                  • <strong>Organisation:</strong> Roland Soder Coaching
                </p>
                <p>
                  • <strong>Standort:</strong> Basel, Basel Stadt, CH
                </p>
                <p>
                  • <strong>E-Mail:</strong> info@paarweg.com
                </p>
                <p>
                  • <strong>Verschlüsselung:</strong> 2048-bit RSA (Standard für SSL-Zertifikate)
                </p>
                <p>
                  • <strong>Format:</strong> Base64 PEM-encoded (RFC 2986 konform, kompatibel mit allen Zertifizierungsstellen)
                </p>
                <p>
                  • <strong>Gültigkeit:</strong> Der CSR ist unbegrenzt gültig, bis ein Zertifikat ausgestellt wird
                </p>
                <p>
                  • <strong>Generierung:</strong> Client-seitig mit Web Crypto API für maximale Sicherheit
                </p>
                <p>
                  • <strong>Validierung:</strong> Formatierung mit korrekten Headern, Footern und Zeilenumbrüchen für United Domains
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
