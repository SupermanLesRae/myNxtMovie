import Link from "next/link"
import Image from "next/image"

export default function TV({id, name, poster_path, first_air_date}) {
    const imgPath = "https://image.tmdb.org/t/p/original";
    return (
        <div>       
            <div>   
                             
                <Link href={`/${id}`}>
                   
                        <div className="inline-block overflow-hidden rounded-lg shadow-lg">
                            <Image className="hover:scale-105 transition-all duration-500" width={800} height={800} src={imgPath+poster_path} priority></Image>
                        </div>                    
                 
                </Link>
                <div className="mt-4 px-2">
                    <h1 className="truncate ">{name} {id}</h1>
                    <h2>{first_air_date}</h2>
                </div>
            </div>        
        </div>
    )
}
