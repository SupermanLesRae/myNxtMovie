import Link from "next/link"
import Image from "next/image"

export default function Movie({id, title, poster_path, backdrop_path, release_date}) {
    const imgPath = "https://image.tmdb.org/t/p/original";
    return (
        <div>       
            <div>                
                <Link href={`/${id}`}>
                    <Image className="shadow-lg rounded-lg hover:scale-105 transition-all duration-75" width={800} height={800} src={imgPath+poster_path}></Image>
                </Link>
                <div className="mt-4 px-2">
                    <h1 className="truncate ">{title}</h1>
                    <h2>{release_date}</h2>
                </div>
            </div>        
        </div>
    )
}
