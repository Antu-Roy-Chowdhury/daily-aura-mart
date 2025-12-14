import Navigation from "@/components/navigation"
import OrderTracking from "@/components/order-tracking"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function TrackOrderPage() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Track Your Order</h1>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Enter your order ID to check the status of your delivery
            </p>
          </div>
          <OrderTracking />
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
