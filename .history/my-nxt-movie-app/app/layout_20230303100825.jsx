import './globals.css'

import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["300", "600", "700"],
  subsets: ["latin"],
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
