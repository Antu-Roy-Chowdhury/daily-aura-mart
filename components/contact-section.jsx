import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram, Youtube } from "lucide-react"

export default function ContactSection() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg">
            We'd love to hear from you. Reach out to us through any of these channels.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Info */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="bg-[#04b706] text-white p-3 rounded-xl">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">WhatsApp</h3>
                <a
                  href="https://wa.me/+8801518907652"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#04b706] hover:underline"
                >
                  +880 1518907652
                </a>
                <p className="text-sm text-gray-600">Available 24/7 for orders</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-[#ff7b23] text-white p-3 rounded-xl">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Phone</h3>
                <p className="text-gray-700">+880 1518907652</p>
                <p className="text-sm text-gray-600">9 AM - 9 PM (Daily)</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-blue-600 text-white p-3 rounded-xl">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Email</h3>
                <a href="mailto:info@dailyauramart.com" className="text-blue-600 hover:underline">
                  info@dailyauramart.com
                </a>
                <p className="text-sm text-gray-600">We'll respond within 24 hours</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-purple-600 text-white p-3 rounded-xl">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">Location</h3>
                <p className="text-gray-700">Dhaka, Bangladesh</p>
                <p className="text-sm text-gray-600">Serving all over Bangladesh</p>
              </div>
            </div>
          </div>

          {/* Social Media & Quick Message */}
          <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Follow Us</h3>
            <p className="text-gray-700 mb-6">Stay updated with our latest products and offers</p>

            <div className="flex gap-4 mb-8">
              <a
                href="#"
                className="bg-white text-blue-600 p-4 rounded-xl hover:shadow-lg transition-shadow"
                aria-label="Facebook"
              >
                <Facebook className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="bg-white text-pink-600 p-4 rounded-xl hover:shadow-lg transition-shadow"
                aria-label="Instagram"
              >
                <Instagram className="w-8 h-8" />
              </a>
              <a
                href="#"
                className="bg-white text-red-600 p-4 rounded-xl hover:shadow-lg transition-shadow"
                aria-label="YouTube"
              >
                <Youtube className="w-8 h-8" />
              </a>
            </div>

            <div className="bg-white rounded-2xl p-6">
              <h4 className="font-bold text-gray-900 mb-3">Quick Order</h4>
              <p className="text-sm text-gray-600 mb-4">
                For fastest response, message us directly on WhatsApp with your product inquiry.
              </p>
              <a
                href="https://wa.me/+8801518907652"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-[#04b706] text-white py-3 rounded-xl font-semibold hover:bg-[#039605] transition-colors flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
