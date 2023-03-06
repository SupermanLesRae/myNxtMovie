export default function Movie({title}) {
  
  return (
    <div>       
        <div>
            <h1>{title}</h1>
            <Link href={`/asf`}>
                <Image></Image>
            </Link>
        </div>        
    </div>
  )
}
