"use client"

import { Suspense } from "react"
import Navigation from "@/components/navigation"
import OrderForm from "@/components/order-form"
import Footer from "@/components/footer"
import FloatingWhatsApp from "@/components/floating-whatsapp"

export default function OrderPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navigation />
      <main className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Complete Your Order</h1>
            <p className="text-gray-600">Fill in your details to place your order</p>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <OrderForm />
          </Suspense>
        </div>
      </main>
      <Footer />
      <FloatingWhatsApp />
    </div>
  )
}
