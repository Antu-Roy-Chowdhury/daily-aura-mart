import Navigation from "@/components/navigation"
import HeroSection from "@/components/hero-section"
import CategoryHighlights from "@/components/category-highlights"
import ProductGallery from "@/components/product-gallery"
import Testimonials from "@/components/testimonials"
import TrustSection from "@/components/trust-section"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main>
        <HeroSection />
        <CategoryHighlights />
        <ProductGallery />
        <section id="reviews">
          <Testimonials />
        </section>
        <TrustSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
