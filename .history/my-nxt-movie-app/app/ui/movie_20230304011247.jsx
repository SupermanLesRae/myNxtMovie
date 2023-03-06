import Link from "next/link"
import Image from "next/image"
import { Suspense } from "react";

export default function Movie({id, title, poster_path, backdrop_path, release_date}) {
    const imgPath = "https://image.tmdb.org/t/p/original";
    return (
        <div>       
            <Suspense fallback={<p>Loading movies...</p>}>  
                             
                <Link href={`/movie/${id}`}>                   
                        <div className="inline-block overflow-hidden rounded-lg shadow-lg">
                            <Image className="hover:scale-105 transition-all duration-500" width={800} height={800} src={imgPath+poster_path} priority></Image>
                        </div>                                      
                </Link>
                <div className="mt-4 px-2">
                    <h1 className="truncate ">{title}</h1>
                    <h2>{release_date}</h2>
                </div>

            </Suspense>         
        </div>
    )
}
