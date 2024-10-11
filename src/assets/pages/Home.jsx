import Navigation from '../component/Navigation'

const global__header = 'bg-black-100'

export default function Home() {
  return (
    <>
      <header className={global__header}>
        <Navigation />
      </header>
    </>
  )
}
