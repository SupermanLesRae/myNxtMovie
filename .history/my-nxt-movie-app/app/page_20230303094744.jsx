import Image from 'next/image'

export default function Home() {
  return (
    <main>
      <div>
        <Image src="/thirteen.svg" alt="13" width={40} height={31} priority />
      </div>         
    </main>
  )
}
