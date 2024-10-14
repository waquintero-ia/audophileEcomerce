import hamburguer from '../images/shared/tablet/icon-hamburger.svg'

const global__hamburger = 'w-[4.27vw]'
const global__hamburger__md = 'md:w-[2.09vw]'

const Hamburger = () => {
  return (
    <>
      <img className={`${global__hamburger} ${global__hamburger__md}`} src={hamburguer} alt="hamburguer" loading='lazy' decoding='async' />
    </>
  )
}

export default Hamburger
