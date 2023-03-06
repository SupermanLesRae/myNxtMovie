import "./../../globals.css"

import { Roboto } from "next/font/google"
import Link from "next/link"

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto"
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="">
        
        <div className="font-roboto mx-32 my-12 text-white bg-black">
          <div className="absolute top-0 left-0 z-30">
            <Link href={`/`}>Back</Link>
          </div>
          {children}
        </div>
      </body>
    </html>
  )
}


