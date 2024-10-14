import ButtonHome from "./ButtonHome"

const Hero = () => {

  const global__hero = 'text-white flex flex-col justify-center items-center bg-black-100 px-[6.4vw] pt-[28.8vw] pb-[29.87vw]'
  const global__subtitle = 'text-14-sm tracking-[0.625rem] opacity-[49.64%]'
  const global__title = 'text-36-sm font-bold leading-[110%] tracking-[0.080625rem]'
  const global__description = 'text-15-sm font-medium leading-[160%] opacity-[75%]'

  const utils__uppercase = 'uppercase'
  const utils__text__center = 'text-center'

  return (
    <>
      <article className={`hero flow__hero ${global__hero}`}>
        <div className="container_hero flow__hero__description">
          <div className="container__title flow__hero__title">
            <p className={`subtitle ${global__subtitle} ${utils__uppercase} ${utils__text__center}`}>
              New products
            </p>
            <h1 className={`title ${global__title} ${utils__uppercase} ${utils__text__center}`}>
              XX99 Mark II Headphones
            </h1>
          </div>
          <p className={`description ${global__description} ${utils__text__center}`}>
            Experience natural, lifelike audio and exceptional build quality made for the passionate music enthusiast.
          </p>
        </div>
        <ButtonHome />
      </article>
    </>
  )
}

export default Hero
