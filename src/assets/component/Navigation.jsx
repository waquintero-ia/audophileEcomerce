import hamburguer from '../images/shared/tablet/icon-hamburger.svg'
import logo from '../images/shared/desktop/logo.svg'
import cart from '../images/shared/desktop/icon-cart.svg'
import { Link } from 'react-router-dom'

const global__nav = 'px-[6.4vw] py-[8.54vw]'
const global__nav__ul = 'flex items-center'
const global__nav__li = 'm-auto'

const global__nav__md = 'md:px-[5.20vw] md:py-[4.16vw] '
const global__nav__li__md = 'md:ml-[42px] md:mr-auto'

const global__nav__lg = 'lg:pt-[2.23vw] lg:pb-[2.5vw] lg:px-0 lg:mx-auto lg:w-[77.09vw]'
const global__nav__li__lg = 'lg:m-auto'

const Navigation = () => {
  return (
    <>
      <nav className={`${global__nav} ${global__nav__md} ${global__nav__lg}`}>
        <ul className={`${global__nav__ul}`}>
          <li>
            <img src={hamburguer} alt="hamburguer" />
          </li>
          <li className={`${global__nav__li} ${global__nav__li__md} ${global__nav__li__lg}`}>
            <Link to={'/'}>
              <img src={logo} alt="logo" />
            </Link>
          </li>
          <li>
            <img src={cart} alt="cart" />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
