import Image from "next/image";

export default async function MovieDetail({params}) {

    //this come from url param
    const { movie } = params;

    const imgPath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json()

    console.log(res);

    return (
        <div>
            <Image width={1000} height={1000} className="w-full absolute top-0 left-0" src={imgPath+res.backdrop_path} />
            <div className="relative top-0 left-0 bg-white p-10 inline-block rounded-lg">
                <h2 className="text-2xl">{res.title}</h2>
                <h2 className="text-lg">{res.release_date}</h2>
                <h2 className="text-sm">Runtime: {res.runtime} minuites</h2>
                <h2 className="text-sm bg-green-600 inline-block my-2 py-2 px-4 rounded text-white">{res.status}</h2>
                
            </div>
        </div>
    )
}