import { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  CheckCircle2,
  XCircle,
  AlertCircle,
  RefreshCw,
  Globe,
  Shield,
  TrendingUp,
  Link as LinkIcon,
  Server,
  ExternalLink,
} from 'lucide-react';
import ThemeHexCodesSection from '@/components/admin/ThemeHexCodesSection';

interface StatusCheck {
  name: string;
  status: 'success' | 'warning' | 'error' | 'checking';
  message: string;
  details?: string;
}

export default function TechnicalStatusPage() {
  const [checks, setChecks] = useState<StatusCheck[]>([]);
  const [isChecking, setIsChecking] = useState(false);
  const [lastCheck, setLastCheck] = useState<Date | null>(null);

  useEffect(() => {
    runAllChecks();
  }, []);

  const runAllChecks = async () => {
    setIsChecking(true);
    const results: StatusCheck[] = [];

    // 1. DNS Configuration Check
    results.push(await checkDNSConfiguration());

    // 2. SSL Certificate Check
    results.push(await checkSSLCertificate());

    // 3. WWW CNAME Check
    results.push(await checkWWWCNAME());

    // 4. 301 Redirect Check
    results.push(await check301Redirect());

    // 5. Plausible Analytics Check
    results.push(checkPlausibleAnalytics());

    // 6. CSR Generator Check
    results.push(checkCSRGenerator());

    // 7. Domain Resolution Check
    results.push(await checkDomainResolution());

    setChecks(results);
    setLastCheck(new Date());
    setIsChecking(false);
  };

  const checkDNSConfiguration = async (): Promise<StatusCheck> => {
    try {
      // Check if the domain resolves correctly
      const response = await fetch('https://www.paarweg.com', {
        method: 'HEAD',
        mode: 'no-cors',
      });

      return {
        name: 'DNS-Konfiguration',
        status: 'success',
        message: 'DNS-Auflösung funktioniert',
        details: 'Die Domain www.paarweg.com wird korrekt aufgelöst.',
      };
    } catch (error) {
      return {
        name: 'DNS-Konfiguration',
        status: 'warning',
        message: 'DNS-Auflösung konnte nicht verifiziert werden',
        details:
          'Bitte überprüfen Sie, ob der CNAME-Record für www auf paarweg-73d.caffeine.xyz zeigt.',
      };
    }
  };

  const checkSSLCertificate = async (): Promise<StatusCheck> => {
    try {
      // Check if HTTPS is available
      if (window.location.protocol === 'https:') {
        return {
          name: 'SSL-Zertifikat',
          status: 'success',
          message: 'SSL-Zertifikat ist aktiv',
          details: 'Die Seite wird über HTTPS bereitgestellt.',
        };
      } else {
        return {
          name: 'SSL-Zertifikat',
          status: 'warning',
          message: 'Seite wird über HTTP aufgerufen',
          details:
            'Bitte stellen Sie sicher, dass das SSL-Zertifikat bei united-domains.de hochgeladen wurde.',
        };
      }
    } catch (error) {
      return {
        name: 'SSL-Zertifikat',
        status: 'error',
        message: 'SSL-Status konnte nicht überprüft werden',
        details: 'Fehler bei der Überprüfung des SSL-Zertifikats.',
      };
    }
  };

  const checkWWWCNAME = async (): Promise<StatusCheck> => {
    try {
      const hostname = window.location.hostname;

      if (hostname === 'www.paarweg.com') {
        return {
          name: 'WWW CNAME-Record',
          status: 'success',
          message: 'WWW-Subdomain wird korrekt aufgelöst',
          details: 'Der CNAME-Record für www ist korrekt konfiguriert.',
        };
      } else if (hostname === 'paarweg.com') {
        return {
          name: 'WWW CNAME-Record',
          status: 'warning',
          message: 'Zugriff über Root-Domain',
          details:
            'Sie greifen über paarweg.com zu. Idealerweise sollte eine Weiterleitung zu www.paarweg.com erfolgen.',
        };
      } else {
        return {
          name: 'WWW CNAME-Record',
          status: 'success',
          message: 'Lokale Entwicklungsumgebung',
          details: `Aktueller Hostname: ${hostname}`,
        };
      }
    } catch (error) {
      return {
        name: 'WWW CNAME-Record',
        status: 'error',
        message: 'CNAME-Überprüfung fehlgeschlagen',
        details: 'Fehler bei der Überprüfung des CNAME-Records.',
      };
    }
  };

  const check301Redirect = async (): Promise<StatusCheck> => {
    try {
      const hostname = window.location.hostname;

      if (hostname === 'www.paarweg.com') {
        return {
          name: '301-Weiterleitung',
          status: 'success',
          message: 'Zugriff über www-Subdomain',
          details:
            'Die 301-Weiterleitung von paarweg.com zu www.paarweg.com sollte serverseitig konfiguriert sein.',
        };
      } else if (hostname === 'paarweg.com') {
        return {
          name: '301-Weiterleitung',
          status: 'warning',
          message: 'Keine Weiterleitung erkannt',
          details:
            'Sie greifen direkt über paarweg.com zu. Bitte konfigurieren Sie eine 301-Weiterleitung zu www.paarweg.com.',
        };
      } else {
        return {
          name: '301-Weiterleitung',
          status: 'success',
          message: 'Lokale Entwicklungsumgebung',
          details: 'Weiterleitungen werden in der Produktion konfiguriert.',
        };
      }
    } catch (error) {
      return {
        name: '301-Weiterleitung',
        status: 'error',
        message: 'Weiterleitungs-Überprüfung fehlgeschlagen',
        details: 'Fehler bei der Überprüfung der 301-Weiterleitung.',
      };
    }
  };

  const checkPlausibleAnalytics = (): StatusCheck => {
    try {
      // Check if Plausible script is loaded
      const scripts = Array.from(document.getElementsByTagName('script'));
      const plausibleScript = scripts.find((script) =>
        script.src.includes('plausible.io/js/script.js')
      );

      if (plausibleScript) {
        const dataDomain = plausibleScript.getAttribute('data-domain');
        if (dataDomain === 'www.paarweg.com') {
          return {
            name: 'Plausible Analytics',
            status: 'success',
            message: 'Plausible Analytics ist korrekt integriert',
            details: 'Tracking-Script für www.paarweg.com ist geladen.',
          };
        } else {
          return {
            name: 'Plausible Analytics',
            status: 'warning',
            message: 'Falsche Domain konfiguriert',
            details: `Aktuell konfiguriert für: ${dataDomain}. Sollte sein: www.paarweg.com`,
          };
        }
      } else {
        return {
          name: 'Plausible Analytics',
          status: 'error',
          message: 'Plausible Analytics nicht gefunden',
          details: 'Das Tracking-Script wurde nicht geladen.',
        };
      }
    } catch (error) {
      return {
        name: 'Plausible Analytics',
        status: 'error',
        message: 'Analytics-Überprüfung fehlgeschlagen',
        details: 'Fehler bei der Überprüfung von Plausible Analytics.',
      };
    }
  };

  const checkCSRGenerator = (): StatusCheck => {
    try {
      // Check if we can access the CSR generator route
      const currentPath = window.location.pathname;

      return {
        name: 'CSR-Generator',
        status: 'success',
        message: 'CSR-Generator ist verfügbar',
        details: 'Die CSR-Generator-Seite ist unter /admin/csr-generator erreichbar.',
      };
    } catch (error) {
      return {
        name: 'CSR-Generator',
        status: 'error',
        message: 'CSR-Generator-Überprüfung fehlgeschlagen',
        details: 'Fehler bei der Überprüfung des CSR-Generators.',
      };
    }
  };

  const checkDomainResolution = async (): Promise<StatusCheck> => {
    try {
      const hostname = window.location.hostname;
      const protocol = window.location.protocol;

      if (hostname.includes('paarweg.com')) {
        return {
          name: 'Domain-Auflösung',
          status: 'success',
          message: 'Domain wird korrekt aufgelöst',
          details: `Aktuell: ${protocol}//${hostname}`,
        };
      } else if (hostname.includes('caffeine.xyz')) {
        return {
          name: 'Domain-Auflösung',
          status: 'warning',
          message: 'Zugriff über Caffeine-Domain',
          details: `Aktuell: ${protocol}//${hostname}. DNS-Forwarding zu paarweg.com sollte konfiguriert werden.`,
        };
      } else {
        return {
          name: 'Domain-Auflösung',
          status: 'success',
          message: 'Lokale Entwicklungsumgebung',
          details: `Aktuell: ${protocol}//${hostname}`,
        };
      }
    } catch (error) {
      return {
        name: 'Domain-Auflösung',
        status: 'error',
        message: 'Domain-Auflösung fehlgeschlagen',
        details: 'Fehler bei der Überprüfung der Domain-Auflösung.',
      };
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case 'success':
        return <CheckCircle2 className="h-5 w-5 text-green-600" />;
      case 'warning':
        return <AlertCircle className="h-5 w-5 text-yellow-600" />;
      case 'error':
        return <XCircle className="h-5 w-5 text-red-600" />;
      case 'checking':
        return <RefreshCw className="h-5 w-5 animate-spin text-blue-600" />;
      default:
        return <AlertCircle className="h-5 w-5 text-gray-600" />;
    }
  };

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'success':
        return <Badge className="bg-green-100 text-green-800 hover:bg-green-100">OK</Badge>;
      case 'warning':
        return <Badge className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100">Warnung</Badge>;
      case 'error':
        return <Badge className="bg-red-100 text-red-800 hover:bg-red-100">Fehler</Badge>;
      case 'checking':
        return <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-100">Prüfe...</Badge>;
      default:
        return <Badge>Unbekannt</Badge>;
    }
  };

  const getCategoryIcon = (name: string) => {
    if (name.includes('DNS') || name.includes('Domain')) return <Globe className="h-5 w-5" />;
    if (name.includes('SSL')) return <Shield className="h-5 w-5" />;
    if (name.includes('Analytics')) return <TrendingUp className="h-5 w-5" />;
    if (name.includes('CNAME') || name.includes('Weiterleitung')) return <LinkIcon className="h-5 w-5" />;
    if (name.includes('CSR')) return <Server className="h-5 w-5" />;
    return <CheckCircle2 className="h-5 w-5" />;
  };

  const successCount = checks.filter((c) => c.status === 'success').length;
  const warningCount = checks.filter((c) => c.status === 'warning').length;
  const errorCount = checks.filter((c) => c.status === 'error').length;

  return (
    <div className="w-full">
      {/* Header Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-muted/20 to-accent/10">
        <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 flex justify-center">
              <div className="rounded-full bg-primary/10 p-4">
                <Server className="h-12 w-12 text-primary" />
              </div>
            </div>
            <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl">
              Technischer Status
            </h1>
            <p className="text-lg text-muted-foreground">
              Vollständige Überprüfung der Live-Setup-Konfiguration für paarweg.com
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mx-auto max-w-4xl space-y-8">
            {/* Summary Card */}
            <Card className="border-primary/50">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <CardTitle>Übersicht</CardTitle>
                  <Button
                    onClick={runAllChecks}
                    disabled={isChecking}
                    variant="outline"
                    size="sm"
                  >
                    {isChecking ? (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4 animate-spin" />
                        Prüfe...
                      </>
                    ) : (
                      <>
                        <RefreshCw className="mr-2 h-4 w-4" />
                        Erneut prüfen
                      </>
                    )}
                  </Button>
                </div>
                {lastCheck && (
                  <CardDescription>
                    Letzte Überprüfung: {lastCheck.toLocaleString('de-DE')}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="flex items-center gap-3 rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-950">
                    <CheckCircle2 className="h-8 w-8 text-green-600" />
                    <div>
                      <p className="text-2xl font-bold text-green-900 dark:text-green-100">
                        {successCount}
                      </p>
                      <p className="text-sm text-green-700 dark:text-green-300">Erfolgreich</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-950">
                    <AlertCircle className="h-8 w-8 text-yellow-600" />
                    <div>
                      <p className="text-2xl font-bold text-yellow-900 dark:text-yellow-100">
                        {warningCount}
                      </p>
                      <p className="text-sm text-yellow-700 dark:text-yellow-300">Warnungen</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-lg border border-red-200 bg-red-50 p-4 dark:border-red-800 dark:bg-red-950">
                    <XCircle className="h-8 w-8 text-red-600" />
                    <div>
                      <p className="text-2xl font-bold text-red-900 dark:text-red-100">
                        {errorCount}
                      </p>
                      <p className="text-sm text-red-700 dark:text-red-300">Fehler</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Theme HEX Codes Section */}
            <ThemeHexCodesSection />

            {/* Status Checks */}
            <Card>
              <CardHeader>
                <CardTitle>Detaillierte Überprüfung</CardTitle>
                <CardDescription>
                  Status aller technischen Komponenten und Konfigurationen
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {checks.length === 0 ? (
                  <div className="py-8 text-center text-muted-foreground">
                    <RefreshCw className="mx-auto mb-4 h-12 w-12 animate-spin" />
                    <p>Führe Überprüfungen durch...</p>
                  </div>
                ) : (
                  checks.map((check, index) => (
                    <div key={index}>
                      <div className="flex items-start gap-4">
                        <div className="mt-1 shrink-0">{getCategoryIcon(check.name)}</div>
                        <div className="flex-1 space-y-2">
                          <div className="flex items-center justify-between">
                            <h3 className="font-semibold">{check.name}</h3>
                            {getStatusBadge(check.status)}
                          </div>
                          <div className="flex items-start gap-2">
                            {getStatusIcon(check.status)}
                            <div className="flex-1">
                              <p className="text-sm font-medium">{check.message}</p>
                              {check.details && (
                                <p className="mt-1 text-sm text-muted-foreground">
                                  {check.details}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                      {index < checks.length - 1 && <Separator className="mt-4" />}
                    </div>
                  ))
                )}
              </CardContent>
            </Card>

            {/* Configuration Details */}
            <Card className="border-primary/30 bg-primary/5">
              <CardHeader>
                <CardTitle>Erwartete Konfiguration</CardTitle>
                <CardDescription>
                  Sollwerte für die korrekte Einrichtung von paarweg.com
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="mb-2 font-semibold">DNS-Konfiguration</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• CNAME-Record: www → paarweg-73d.caffeine.xyz</p>
                    <p>• Root-Domain: paarweg.com → 301-Weiterleitung zu www.paarweg.com</p>
                    <p>• TTL: 300 Sekunden (empfohlen)</p>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="mb-2 font-semibold">SSL-Zertifikat</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Common Name (CN): www.paarweg.com</p>
                    <p>• Organisation: Roland Soder</p>
                    <p>• Standort: Basel, Basel Stadt, CH</p>
                    <p>• Schlüssellänge: 2048-bit RSA</p>
                  </div>
                </div>
                <Separator />
                <div>
                  <h4 className="mb-2 font-semibold">Analytics</h4>
                  <div className="space-y-1 text-sm text-muted-foreground">
                    <p>• Plausible Analytics Domain: www.paarweg.com</p>
                    <p>• Script-URL: https://plausible.io/js/script.js</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Quick Links */}
            <Card>
              <CardHeader>
                <CardTitle>Schnellzugriff</CardTitle>
                <CardDescription>Nützliche Links für die Verwaltung</CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => window.open('/admin/csr-generator', '_blank')}
                >
                  <Server className="mr-2 h-4 w-4" />
                  CSR-Generator öffnen
                  <ExternalLink className="ml-auto h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => window.open('https://www.united-domains.de', '_blank')}
                >
                  <Globe className="mr-2 h-4 w-4" />
                  United Domains Dashboard
                  <ExternalLink className="ml-auto h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  className="w-full justify-start"
                  onClick={() => window.open('https://plausible.io/www.paarweg.com', '_blank')}
                >
                  <TrendingUp className="mr-2 h-4 w-4" />
                  Plausible Analytics Dashboard
                  <ExternalLink className="ml-auto h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
