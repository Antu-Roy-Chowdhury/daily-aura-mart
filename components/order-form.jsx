"use client"

import { useState, useEffect } from "react"
import { useSearchParams, useRouter } from "next/navigation"
import { Package, MapPin, Phone, User, CreditCard, ArrowLeft } from "lucide-react"

export default function OrderForm() {
  const searchParams = useSearchParams()
  const router = useRouter()

  const [product, setProduct] = useState(null)
  const [formData, setFormData] = useState({
    fullName: "",
    mobileNumber: "",
    district: "",
    fullAddress: "",
    trxId: "",
  })

  useEffect(() => {
    // Get product details from URL params
    const productData = {
      Product_ID: searchParams.get("id") || "",
      Product_Name: searchParams.get("name") || "",
      Price: searchParams.get("price") || "",
      Image_URL: searchParams.get("image") || "",
      Full_Details: searchParams.get("details") || "",
    }

    if (productData.Product_Name) {
      setProduct(productData)
    }
  }, [searchParams])

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Validate form
    if (
      !formData.fullName ||
      !formData.mobileNumber ||
      !formData.district ||
      !formData.fullAddress ||
      !formData.trxId
    ) {
      alert("Please fill all fields")
      return
    }

    // Create WhatsApp message
    const message = `Hello Daily AuraMart! I want to order:

Product: ${product.Product_Name} (ID: ${product.Product_ID})
Price: ${product.Price}

Name: ${formData.fullName}
Phone: ${formData.mobileNumber}
Address: ${formData.fullAddress}, ${formData.district}

TrxID: ${formData.trxId}`

    const whatsappUrl = `https://wa.me/8801234567890?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, "_blank")
  }

  if (!product || !product.Product_Name) {
    return (
      <div className="bg-white rounded-3xl p-8 shadow-lg text-center">
        <p className="text-gray-600 mb-4">No product selected</p>
        <button
          onClick={() => router.push("/#shop")}
          className="bg-[#ff7b23] text-white px-6 py-3 rounded-xl font-semibold hover:bg-[#e66d1f] transition-colors"
        >
          Browse Products
        </button>
      </div>
    )
  }

  return (
    <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
      {/* Back Button */}
      <div className="p-4 border-b bg-gray-50">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-gray-600 hover:text-[#ff7b23] transition-colors"
        >
          <ArrowLeft className="w-5 h-5" />
          <span className="font-medium">Back to Shop</span>
        </button>
      </div>

      {/* Product Details */}
      <div className="p-6 border-b bg-orange-50">
        <div className="flex gap-4">
          <img
            src={product.Image_URL || "/placeholder.svg"}
            alt={product.Product_Name}
            className="w-24 h-24 rounded-xl object-cover"
          />
          <div className="flex-1">
            <h3 className="font-bold text-lg text-gray-900 mb-1">{product.Product_Name}</h3>
            <p className="text-sm text-gray-600 mb-2">{product.Full_Details}</p>
            <p className="text-2xl font-bold text-[#ff7b23]">{product.Price}</p>
          </div>
        </div>
      </div>

      {/* Order Form */}
      <form onSubmit={handleSubmit} className="p-6 space-y-4">
        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <User className="w-4 h-4" />
            Full Name
          </label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7b23]"
            placeholder="Enter your full name"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Phone className="w-4 h-4" />
            Mobile Number
          </label>
          <input
            type="tel"
            name="mobileNumber"
            value={formData.mobileNumber}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7b23]"
            placeholder="01XXXXXXXXX"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            District / Thana
          </label>
          <input
            type="text"
            name="district"
            value={formData.district}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7b23]"
            placeholder="e.g., Dhaka / Mirpur"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-gray-700 mb-2 flex items-center gap-2">
            <Package className="w-4 h-4" />
            Full Address
          </label>
          <textarea
            name="fullAddress"
            value={formData.fullAddress}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7b23] resize-none"
            placeholder="House/Flat no., Road, Area"
            rows="3"
            required
          />
        </div>

        {/* Payment Instructions */}
        <div className="bg-green-50 border-2 border-[#04b706] rounded-xl p-4">
          <h4 className="font-bold text-[#04b706] mb-2 flex items-center gap-2">
            <CreditCard className="w-5 h-5" />
            Payment Instructions
          </h4>
          <p className="text-sm text-gray-700 mb-3">
            Please pay <strong>130৳ Delivery Charge</strong> via Bkash / Nagad / Rocket to confirm your order.
          </p>
          <input
            type="text"
            name="trxId"
            value={formData.trxId}
            onChange={handleChange}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#04b706]"
            placeholder="Enter Transaction ID (TrxID)"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-[#04b706] text-white py-4 rounded-xl font-bold text-lg hover:bg-[#039605] transition-colors flex items-center justify-center gap-2"
        >
          <Package className="w-5 h-5" />
          Send Order on WhatsApp
        </button>
      </form>
    </div>
  )
}
