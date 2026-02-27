import { RouterProvider, createRouter, createRoute, createRootRoute, Outlet } from '@tanstack/react-router';
import { ThemeProvider } from 'next-themes';
import { Toaster } from '@/components/ui/sonner';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import CouplesPage from './pages/CouplesPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import PricingPage from './pages/PricingPage';
import LegalPage from './pages/LegalPage';
import BaselCouplesLandingPage from './pages/BaselCouplesLandingPage';
import ZurichCouplesLandingPage from './pages/ZurichCouplesLandingPage';

const rootRoute = createRootRoute({
  component: () => (
    <Layout>
      <Outlet />
    </Layout>
  ),
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/',
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/about',
  component: AboutPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/contact',
  component: ContactPage,
});

const couplesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/couples',
  component: CouplesPage,
});

const menRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/men',
  component: MenPage,
});

const womenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/women',
  component: WomenPage,
});

const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/pricing',
  component: PricingPage,
});

const legalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/legal',
  component: LegalPage,
});

const baselCouplesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/paartherapie-basel',
  component: BaselCouplesLandingPage,
});

const zurichCouplesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: '/paartherapie-zuerich',
  component: ZurichCouplesLandingPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  contactRoute,
  couplesRoute,
  menRoute,
  womenRoute,
  pricingRoute,
  legalRoute,
  baselCouplesRoute,
  zurichCouplesRoute,
]);

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
      <RouterProvider router={router} />
      <Toaster />
    </ThemeProvider>
  );
}
