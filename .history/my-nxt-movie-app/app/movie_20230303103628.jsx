import Link from "next/link"
import Image from "next/image"

export default function Movie({id, title, poster_path, backdrop_path, release_date}) {
  return (
    <div>       
        <div>
            <h1>{title}</h1>
            <Link href={`/asf`}>
                <Image src={poster_path}></Image>
            </Link>
        </div>        
    </div>
  )
}
