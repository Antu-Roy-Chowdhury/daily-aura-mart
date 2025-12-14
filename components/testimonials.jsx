"use client"

import { useState, useEffect } from "react"
import { Star } from "lucide-react"

export default function Testimonials() {
  const [reviews, setReviews] = useState([])
  const [loading, setLoading] = useState(true)

  const TESTIMONIALS_CSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQHiN5h-_i-T0ooxcAbUWJ7nT5nMeeSSSWTVKFILAJNeCRxOPIB1o3qzWvRbTByeY13emId7EXnjbbC/pub?gid=901661070&single=true&output=csv"

  useEffect(() => {
    fetchTestimonials()
  }, [])

  const fetchTestimonials = async () => {
    try {
      const response = await fetch(TESTIMONIALS_CSV_URL)
      const text = await response.text()

      // Parse CSV
      const rows = text.trim().split("\n")
      const headers = rows[0].split(",")

      const parsedReviews = rows
        .slice(1)
        .map((row) => {
          const values = row.split(",")
          const review = {}
          headers.forEach((header, index) => {
            review[header.trim()] = values[index]?.trim() || ""
          })
          return review
        })
        .filter((r) => r.Customer_Name && r.Review_Text)
        .map((r) => ({
          name: r.Customer_Name,
          review: r.Review_Text,
          rating: Number.parseInt(r.Rating??5),
        }))

      setReviews(parsedReviews)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching testimonials:", error)
      // Fallback to demo data
      loadDemoData()
    }
  }

  const loadDemoData = () => {
    const demoReviews = [
      {
        name: "Ayesha Rahman",
        review:
          "Amazing products! The Vitamin C serum made my skin glow in just 2 weeks. Highly recommend Daily AuraMart!",
        rating: 5,
      },
      {
        name: "Fatima Khan",
        review: "Fast delivery and 100% authentic products. I love shopping here for all my beauty needs.",
        rating: 5,
      },
      {
        name: "Nadia Islam",
        review: "The hair serum is magical! My hair feels so soft and shiny. Will definitely order again.",
        rating: 5,
      },
      {
        name: "Sabrina Ahmed",
        review: "Great customer service and quality products. The WhatsApp ordering is so convenient!",
        rating: 5,
      },
    ]
    setReviews(demoReviews)
    setLoading(false)
  }

  return (
    <section className="py-16 bg-gradient-to-br from-orange-50 to-pink-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-lg">Join thousands of happy customers across Bangladesh</p>
        </div>

        {loading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[...Array(4)].map((_, i) => (
              <div key={i} className="animate-pulse bg-white rounded-2xl p-6 shadow-lg">
                <div className="h-4 bg-gray-200 rounded mb-4 w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#ff7b23] text-[#ff7b23]" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-gray-700 mb-4 leading-relaxed">"{review.review}"</p>

                {/* Customer Name */}
                <p className="font-bold text-gray-900">{review.name}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
