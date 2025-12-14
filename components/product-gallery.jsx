"use client"

import { useState, useEffect } from "react"
import ProductCard from "./product-card"

// Each sheet needs to be accessed separately with the gid parameter

export default function ProductGallery() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  // Your Google Sheets URL - Products sheet (gid=0)
  const PRODUCTS_CSV_URL =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQHiN5h-_i-T0ooxcAbUWJ7nT5nMeeSSSWTVKFILAJNeCRxOPIB1o3qzWvRbTByeY13emId7EXnjbbC/pub?gid=0&single=true&output=csv"

  useEffect(() => {
    fetchProducts()
  }, [])

  const fetchProducts = async () => {
    try {
      const response = await fetch(PRODUCTS_CSV_URL)
      const text = await response.text()

      // Parse CSV
      const rows = text.trim().split("\n")
      const headers = rows[0].split(",")

      const parsedProducts = rows
        .slice(1)
        .map((row) => {
          const values = row.split(",")
          const product = {}
          headers.forEach((header, index) => {
            product[header.trim()] = values[index]?.trim() || ""
          })
          return product
        })
        .filter((p) => p.Status !== "Out of Stock" && p.Product_Name)

      setProducts(parsedProducts)
      setLoading(false)
    } catch (error) {
      console.error("Error fetching products:", error)
      // Fallback to demo data if fetch fails
      loadDemoData()
    }
  }

  const loadDemoData = () => {
    const demoProducts = [
      {
        Product_ID: "SKN001",
        Product_Name: "Vitamin C Glow Serum",
        Category: "Skincare",
        Price: "1,450৳",
        Image_URL: "/vitamin-c-serum.png",
        Short_Desc: "Brightens skin & reduces dark spots",
        Full_Details:
          "Premium Vitamin C serum with hyaluronic acid. Brightens complexion, reduces dark spots, and provides anti-aging benefits.",
        Status: "Available",
      },
      {
        Product_ID: "SKN002",
        Product_Name: "Hydrating Face Cream",
        Category: "Skincare",
        Price: "1,250৳",
        Image_URL: "/luxury-face-cream.jpg",
        Short_Desc: "24-hour moisture lock formula",
        Full_Details: "Deep hydrating face cream with natural ingredients. Provides 24-hour moisture.",
        Status: "Available",
      },
      {
        Product_ID: "HAIR001",
        Product_Name: "Argan Oil Hair Serum",
        Category: "Hair Care",
        Price: "950৳",
        Image_URL: "/argan-oil-hair-serum.jpg",
        Short_Desc: "Silky smooth, frizz-free hair",
        Full_Details: "100% pure Argan oil hair serum. Controls frizz and adds shine.",
        Status: "Available",
      },
      {
        Product_ID: "HAIR002",
        Product_Name: "Keratin Hair Mask",
        Category: "Hair Care",
        Price: "1,150৳",
        Image_URL: "/keratin-hair-mask.jpg",
        Short_Desc: "Repairs damaged hair instantly",
        Full_Details: "Professional keratin treatment mask. Repairs damaged hair.",
        Status: "Available",
      },
      {
        Product_ID: "WELL001",
        Product_Name: "Collagen Gummies",
        Category: "Wellness",
        Price: "1,650৳",
        Image_URL: "/collagen-gummies.jpg",
        Short_Desc: "Boost skin elasticity & hair growth",
        Full_Details: "Delicious collagen gummies with biotin. Supports skin elasticity.",
        Status: "Available",
      },
      {
        Product_ID: "WELL002",
        Product_Name: "Green Tea Detox",
        Category: "Wellness",
        Price: "850৳",
        Image_URL: "/green-tea-detox.jpg",
        Short_Desc: "Natural body cleanse & energy",
        Full_Details: "Organic green tea blend for natural detoxification.",
        Status: "Available",
      },
      {
        Product_ID: "ORG001",
        Product_Name: "Organic Face Wash",
        Category: "Organic",
        Price: "750৳",
        Image_URL: "/organic-face-wash.jpg",
        Short_Desc: "100% natural, chemical-free",
        Full_Details: "Gentle organic face wash with aloe vera and tea tree oil.",
        Status: "Available",
      },
      {
        Product_ID: "ORG002",
        Product_Name: "Rose Water Toner",
        Category: "Organic",
        Price: "650৳",
        Image_URL: "/rose-water-toner.jpg",
        Short_Desc: "Pure rose water for glowing skin",
        Full_Details: "100% pure organic rose water. Balances pH.",
        Status: "Available",
      },
    ]

    setProducts(demoProducts)
    setLoading(false)
  }

  return (
    <section id="shop" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Premium Collection</h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            100% authentic products, carefully curated for your beauty and wellness needs
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {[...Array(8)].map((_, i) => (
              <div key={i} className="animate-pulse">
                <div className="bg-gray-200 aspect-square rounded-2xl mb-3"></div>
                <div className="h-4 bg-gray-200 rounded mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {products.map((product) => (
              <ProductCard key={product.Product_ID} product={product} />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
