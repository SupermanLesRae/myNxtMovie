import Link from "next/link"
import Image from "next/image"

export default function Movie({id, title, poster_path, backdrop_path, release_date}) {
    const imgPath = "https://image.tmdb.org/t/p/original";
    return (
        <div>       
            <div>
                <p className="text-lg">{title}</p>
                <p className="text-sm">{release_date}</p>
                <Link href={`/asf`}>
                    <Image width={800} height={800} src={imgPath+poster_path}></Image>
                </Link>
            </div>        
        </div>
    )
}
