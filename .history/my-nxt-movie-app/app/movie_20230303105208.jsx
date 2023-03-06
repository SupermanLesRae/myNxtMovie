import Link from "next/link"
import Image from "next/image"

export default function Movie({id, title, poster_path, backdrop_path, release_date}) {
    const imgPath = "https://image.tmdb.org/t/p/original";
    return (
        <div>       
            <div>
                <h1>{title}</h1>
                <h2>{release_date}</h2>
                <Link href={`/asf`}>
                    <Image width={800} height={800} src={imgPath+poster_path}></Image>
                </Link>
            </div>        
        </div>
    )
}
