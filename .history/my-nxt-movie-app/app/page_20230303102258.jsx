export default async function Home() {

  const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${process.env.API_KEY}`)
  const res = await data.json()

  console.log(res)
  
  return (
    <main>
      <div className="text-xl font-thin">
        This is the home page
      </div>         
    </main>
  )
}
