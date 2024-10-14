import PropTypes from "prop-types"
import arrow from '../images/shared/desktop/icon-arrow-right.svg'

const CategoriesCard = ({ imageCategory, altCategory, category }) => {
  
  const global__container__category = 'flex flex-col justify-center items-center bg-white-100 min-h-[44vw] rounded-[8px]'
  const global__container__category__md = 'md:w-[29.04vw] md:min-h-[21.49vw]'
  const global__container__category__xl = 'xl:w-[24.31vw] xl:min-h-[14.17vw]'
  const global__image__category = 'w-[40vw] mt-[-18.4vw]'
  const global__image__category__md = 'md:w-[19.54vw] md:mt-[-8.85vw]'
  const global__image__category__xl = 'xl:w-[14.94vw] xl:mt-[-6.94vw]'
  const global__container__category__description = 'flex flex-col justify-center items-center'
  const global__title = 'uppercase text-15-sm tracking-[0.066875rem] font-bold'
  const global__title__md = 'md:text-15-md'
  const global__title__xl = 'xl:text-18-xl'
  const global__button = 'flex justify-center items-center'
  const global__button__span = 'uppercase text-13-sm font-bold opacity-50 tracking-[0.0625rem]'
  const global__button__span__md = 'md:text-13-md'
  const globla__button__span__xl = 'xl:text-13-xl'
  const global__image__button = 'w-[1.34vw] h-[2.67vw]'
  const global__image__button__md = 'md:w-[0.66vw] md:h-[1.31vw]'
  const global__image__button__xl = 'xl:w-[0.35vw] xl:h-[0.70vw]'
  const exception__arrow__right = 'arrow__right'
  
  return (
    <>
      <article className={`container__category ${global__container__category} ${global__container__category__md} ${global__container__category__xl}`}>
        <img className={`${global__image__category} ${global__image__category__md} ${global__image__category__xl}`} src={imageCategory} alt={altCategory} />
        <div className={`container__category__description flow__category__description ${global__container__category__description}`}>
          <h2 className={`${global__title} ${global__title__md} ${global__title__xl}`}>
            {category}
          </h2>
          <button type="button" className={`${global__button}`}>
            <span className={`${global__button__span} ${global__button__span__md} ${globla__button__span__xl}`} data-type={`${exception__arrow__right}`}>
              shop
            </span>
            <img className={`${global__image__button} ${global__image__button__md} ${global__image__button__xl}`} src={arrow} alt="arrow right" loading='lazy' decoding='async' />
          </button>
        </div>
      </article>
    </>
  )
}

CategoriesCard.propTypes = {
  imageCategory: PropTypes.string.isRequired,
  altCategory: PropTypes.string.isRequired,
  category: PropTypes.string.isRequired,
};

export default CategoriesCard
