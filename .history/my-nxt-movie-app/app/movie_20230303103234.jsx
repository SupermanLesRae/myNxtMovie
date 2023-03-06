import Link from "next/link"
import Image from "next/image"

export default function Movie({title, img}) {
  return (
    <div>       
        <div>
            <h1>{title}</h1>
            <Link href={`/asf`}>
                <Image src={img}></Image>
            </Link>
        </div>        
    </div>
  )
}
