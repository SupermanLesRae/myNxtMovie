export default function Home() {

  'https://api.themoviedb.org/3/movie/popular'
  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  return (
    <main>
      <div className="text-xl font-thin">
        This is the home page
      </div>         
    </main>
  )
}
