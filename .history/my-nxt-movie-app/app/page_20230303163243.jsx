import Movie from "./movie"

export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()
  
  return (
    <main>
      <h1 className="text-4xl underline mb-10 font-roboto font-bold">NXT Movies</h1>
      <div className="grid gap-8 grid-cols-fluid">
        
          {res.results.map((movie) => {
            return <div className="inline-block overflow-hidden rounded">
              <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} backdrop_path={movie.backdrop_path} release_date={movie.release_date}></Movie>
            </div>
          })}  
        
      </div>       
    </main>
  )
}
