import { Roboto } from "next/font/google"

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-roboto mx-10 my-10">{children}</body>
    </html>
  )
}


