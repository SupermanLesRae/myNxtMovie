export default async function MovieDetail({params}) {
    const imgPath = "https://image.tmdb.org/t/p/original";
    const data = await fetch(`https://api.themoviedb.org/3/${movie}/popular?api_key=${process.env.API_KEY}`)
    const res = await data.json()
    return (
        <div>
            <h1>Movie Detail</h1>
        </div>
    )
}