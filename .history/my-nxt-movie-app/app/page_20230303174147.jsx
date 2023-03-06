import Movie from "./movie"

export default async function Home() {

  const popular_data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const popular_res = await popular_data.json()

  const rated_data = await fetch(`https://api.themoviedb.org/3/movie/top_rated?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const rated_res = await rated_data.json()
  
  return (
    <main>

      <div className="my-20">

        <h1 className="text-4xl underline mb-10 font-roboto font-bold">NXT Popular Movies</h1>
        <div className="grid gap-8 grid-cols-fluid">
          
            {popular_res.results.map((movie) => {
              return <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} backdrop_path={movie.backdrop_path} release_date={movie.release_date}></Movie>
            })}  
          
        </div> 

      </div>

      <div className="my-20">

        <h1 className="text-4xl underline mb-10 font-roboto font-bold">NXT Top Rated Movies</h1>
        <div className="grid gap-8 grid-cols-fluid">
          
            {rated_res.results.map((movie) => {
              return <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} backdrop_path={movie.backdrop_path} release_date={movie.release_date}></Movie>
            })}  
          
        </div> 

      </div>

    
         
    </main>
  )
}
