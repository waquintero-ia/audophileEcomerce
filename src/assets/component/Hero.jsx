import ButtonHome from "./ButtonHome"

const Hero = () => {

  const global__hero = 'text-white flex flex-col justify-center items-center bg-black-100 px-[6.4vw] pt-[28.8vw] pb-[29.87vw]'
  const global__hero__md = 'md:px-0 md:pt-[16.41vw] md:pb-[21.75vw]'
  const global__hero__xl = 'xl:justify-start xl:items-start xl:px-[11.46vw] xl:pt-[8.89vw] xl:pb-[10.98vw]'
  const global__container__hero = 'flex flex-col justify-center items-center'
  const global__container__hero__md = 'md:w-[45.44vw]'
  const global__container__hero__xl = 'xl:w-[27.5vw]'
  const global__subtitle = 'text-14-sm tracking-[0.625rem] opacity-[49.64%]'
  const global__subtitle__md = 'md:text-14-md'
  const global__subtitle_xl = 'xl:text-14-xl'
  const global__title = 'text-36-sm font-bold leading-[110%] tracking-[0.080625rem]'
  const global__title__md = 'md:text-56-md md:leading-[100%] tracking-[0.125rem]'
  const global__title_xl = 'xl:text-56-xl xl:leading-[105%]'
  const global__description = 'text-15-sm font-medium leading-[160%] opacity-[75%]'
  const global__description__md = 'md:text-15-md md:leading-[170%]'
  const global__description_xl = 'xl:text-15-xl xl:leading-[154%]'

  const utils__uppercase = 'uppercase'
  const utils__text__center = 'text-center'
  const utils__text_left__xl = 'xl:text-left'

  return (
    <>
      <article className={`hero flow__hero ${global__hero} ${global__hero__md} ${global__hero__xl}`}>
        <div className={`container_hero flow__hero__description ${global__container__hero} ${global__container__hero__md} ${global__container__hero__xl}`}>
          <div className="container__title flow__hero__title">
            <p className={`subtitle ${global__subtitle} ${global__subtitle__md} ${global__subtitle_xl} ${utils__uppercase} ${utils__text__center} ${utils__text_left__xl}`}>
              New products
            </p>
            <h1 className={`title ${global__title} ${global__title__md} ${global__title_xl} ${utils__uppercase} ${utils__text__center} ${utils__text_left__xl}`}>
              XX99 Mark II Headphones
            </h1>
          </div>
          <p className={`description ${global__description} ${global__description__md} ${global__description_xl} ${utils__text__center} ${utils__text_left__xl}`}>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
        </div>
        <ButtonHome />
      </article>
    </>
  )
}

export default Hero
