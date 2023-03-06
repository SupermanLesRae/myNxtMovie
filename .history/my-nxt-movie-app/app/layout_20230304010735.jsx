import "./globals.css"

import { Roboto } from "next/font/google"
import Link from "next/link"
import { FaHome } from 'react-icons/fa';

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
  variable: "--font-roboto"
})

export async function getTv() {
  const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`);
  return res.json();
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className="font-roboto mx-32 my-12 text-white bg-black">
        
        <div className="absolute z-30 top-0 left-0 m-10">
          <Link href="/"> <FaHome size="1em"/> </Link>
        </div>
        
        {children}
       
        
        </body>
    </html>
  )
}

export async function generateStaticParams({ params: { tv }}) {
  const tv_items = await getTv();

  return tv_items.results.map((tv) => ({
    tv: tv.id,
  }));
}


