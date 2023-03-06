export default async function MovieDetail({params}) {

    //this come from url param
    const { movie } = params;

    const imgPath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`)
    const res = await data.json()

    console.log(res);

    return (
        <div>
            <div>
                <h2>{res.title}</h2>
            </div>
        </div>
    )
}