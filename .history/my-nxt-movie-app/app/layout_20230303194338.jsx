import "./globals.css"

import { Roboto } from "next/font/google"
import Link from "next/link"
import { FaHome } from 'react-icons/fa';

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto"
})

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="font-roboto mx-32 my-12 text-white bg-black">
        
        <div className="absolute z-30 top-0 left-0 m-4">
          <Link href="/"> <FaHome /> </Link>
        </div>
        
        {children}
       
        
        </body>
    </html>
  )
}


