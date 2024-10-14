import logo from '../images/shared/desktop/logo.svg'
import { Link } from 'react-router-dom'

const global__logo = 'w-[38.14vw]'
const global__logo__md = 'md:w-[18.62vw]'
const global__logo__xl = 'xl:w-[9.94vw]'

const Logo = () => {
  return (
    <>
      <Link to={'/'}>
        <img className={`${global__logo} ${global__logo__md} ${global__logo__xl}`} src={logo} alt="logo" loading='lazy' decoding='async' />
      </Link>
    </>
  )
}

export default Logo