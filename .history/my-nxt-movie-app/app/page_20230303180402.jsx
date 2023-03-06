import Movie from "./movie"

export default async function Home() {

  const movie_data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const movie_res = await movie_data.json()

  const tv_data = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`)
  const tv_res = await tv_data.json()
  
  return (
    <main>

      <div className="my-20">

        <h1 className="text-4xl underline mb-10 font-roboto font-bold">NXT Popular Movies</h1>
        <div className="grid gap-8 grid-cols-fluid">
          
            {movie_res.results.map((movie) => {
              return <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} backdrop_path={movie.backdrop_path} release_date={movie.release_date}></Movie>
            })}  
          
        </div> 

      </div>

      <div className="my-20">

        <h1 className="text-4xl underline mb-10 font-roboto font-bold">NXT Popular TV</h1>
        <div className="grid gap-8 grid-cols-fluid">
          
            {tv_res.results.map((tv) => {
              return <Movie key={tv.id} id={tv.id} title={tv.name} poster_path={tv.poster_path} backdrop_path={tv.backdrop_path} release_date={tv.first_air_date}></Movie>
            })}  
          
        </div> 

      </div>

    
         
    </main>
  )
}
