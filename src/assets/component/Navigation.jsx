import hamburguer from '../images/shared/tablet/icon-hamburger.svg'
import logo from '../images/shared/desktop/logo.svg'
import cart from '../images/shared/desktop/icon-cart.svg'
import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <>
      <nav className='bg-black-100 px-[6.4vw] py-[8.54vw]'>
        <ul className='flex justify-between items-center'>
          <li>
            <img src={hamburguer} alt="hamburguer" />
          </li>
          <li>
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
