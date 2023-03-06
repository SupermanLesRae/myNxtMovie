import Movie from "./movie"
import TV from "./tv"

export default async function Home() {

  const movie_data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const movie_res = await movie_data.json()

  const tv_data = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`)
  const tv_res = await tv_data.json()
  
  return (
    <main>

    

      <div className="my-20">

        <h1 className="text-4xl underline mb-10 font-roboto font-bold">NXT Popular TV</h1>
        <div className="grid gap-8 grid-cols-fluid">
          
            {tv_res.results.map((tv) => {
              return <TV key={tv.id} id={tv.id} title={tv.name} poster_path={tv.poster_path} backdrop_path={tv.backdrop_path} first_air_date={tv.first_air_date}></TV>
            })}  
          
        </div> 

      </div>

    
         
    </main>
  )
}
