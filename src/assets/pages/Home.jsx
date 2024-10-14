import Hero from '../component/Hero'
import Navigation from '../component/Navigation'

const utils__bg = 'bg-black-100'

export default function Home() {
  return (
    <>
      <header className={utils__bg}>
        <Navigation />
      </header>
      <main>
        <Hero />
      </main>
    </>
  )
}
