"use client"

import { useRouter } from "next/navigation"

export default function ProductCard({ product }) {
  const router = useRouter()

  const handleOrderClick = () => {
    const params = new URLSearchParams({
      id: product.Product_ID,
      name: product.Product_Name,
      price: product.Price,
      image: product.Image_URL || "/placeholder.svg",
      details: product.Full_Details,
    })
    router.push(`/order?${params.toString()}`)
  }

  return (
    <div className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300">
      {/* Product Image */}
      <div className="relative aspect-square overflow-hidden">
        <img
          src={product.Image_URL || "/placeholder.svg"}
          alt={product.Product_Name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />
        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-xs font-semibold px-3 py-1 rounded-full">
            {product.Category}
          </span>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <h3 className="font-bold text-gray-900 mb-1 line-clamp-2 text-sm md:text-base">{product.Product_Name}</h3>
        <p className="text-xs md:text-sm text-gray-600 mb-3 line-clamp-2">{product.Short_Desc}</p>

        {/* Price */}
        <div className="flex items-center justify-between mb-3">
          <span className="text-lg md:text-xl font-bold text-[#ff7b23]">{product.Price}</span>
        </div>

        {/* Order Button */}
        <button
          onClick={handleOrderClick}
          className="w-full bg-[#ff7b23] text-white py-2 rounded-full font-semibold hover:bg-[#e66d1f] transition-colors text-sm md:text-base"
        >
          Order Now
        </button>
      </div>
    </div>
  )
}
