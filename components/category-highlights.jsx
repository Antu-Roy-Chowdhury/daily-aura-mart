"use client"

import { Sparkles, Droplets, Heart, Leaf } from "lucide-react"

export default function CategoryHighlights() {
  const categories = [
    { name: "Skincare", icon: Sparkles, color: "#ff7b23" },
    { name: "Hair Care", icon: Droplets, color: "#04b706" },
    { name: "Wellness", icon: Heart, color: "#ff7b23" },
    { name: "Organic", icon: Leaf, color: "#04b706" },
  ]

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="overflow-x-auto">
          <div className="flex gap-6 pb-4 md:justify-center">
            {categories.map((category) => {
              const Icon = category.icon
              return (
                <a
                  key={category.name}
                  href="#shop"
                  className="flex-shrink-0 flex flex-col items-center gap-3 p-6 bg-gray-50 rounded-2xl hover:shadow-lg transition-all min-w-[140px] hover:bg-gradient-to-br hover:from-orange-50 hover:to-pink-50"
                >
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center"
                    style={{ backgroundColor: `${category.color}15` }}
                  >
                    <Icon className="w-8 h-8" style={{ color: category.color }} />
                  </div>
                  <span className="font-semibold text-gray-900">{category.name}</span>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
