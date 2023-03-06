import Image from "next/image";

export default async function MovieDetail({params}) {

    //this come from url param
    const { movie } = params;

    const imgPath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json()

    console.log(res);

    return (
        <div className="p-0 m-0">
            <div className="overflow-hidden absolute top-0 left-0 h-full w-full">
                <Image width={1000} height={1000} className="w-full" src={imgPath+res.backdrop_path} />
            </div>
            
            <div className="relative m-10 top-0 left-0 bg-white bg-opacity-70 px-8 py-4 inline-block rounded max-w-[300px]">
                <Image width={400} height={400} className="w-full" src={imgPath+res.poster_path} />
                <h2 className="text-2xl">{res.title}</h2>
                <h2 className="text-lg">{res.release_date}</h2>
                <h2 className="text-sm">Runtime: {res.runtime} minuites</h2>
                <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded text-white">{res.status}</h2>
                
            </div>
        </div>
    )
}