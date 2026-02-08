import { Outlet, Link, useLocation } from '@tanstack/react-router';
import { Menu, Heart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';

export default function Layout() {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Navigation items - /paarberatung-zuerich is intentionally not included (landing page only)
  const navigation = [
    { name: 'Startseite', href: '/' },
    { name: 'Für Paare', href: '/paare' },
    { name: 'Für Frauen', href: '/frauen' },
    { name: 'Für Männer', href: '/maenner' },
    { name: 'Über mich', href: '/ueber-mich' },
    { name: 'Preise', href: '/preise' },
    { name: 'Kontakt', href: '/kontakt' },
  ];

  const isActive = (href: string) => {
    return location.pathname === href;
  };

  // Scroll to top on route change - instant scroll for mobile
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen flex-col">
      {/* Header */}
      <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container mx-auto flex h-24 md:h-28 items-center justify-between px-4 md:px-6">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/assets/PaarWeg Logo final (3).png"
              alt="PaarWeg – Roland Soder Coaching & Beziehungsbegleitung"
              className="h-16 w-auto md:h-18 lg:h-22"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-1 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className={`rounded-md px-4 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                  isActive(item.href)
                    ? 'bg-accent text-accent-foreground'
                    : 'text-muted-foreground'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu - Hamburger icon with terracotta color */}
          <Sheet open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button 
                variant="ghost" 
                size="icon" 
                className="h-12 w-12 hover:bg-accent"
              >
                <Menu className="h-7 w-7 text-primary" strokeWidth={2} />
                <span className="sr-only">Menü öffnen</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 pt-8">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`rounded-md px-4 py-3 text-base font-medium transition-colors hover:bg-accent hover:text-accent-foreground ${
                      isActive(item.href)
                        ? 'bg-accent text-accent-foreground'
                        : 'text-muted-foreground'
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* Footer */}
      <footer className="border-t border-border/40 bg-muted/30">
        <div className="container mx-auto px-4 py-12 md:px-6">
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-4 flex items-center">
                <img
                  src="/assets/PaarWeg Logo final (3).png"
                  alt="PaarWeg – Roland Soder Coaching & Beziehungsbegleitung"
                  className="h-7 w-auto opacity-60"
                />
              </div>
              <p className="text-sm text-muted-foreground text-left">
                Begleitung für Paare auf dem Weg zu mehr Nähe, Verständnis und gemeinsamer Entwicklung.
              </p>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-left">Kontakt</h3>
              <div className="space-y-1 text-sm text-left">
                <p className="text-foreground">Tel: +41 79 770 39 25</p>
                <p className="text-foreground break-all">E-Mail: info@paarweg.com</p>
                <p className="text-foreground">
                  <a
                    href="https://wa.me/+41797703925"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-primary transition-colors"
                  >
                    WhatsApp: +41 79 770 39 25
                  </a>
                </p>
                <p className="mt-3 text-xs text-muted-foreground/70">
                  Firmensitz: Basel
                </p>
              </div>
            </div>
            <div>
              <h3 className="mb-4 text-lg font-semibold text-left">Rechtliches</h3>
              <nav className="flex flex-col space-y-2 text-sm text-left">
                <Link to="/impressum" className="text-muted-foreground hover:text-foreground transition-colors">
                  Impressum & Datenschutz
                </Link>
              </nav>
            </div>
          </div>
          <div className="mt-8 border-t border-border/40 pt-8 text-center text-sm text-muted-foreground">
            <p className="flex items-center justify-center gap-1">
              © 2025. Built with <Heart className="h-4 w-4 fill-primary text-primary" /> using{' '}
              <a
                href="https://caffeine.ai"
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium hover:text-foreground transition-colors"
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
