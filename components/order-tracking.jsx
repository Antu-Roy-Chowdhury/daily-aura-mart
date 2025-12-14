"use client"

import { useState } from "react"
import { Search, Package, Truck, CheckCircle, XCircle, Clock } from "lucide-react"

export default function OrderTracking() {
  const [orderId, setOrderId] = useState("")
  const [orderData, setOrderData] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState("")

  const ORDER_TRACKING_CSV_URL = "https://docs.google.com/spreadsheets/d/e/2PACX-1vQHiN5h-_i-T0ooxcAbUWJ7nT5nMeeSSSWTVKFILAJNeCRxOPIB1o3qzWvRbTByeY13emId7EXnjbbC/pub?gid=649071292&single=true&output=csv"

  const trackOrder = async () => {
    if (!orderId.trim()) {
      setError("Please enter an order ID")
      return
    }

    setLoading(true)
    setError("")
    setOrderData(null)

    try {
      const response = await fetch(ORDER_TRACKING_CSV_URL)
      const text = await response.text()

      // Parse CSV
      const rows = text.trim().split("\n")
      const headers = rows[0].split(",")

      const orders = rows
        .slice(1)
        .map((row) => {
          const values = row.split(",")
          const order = {}
          headers.forEach((header, index) => {
            order[header.trim()] = values[index]?.trim() || ""
          })
          return order
        })
        .filter((o) => o.Order_ID)

      // Find the order
      const order = orders.find((o) => o.Order_ID.toUpperCase() === orderId.toUpperCase())

      if (order) {
        setOrderData(order)
      } else {
        setError("Order ID not found. Please check and try again.")
      }
      setLoading(false)
    } catch (err) {
      console.error("Error tracking order:", err)
      // Fallback to demo data
      loadDemoData()
    }
  }

  const loadDemoData = () => {
    const demoOrders = {
      ORD12345: {
        Order_ID: "ORD12345",
        Customer_Name: "Sarah Ahmed",
        Product_Name: "Vitamin C Glow Serum",
        Current_Status: "On Shipping",
      },
      ORD12346: {
        Order_ID: "ORD12346",
        Customer_Name: "Nadia Khan",
        Product_Name: "Argan Oil Hair Serum",
        Current_Status: "Delivered",
      },
    }

    const order = demoOrders[orderId.toUpperCase()]
    if (order) {
      setOrderData(order)
    } else {
      setError("Order ID not found. Please check and try again.")
    }
    setLoading(false)
  }

  const getStatusSteps = () => {
    const steps = [
      { label: "Order Received", icon: Package },
      { label: "On Shipping", icon: Truck },
      { label: "Delivered", icon: CheckCircle },
      { label: "Waiting for Review", icon: Clock },
    ]

    if (orderData?.Current_Status === "Cancelled") {
      return [
        { label: "Order Received", icon: Package },
        { label: "Cancelled", icon: XCircle },
      ]
    }

    return steps
  }

  const getCurrentStepIndex = () => {
    const statusMap = {
      "Order Received": 0,
      "On Shipping": 1,
      Delivered: 2,
      "Waiting for Review": 3,
      Cancelled: 1,
    }
    return statusMap[orderData?.Current_Status] || 0
  }

  return (
    <div className="max-w-4xl mx-auto">
      {/* Search Box */}
      <div className="flex gap-2 mb-8">
        <input
          type="text"
          value={orderId}
          onChange={(e) => setOrderId(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && trackOrder()}
          placeholder="Enter Order ID (e.g., ORD12345)"
          className="flex-1 px-6 py-4 border-2 border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff7b23] text-lg"
        />
        <button
          onClick={trackOrder}
          disabled={loading}
          className="bg-[#ff7b23] text-white px-8 py-4 rounded-xl font-semibold hover:bg-[#e66d1f] transition-colors disabled:opacity-50 flex items-center gap-2"
        >
          {loading ? (
            "Tracking..."
          ) : (
            <>
              <Search className="w-5 h-5" />
              Track
            </>
          )}
        </button>
      </div>

      {/* Error Message */}
      {error && (
        <div className="bg-red-50 border-2 border-red-200 rounded-xl p-4 mb-8">
          <p className="text-red-700 text-center">{error}</p>
        </div>
      )}

      {/* Order Status */}
      {orderData && (
        <div className="bg-gradient-to-br from-orange-50 to-pink-50 rounded-3xl p-8 shadow-lg">
          <div className="mb-8">
            <div className="flex justify-between items-start mb-2">
              <div>
                <p className="text-sm text-gray-600">Order ID</p>
                <p className="text-xl font-bold text-gray-900">{orderData.Order_ID}</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-gray-600">Customer</p>
                <p className="text-xl font-bold text-gray-900">{orderData.Customer_Name}</p>
              </div>
            </div>
            <p className="text-gray-700">
              <span className="font-semibold">Product:</span> {orderData.Product_Name}
            </p>
            <p className="text-gray-700">
              <span className="font-semibold">Expected Delivery:</span> {orderData.Daivery_Date}
            </p>
          </div>

          {/* Progress Bar */}
          <div className="relative">
            <div className="flex justify-between items-center">
              {getStatusSteps().map((step, index) => {
                const Icon = step.icon
                const currentStep = getCurrentStepIndex()
                const isActive = index <= currentStep
                const isCancelled = orderData.Current_Status === "Cancelled" && step.label === "Cancelled"

                return (
                  <div key={index} className="flex flex-col items-center flex-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center mb-2 ${
                        isCancelled
                          ? "bg-red-500 text-white"
                          : isActive
                            ? "bg-[#04b706] text-white"
                            : "bg-gray-300 text-gray-500"
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <p
                      className={`text-xs md:text-sm text-center font-medium ${
                        isActive ? "text-gray-900" : "text-gray-500"
                      }`}
                    >
                      {step.label}
                    </p>
                  </div>
                )
              })}
            </div>
            {/* Connecting Line */}
            <div className="absolute top-6 left-0 right-0 h-1 bg-gray-300 -z-10">
              <div
                className={`h-full ${
                  orderData.Current_Status === "Cancelled" ? "bg-red-500" : "bg-[#04b706]"
                } transition-all duration-500`}
                style={{
                  width: `${(getCurrentStepIndex() / (getStatusSteps().length - 1)) * 100}%`,
                }}
              />
            </div>
          </div>

          {/* Current Status */}
          <div className="mt-8 text-center">
            <p className="text-lg text-gray-700">
              Current Status:{" "}
              <span
                className={`font-bold ${orderData.Current_Status === "Cancelled" ? "text-red-500" : "text-[#04b706]"}`}
              >
                {orderData.Current_Status}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  )
}
