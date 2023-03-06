import Image from "next/image";

export default async function MovieDetail({params}) {

    //this come from url param
    const { tv } = params;

    const imgPath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/tv/${tv}?api_key=${process.env.API_KEY}`)
    const res = await data.json() 

    return (
        <div className="p-0 m-0">          
              <div className="overflow-hidden absolute top-0 left-0 h-full w-full">
                <Image width={2000} height={2000} className="w-full" src={imgPath+res.backdrop_path} priority />
            </div>
            
            <div className="relative m-10 top-0 left-0 bg-opacity-90 p-4 inline-block rounded-lg w-full max-w-[300px] bg-white shadow-lg">
                <Image width={400} height={400} className="w-full mb-2 rounded" src={imgPath+res.poster_path} priority />
                <div className="px-4 text-black">
                    <h2 className="text-2xl">{res.name}</h2>
                    <h2 className="text-lg">{res.first_air_date}</h2>
                    <h2 className="text-sm">{res.overview}</h2>                    
                </div>                
            </div>  
        </div>
    )
}

//ment to cache all ref id's
export async function getStaticProps() {
    const data = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()

    console.log(res)

    return res.results.map((tv) => {
        tv: String(tv.id)
    })
} 