export default function HeroSection() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-pink-50 to-orange-50 py-20 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Pure Beauty. <br />
              <span className="text-[#ff7b23]">Honest Wellness.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl">
              Discover premium beauty and organic wellness products. 100% authentic, delivered to your doorstep across
              Bangladesh.
            </p>
            <a
              href="#shop"
              className="inline-block bg-[#ff7b23] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#e66d1f] transition-all hover:shadow-lg"
            >
              Shop Now
            </a>
          </div>

          {/* Hero Image */}
          <div className="relative">
            <img
              src="/premium-beauty-products-on-elegant-display.jpg"
              alt="Premium Beauty Products"
              className="w-full h-auto rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
