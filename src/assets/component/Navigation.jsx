import NavigationCart from './NavigationCart'
import NavigationHamburger from './NavigationHamburger'
import NavigationLogo from './NavigationLogo'
import NavigationList from './NaviagationList'

const global__nav = 'px-[6.4vw] py-[8.54vw]'
const global__nav__ul = 'flex items-center'
const global__nav__li = 'm-auto'

const global__nav__md = 'md:px-[5.20vw] md:py-[4.16vw] '
const global__nav__li__md = 'md:ml-[42px] md:mr-auto'

const global__nav__xl = 'xl:pt-[2.23vw] xl:pb-[2.5vw] xl:px-0 xl:mx-auto xl:w-[77.09vw]'
const global__nav__li__xl = 'xl:ml-[13.69vw] mr-[22.02vw]'

const Navigation = () => {
  return (
    <>
      <nav className={`${global__nav} ${global__nav__md} ${global__nav__xl}`}>
        <ul className={`${global__nav__ul}`}>
          <li>
            <div className="xl:hidden">
              <NavigationHamburger />
            </div>
            <div className='hidden xl:block'>
              <NavigationLogo />
            </div>
            
          </li>
          <li className={`${global__nav__li} ${global__nav__li__md} ${global__nav__li__xl}`}>
            <div className='xl:hidden'>
              <NavigationLogo />
            </div>
            <div className='hidden xl:block'>
              <NavigationList />
            </div>
          </li>
          <li>
            <NavigationCart />
          </li>
        </ul>
      </nav>
    </>
  )
}

export default Navigation
