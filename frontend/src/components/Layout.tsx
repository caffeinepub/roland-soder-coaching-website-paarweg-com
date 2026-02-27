import { useState, useEffect } from 'react';
import { Link, useRouter } from '@tanstack/react-router';

const navItems = [
  { label: 'Startseite', path: '/' },
  { label: 'Paare', path: '/couples' },
  { label: 'Für Frauen', path: '/women' },
  { label: 'Für Männer', path: '/men' },
  { label: 'Über mich', path: '/about' },
  { label: 'Preise', path: '/pricing' },
  { label: 'Kontakt', path: '/contact' },
];

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to top instantly on route change
  useEffect(() => {
    const unsubscribe = router.subscribe('onResolved', () => {
      window.scrollTo({ top: 0, behavior: 'instant' });
    });
    return () => unsubscribe();
  }, [router]);

  const currentPath = router.state.location.pathname;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      {/* Header */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-background/95 backdrop-blur-sm shadow-sm border-b border-border'
            : 'bg-background/90 backdrop-blur-sm'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center gap-3 group">
              <img
                src="/assets/PaarWeg Logo final (2).png"
                alt="PaarWeg Logo"
                className="h-10 md:h-12 w-auto"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPath === item.path
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <Link
                to="/contact"
                className="ml-3 px-4 py-2 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
              >
                Termin buchen
              </Link>
            </nav>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-md text-foreground/70 hover:text-foreground hover:bg-muted transition-colors"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-border bg-background/98 backdrop-blur-sm">
            <div className="max-w-6xl mx-auto px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block px-3 py-2.5 rounded-md text-sm font-medium transition-colors duration-200 ${
                    currentPath === item.path
                      ? 'text-primary bg-primary/10'
                      : 'text-foreground/70 hover:text-foreground hover:bg-muted'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
              <div className="pt-2 pb-1">
                <Link
                  to="/contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block w-full text-center px-4 py-2.5 bg-primary text-primary-foreground rounded-full text-sm font-medium hover:bg-primary/90 transition-colors duration-200"
                >
                  Termin buchen
                </Link>
              </div>
            </div>
          </div>
        )}
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 border-t border-border mt-auto">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div className="space-y-4">
              <img
                src="/assets/PaarWeg Logo final (2).png"
                alt="PaarWeg Logo"
                className="h-10 w-auto"
              />
              <p className="text-sm text-muted-foreground leading-relaxed">
                Professionelles Paar- und Einzelcoaching in Basel und online.
                Ihr Weg zu einer erfüllten Beziehung.
              </p>
            </div>

            {/* Navigation */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Navigation</h3>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link
                      to={item.path}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact */}
            <div className="space-y-4">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Kontakt</h3>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Roland Soder</p>
                <p>Basel, Schweiz</p>
                <a
                  href="mailto:roland@paarweg.com"
                  className="block hover:text-foreground transition-colors"
                >
                  roland@paarweg.com
                </a>
                <Link
                  to="/legal"
                  className="block hover:text-foreground transition-colors"
                >
                  Impressum & Datenschutz
                </Link>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} PaarWeg – Roland Soder, Basel. Alle Rechte vorbehalten.
            </p>
            <p className="text-xs text-muted-foreground">
              Built with{' '}
              <span className="text-red-400">♥</span>
              {' '}using{' '}
              <a
                href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${encodeURIComponent(typeof window !== 'undefined' ? window.location.hostname : 'paarweg')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors"
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
