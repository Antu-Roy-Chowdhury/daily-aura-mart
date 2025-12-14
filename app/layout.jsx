import { Geist } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const geist = Geist({ subsets: ["latin"] })

export const metadata = {
  title: "Daily AuraMart - Pure Beauty. Honest Wellness.",
  description: "Premium beauty, wellness & organic products in Bangladesh. 100% original products with fast delivery.",
  generator: "v0.app",
  icons: {
    icon: "/favaura.png",
    apple: "/favaura.png",
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geist.className} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
