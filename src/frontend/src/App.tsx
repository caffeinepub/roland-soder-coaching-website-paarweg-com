import { Toaster } from "@/components/ui/sonner";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import Layout from "./components/Layout";
import AboutPage from "./pages/AboutPage";
import BaselCouplesLandingPage from "./pages/BaselCouplesLandingPage";
import BookingCoachingPage from "./pages/BookingCoachingPage";
import BookingKennenlernPage from "./pages/BookingKennenlernPage";
import CSRGeneratorPage from "./pages/CSRGeneratorPage";
import ContactPage from "./pages/ContactPage";
import CouplesPage from "./pages/CouplesPage";
import DomainVerificationPage from "./pages/DomainVerificationPage";
import HomePage from "./pages/HomePage";
import LegalPage from "./pages/LegalPage";
import MenPage from "./pages/MenPage";
import PricingPage from "./pages/PricingPage";
import SitemapPage from "./pages/SitemapPage";
import SwissOnlineCouplesLandingPage from "./pages/SwissOnlineCouplesLandingPage";
import TechnicalStatusPage from "./pages/TechnicalStatusPage";
import WomenPage from "./pages/WomenPage";
import ZurichCouplesLandingPage from "./pages/ZurichCouplesLandingPage";

const queryClient = new QueryClient();

const rootRoute = createRootRoute({
  component: Layout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const couplesRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/paare",
  component: CouplesPage,
});

const womenRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/frauen",
  component: WomenPage,
});

const menRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/maenner",
  component: MenPage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/ueber-mich",
  component: AboutPage,
});

const pricingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/preise",
  component: PricingPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/kontakt",
  component: ContactPage,
});

const legalRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/rechtliches",
  component: LegalPage,
});

const sitemapRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/sitemap",
  component: SitemapPage,
});

// Zurich landing page route - intentionally not linked in navigation menu
const zurichCouplesLandingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/paarberatung-zuerich",
  component: ZurichCouplesLandingPage,
});

// Basel landing page route - intentionally not linked in navigation menu
const baselCouplesLandingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/paarberatung-basel",
  component: BaselCouplesLandingPage,
});

// Swiss Online landing page route - intentionally not linked in navigation menu
const swissOnlineCouplesLandingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/online-paarberatung-schweiz",
  component: SwissOnlineCouplesLandingPage,
});

// Booking pages - intentionally not linked in navigation menu
const bookingKennenlernRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/kennenlerngespräch",
  component: BookingKennenlernPage,
});

const bookingCoachingRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/coaching-sitzung",
  component: BookingCoachingPage,
});

const csrGeneratorRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/csr-generator",
  component: CSRGeneratorPage,
});

const technicalStatusRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/technical-status",
  component: TechnicalStatusPage,
});

const domainVerificationRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/admin/domain-verification",
  component: DomainVerificationPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  couplesRoute,
  womenRoute,
  menRoute,
  aboutRoute,
  pricingRoute,
  contactRoute,
  legalRoute,
  sitemapRoute,
  zurichCouplesLandingRoute,
  baselCouplesLandingRoute,
  swissOnlineCouplesLandingRoute,
  bookingKennenlernRoute,
  bookingCoachingRoute,
  csrGeneratorRoute,
  technicalStatusRoute,
  domainVerificationRoute,
]);

const router = createRouter({ routeTree });

export default function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <Toaster />
      </QueryClientProvider>
    </ThemeProvider>
  );
}
