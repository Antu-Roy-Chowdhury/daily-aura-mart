import { Shield, Users, Truck, MessageCircle } from "lucide-react"

export default function TrustSection() {
  const benefits = [
    {
      icon: Shield,
      title: "100% Original Products",
      description: "Authentic products guaranteed",
    },
    {
      icon: Users,
      title: "Trusted by Customers",
      description: "5000+ happy customers",
    },
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Deliver across Bangladesh",
    },
    {
      icon: MessageCircle,
      title: "WhatsApp Ordering",
      description: "Easy & convenient ordering",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon
            return (
              <div key={index} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-100 rounded-full mb-4">
                  <Icon className="w-8 h-8 text-[#ff7b23]" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
