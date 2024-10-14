const ButtonHome = () => {

  const global__button = 'uppercase bg-orange-100 w-[42.67vw] min-h-[12.8vw] text-13-sm font-bold tracking-[0.0625rem]'
  const global__button__md = 'md:text-13-md md:w-[20.84vw] md:min-h-[6.25vw]'
  const global__button__xl = 'xl:text-13-xl xl:w-[11.12vw] xl:min-h-[3.34vw]'

  return (
    <>
      <button type="button" className={`${global__button} ${global__button__md} ${global__button__xl}`}>
        See product
      </button>
    </>
  )
}

export default ButtonHome
