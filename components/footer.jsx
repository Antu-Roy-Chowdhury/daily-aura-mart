import { MessageCircle, Facebook, Instagram, Youtube } from "lucide-react"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <img src="/favaura.png" alt="Daily AuraMart" className="h-10 w-auto" />
              <h3 className="text-2xl font-bold text-[#ff7b23]">
  <span className="text-[#04b706]">Daily</span> <span className="text-[#ff7b23]">AuraMart</span></h3>
            </div>
            <p className="text-gray-400 mb-4">Pure Beauty. Honest Wellness.</p>
            <p className="text-gray-400">Your trusted beauty & wellness partner in Bangladesh</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <Link href="/" className="hover:text-[#ff7b23] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#shop" className="hover:text-[#ff7b23] transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link href="/track-order" className="hover:text-[#ff7b23] transition-colors">
                  Track Your Order
                </Link>
              </li>
              <li>
                <Link href="/#reviews" className="hover:text-[#ff7b23] transition-colors">
                  Reviews
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-[#ff7b23] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-[#ff7b23] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">Contact Us</h4>
            <a
              href="https://wa.me/+8801518907652"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-[#04b706] hover:text-[#039605] transition-colors mb-4"
            >
              <MessageCircle className="w-5 h-5" />
              +880 1518907652
            </a>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=100067591227201&rdid=ovy6EoXeZj7u1nKX&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1H9aWcDwnG%2F#" target="_blank" className="text-gray-400 hover:text-[#ff7b23] transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff7b23] transition-colors">
                <Instagram className="w-6 h-6" />
              </a>
              <a href="#" className="text-gray-400 hover:text-[#ff7b23] transition-colors">
                <Youtube className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 <a href="#">
  <span className="text-[#04b706]"> Daily</span> <span className="text-[#ff7b23]">AuraMart</span></a>. All rights reserved.</p>
  <p className="mt-0.5 text-xs">Developed by <a href="https://anturoychowdhury.vercel.app/" target="_blank" className="text-[#04b706] hover:text-[#ff7b23] transition-colors">Antu Roy Chowdhury</a></p>
        </div>
      </div>
    </footer>
  )
}
