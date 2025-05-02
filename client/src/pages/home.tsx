import { Helmet } from "react-helmet";
import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import FeaturesSection from "@/components/features-section";
import StatsSection from "@/components/stats-section";
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from "@/components/pricing-section";
import CTASection from "@/components/cta-section";
import NewsletterSection from "@/components/newsletter-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Quantum - Modern SaaS Platform for Streamlined Workflows</title>
        <meta name="description" content="Streamline your workflow with our cutting-edge SaaS platform. Boost productivity and simplify complex tasks." />
        <meta property="og:title" content="Quantum - Modern SaaS Platform" />
        <meta property="og:description" content="Streamline your workflow with our cutting-edge SaaS platform. Boost productivity and simplify complex tasks." />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Quantum - Modern SaaS Platform" />
        <meta name="twitter:description" content="Streamline your workflow with our cutting-edge SaaS platform." />
      </Helmet>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main>
          <HeroSection />
          <FeaturesSection />
          <StatsSection />
          <TestimonialsSection />
          <PricingSection />
          <CTASection />
          <NewsletterSection />
        </main>
        <Footer />
      </div>
    </>
  );
}
