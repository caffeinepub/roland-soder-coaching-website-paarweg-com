import { useEffect } from 'react';

export default function SitemapPage() {
  useEffect(() => {
    document.title = 'Sitemap - PaarWeg Coaching';
  }, []);

  // Get current date in ISO format for lastmod
  const lastModified = new Date().toISOString().split('T')[0];

  // Define all public URLs with their priorities and change frequencies
  const urls = [
    { loc: 'https://www.paarweg.com/', priority: '1.0', changefreq: 'weekly' },
    { loc: 'https://www.paarweg.com/paare', priority: '0.9', changefreq: 'monthly' },
    { loc: 'https://www.paarweg.com/frauen', priority: '0.9', changefreq: 'monthly' },
    { loc: 'https://www.paarweg.com/maenner', priority: '0.9', changefreq: 'monthly' },
    { loc: 'https://www.paarweg.com/ueber-mich', priority: '0.8', changefreq: 'monthly' },
    { loc: 'https://www.paarweg.com/preise', priority: '0.8', changefreq: 'monthly' },
    { loc: 'https://www.paarweg.com/kontakt', priority: '0.7', changefreq: 'monthly' },
    { loc: 'https://www.paarweg.com/rechtliches', priority: '0.5', changefreq: 'yearly' },
  ];

  return (
    <>
      {/* SEO Meta Tags */}
      <link rel="canonical" href="https://www.paarweg.com/sitemap" />
      <meta name="robots" content="noindex, follow" />
      <meta name="description" content="XML Sitemap für PaarWeg Coaching - Übersicht aller öffentlichen Seiten für Suchmaschinen." />

      <div className="min-h-screen bg-background py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-lg shadow-lg p-8">
            <h1 className="text-3xl font-bold text-foreground mb-6">XML Sitemap</h1>
            
            <p className="text-muted-foreground mb-8">
              Diese Seite enthält eine XML-Sitemap aller öffentlichen URLs der PaarWeg Coaching Website 
              für die Einreichung bei Google Search Console und anderen Suchmaschinen.
            </p>

            <div className="bg-muted rounded-lg p-6 overflow-x-auto">
              <pre className="text-sm font-mono text-foreground whitespace-pre-wrap break-words">
{`<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map(url => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${lastModified}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join('\n')}
</urlset>`}
              </pre>
            </div>

            <div className="mt-8 space-y-4">
              <h2 className="text-xl font-semibold text-foreground">Enthaltene URLs:</h2>
              <ul className="space-y-2">
                {urls.map((url, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-primary mr-2">•</span>
                    <a 
                      href={url.loc} 
                      className="text-primary hover:underline break-all"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {url.loc}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-8 p-4 bg-muted rounded-lg">
              <h3 className="text-lg font-semibold text-foreground mb-2">Hinweis für Webmaster:</h3>
              <p className="text-sm text-muted-foreground">
                Diese Sitemap kann bei Google Search Console unter{' '}
                <code className="bg-background px-2 py-1 rounded text-xs">
                  https://www.paarweg.com/sitemap
                </code>{' '}
                eingereicht werden. Die Sitemap wird automatisch mit dem aktuellen Datum aktualisiert.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
