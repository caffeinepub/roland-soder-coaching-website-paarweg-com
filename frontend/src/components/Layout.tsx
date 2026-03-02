import { Link, useNavigate, useLocation, Outlet } from '@tanstack/react-router';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CALENDLY_URL = 'https://calendly.com/paarweg-info/paarweg-session-90-min-klon';

const navLinks = [
  { label: 'Startseite', path: '/' },
  { label: 'Für Paare', path: '/paare' },
  { label: 'Für Frauen', path: '/frauen' },
  { label: 'Für Männer', path: '/maenner' },
  { label: 'Über mich', path: '/ueber-mich' },
  { label: 'Preise', path: '/preise' },
  { label: 'Kontakt', path: '/kontakt' },
];

export default function Layout() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [location.pathname]);

  const handleKontaktClick = (e: React.MouseEvent) => {
    if (location.pathname === '/kontakt') {
      e.preventDefault();
      window.location.reload();
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-2 shrink-0">
              <img
                src="/assets/PaarWeg Logo final (1).png"
                alt="PaarWeg Logo"
                className="h-10 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={link.path === '/kontakt' ? handleKontaktClick : undefined}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                  activeProps={{ className: 'px-3 py-2 text-sm font-medium text-foreground bg-muted rounded-md' }}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <Button
                size="sm"
                onClick={() => window.open(CALENDLY_URL, '_blank')}
                className="bg-primary text-primary-foreground hover:bg-primary/90"
              >
                Kennenlerngespräch buchen
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden p-2 rounded-md text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background">
            <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={(e) => {
                    setMobileMenuOpen(false);
                    if (link.path === '/kontakt') handleKontaktClick(e);
                  }}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors rounded-md hover:bg-muted"
                  activeProps={{ className: 'px-3 py-2 text-sm font-medium text-foreground bg-muted rounded-md' }}
                >
                  {link.label}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Button
                  className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
                  onClick={() => {
                    setMobileMenuOpen(false);
                    window.open(CALENDLY_URL, '_blank');
                  }}
                >
                  Kennenlerngespräch buchen
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <img
                src="/assets/PaarWeg Logo final (1).png"
                alt="PaarWeg Logo"
                className="h-10 w-auto mb-3"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professionelles Paar- und Einzelcoaching für nachhaltige Veränderung.
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Standort: Basel
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Navigation</h3>
              <ul className="space-y-2">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    <Link
                      to={link.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact & Legal */}
            <div>
              <h3 className="text-sm font-semibold text-foreground mb-3">Kontakt</h3>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a href="mailto:info@paarweg.com" className="hover:text-foreground transition-colors">
                    info@paarweg.com
                  </a>
                </li>
                <li>
                  <a href="tel:+41797703925" className="hover:text-foreground transition-colors">
                    +41 79 770 39 25
                  </a>
                </li>
                <li className="pt-2">
                  <Link to="/rechtliches" className="hover:text-foreground transition-colors">
                    Impressum & Datenschutz
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-muted-foreground">
            <p>© {new Date().getFullYear()} PaarWeg – Roland Soder. Alle Rechte vorbehalten.</p>
            <p>
              Built with ❤️ using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'paarweg')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-foreground transition-colors"
              >
                caffeine.ai
              </a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
