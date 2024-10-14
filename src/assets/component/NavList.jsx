const NavList = () => {

  const global__nav__list = 'text-13 text-bold tracking-[0.125rem] leading-[52%] flex justify-between uppercase text-white w-[29.80vw]'

  return (
    <>
      <ul className={`${global__nav__list}`}>
        <li>home</li>
        <li>headphones</li>
        <li>speakers</li>
        <li>earphones</li>
      </ul>
    </>
  )
}

export default NavList
