const ButtonHome = () => {

  const global__button = 'uppercase bg-orange-100 w-[42.67vw] min-h-[12.8vw] text-13-sm font-bold tracking-[0.0625rem]'
  const global__button__md = 'md:text-13-md md:w-[20.84vw] min-h-[6.25vw]'

  return (
    <>
      <button type="button" className={`${global__button} ${global__button__md}`}>
        See product
      </button>
    </>
  )
}

export default ButtonHome
