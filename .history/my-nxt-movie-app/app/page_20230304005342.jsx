import Movie from "./ui/movie"
import TV from "./ui/tv"

async function getMovies() {
  const res = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`);
  return res.json();
}

async function getTv() {
  const res = await fetch(`https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}`);
  return res.json();
}

export default async function Home() {

  const movieData = getMovies();
  const tvData = getTv();

  const [movies, tv] = await Promise.all([movieData, tvData]);

  return (
    <main>

      <div className="my-24">

        <h1 className="text-4xl underline mb-10 font-roboto font-bold">NXT Popular Movies</h1>
        <div className="grid gap-8 grid-cols-fluid">
          
            {movies.results.map((movie) => {
              return <Movie key={movie.id} id={movie.id} title={movie.title} poster_path={movie.poster_path} backdrop_path={movie.backdrop_path} release_date={movie.release_date}></Movie>
            })}  
          
        </div> 

      </div>

      <div className="my-20">

        <h1 className="text-4xl underline mb-10 font-roboto font-bold">NXT Popular TV</h1>
        <div className="grid gap-8 grid-cols-fluid">
          
            {tv.results.map((tv) => {
              return <TV key={tv.id} id={tv.id} name={tv.name} poster_path={tv.poster_path} first_air_date={tv.first_air_date}></TV>
            })}  
          
        </div> 

      </div>

    
         
    </main>
  )
}
