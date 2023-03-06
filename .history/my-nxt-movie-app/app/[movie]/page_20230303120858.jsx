import Image from "next/image";

export async function generateStaticParams() {
    const data = await fetch(
        `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`
    )
    const res = await data.json()
    return res.result.map((movie) => {
        movie: toString(movie.id)
    })

}

export default async function MovieDetail({params}) {

    //this come from url param
    const { movie } = params;

    const imgPath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`, {next: {revalidate: 60}})
    const res = await data.json()

    console.log(res);

    return (
        <div className="p-0 m-0">
            <div className="overflow-hidden absolute top-0 left-0 h-full w-full">
                <Image width={2000} height={2000} className="w-full" src={imgPath+res.backdrop_path} priority />
            </div>
            
            <div className="relative m-10 top-0 left-0 bg-opacity-90 p-4 inline-block rounded-lg w-full max-w-[300px] bg-white shadow-lg">
                <Image width={400} height={400} className="w-full mb-2 rounded" src={imgPath+res.poster_path} priority />
                <div className="px-4 text-black">
                    <h2 className="text-2xl">{res.title}</h2>
                    <h2 className="text-lg">{res.release_date}</h2>
                    <h2 className="text-sm">Runtime: {res.runtime} minuites</h2>
                    <h2 className={'text-sm  inline-block my-4 py-2 px-4 rounded text-white ' + (res.status === "Released" ? "bg-green-600" : "bg-red-600")}>{res.status}</h2>
                </div>                
            </div>
        </div>
    )
}