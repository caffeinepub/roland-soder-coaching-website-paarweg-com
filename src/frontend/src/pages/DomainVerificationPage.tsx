import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { CheckCircle2, XCircle, AlertCircle } from 'lucide-react';

export default function DomainVerificationPage() {
  const [verificationStatus, setVerificationStatus] = React.useState<'checking' | 'success' | 'error'>('checking');
  const [fileContent, setFileContent] = React.useState<string>('');
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  React.useEffect(() => {
    const checkDomainFile = async () => {
      try {
        const response = await fetch('/.well-known/ic-domains');
        
        if (!response.ok) {
          throw new Error(`HTTP ${response.status}: ${response.statusText}`);
        }
        
        const content = await response.text();
        const trimmedContent = content.trim();
        
        setFileContent(trimmedContent);
        
        if (trimmedContent === 'www.paarweg.com') {
          setVerificationStatus('success');
        } else {
          setVerificationStatus('error');
          setErrorMessage(`Unexpected content: "${trimmedContent}". Expected: "www.paarweg.com"`);
        }
      } catch (error) {
        setVerificationStatus('error');
        setErrorMessage(error instanceof Error ? error.message : 'Unknown error occurred');
      }
    };

    checkDomainFile();
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-sand-50 to-beige-50 py-12 px-4">
      <div className="max-w-3xl mx-auto">
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl">Internet Computer Domain Verification</CardTitle>
            <CardDescription>
              Überprüfung der IC Domain-Konfigurationsdatei für www.paarweg.com
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Status Indicator */}
            <div className="flex items-center gap-3 p-4 rounded-lg border bg-muted/50">
              {verificationStatus === 'checking' && (
                <>
                  <AlertCircle className="h-6 w-6 text-blue-600 animate-pulse" />
                  <div>
                    <p className="font-medium">Überprüfung läuft...</p>
                    <p className="text-sm text-muted-foreground">
                      Zugriff auf /.well-known/ic-domains wird getestet
                    </p>
                  </div>
                </>
              )}
              {verificationStatus === 'success' && (
                <>
                  <CheckCircle2 className="h-6 w-6 text-green-600" />
                  <div>
                    <p className="font-medium text-green-700">Erfolgreich verifiziert</p>
                    <p className="text-sm text-muted-foreground">
                      Die Domain-Konfigurationsdatei ist korrekt zugänglich
                    </p>
                  </div>
                </>
              )}
              {verificationStatus === 'error' && (
                <>
                  <XCircle className="h-6 w-6 text-red-600" />
                  <div>
                    <p className="font-medium text-red-700">Fehler bei der Verifizierung</p>
                    <p className="text-sm text-muted-foreground">{errorMessage}</p>
                  </div>
                </>
              )}
            </div>

            {/* File Details */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Konfigurationsdetails</h3>
              
              <div className="space-y-2">
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <span className="text-sm font-medium">Dateipfad:</span>
                  <code className="text-sm bg-background px-2 py-1 rounded">
                    /.well-known/ic-domains
                  </code>
                </div>
                
                <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                  <span className="text-sm font-medium">Erwarteter Inhalt:</span>
                  <code className="text-sm bg-background px-2 py-1 rounded">
                    www.paarweg.com
                  </code>
                </div>
                
                {fileContent && (
                  <div className="flex justify-between items-center p-3 bg-muted/30 rounded">
                    <span className="text-sm font-medium">Tatsächlicher Inhalt:</span>
                    <code className="text-sm bg-background px-2 py-1 rounded">
                      {fileContent}
                    </code>
                  </div>
                )}
              </div>
            </div>

            {/* Configuration Files */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Erforderliche Konfigurationsdateien</h3>
              
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-muted/30 rounded">
                  <p className="font-medium mb-1">1. frontend/public/.well-known/ic-domains</p>
                  <p className="text-muted-foreground">
                    Datei ohne Erweiterung mit Inhalt: <code className="bg-background px-1 rounded">www.paarweg.com</code>
                  </p>
                </div>
                
                <div className="p-3 bg-muted/30 rounded">
                  <p className="font-medium mb-1">2. frontend/ic-assets.json</p>
                  <p className="text-muted-foreground">
                    Konfiguration: <code className="bg-background px-1 rounded">{`[{ "match": ".well-known", "ignore": false }]`}</code>
                  </p>
                </div>
              </div>
            </div>

            {/* Access URL */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Öffentlicher Zugriff</h3>
              <div className="p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg border border-blue-200 dark:border-blue-800">
                <p className="text-sm mb-2">Die Datei sollte öffentlich zugänglich sein unter:</p>
                <a 
                  href="https://www.paarweg.com/.well-known/ic-domains"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 underline break-all"
                >
                  https://www.paarweg.com/.well-known/ic-domains
                </a>
              </div>
            </div>

            {/* Instructions */}
            <div className="space-y-3">
              <h3 className="font-semibold text-lg">Deployment-Hinweise</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Stelle sicher, dass die Datei <code className="bg-background px-1 rounded">frontend/public/.well-known/ic-domains</code> existiert
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Die Datei muss den exakten Inhalt <code className="bg-background px-1 rounded">www.paarweg.com</code> enthalten (ohne Leerzeichen am Ende)
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Die <code className="bg-background px-1 rounded">ic-assets.json</code> Datei muss das .well-known Verzeichnis inkludieren
                  </span>
                </li>
                <li className="flex gap-2">
                  <span className="text-primary">•</span>
                  <span>
                    Nach dem Deployment sollte die URL öffentlich zugänglich sein und den Plain-Text-Inhalt zurückgeben
                  </span>
                </li>
              </ul>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
