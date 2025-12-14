import Navigation from "@/components/navigation"
import AboutSection from "@/components/about-section"
import ContactSection from "@/components/contact-section"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"


export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16">
        <AboutSection />
        <ContactSection />
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
