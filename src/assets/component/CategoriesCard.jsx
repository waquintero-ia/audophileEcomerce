import PropTypes from "prop-types"
import arrow from '../images/shared/desktop/icon-arrow-right.svg'

const CategoriesCard = ({ imageCategory, altCategory, category }) => {
  
  const global__container__category = 'flex flex-col justify-center items-center bg-white-100 min-h-[44vw] rounded-[8px]'
  const global__image__category = 'w-[40vw] mt-[-18.4vw]'
  const global__container__category__description = 'container__category__description flow__category__description flex flex-col justify-center items-center'
  const global__title = 'uppercase text-15-sm tracking-[0.066875rem] font-bold'
  const global__button = 'flex justify-center items-center'
  const global__button__span = 'uppercase text-13-sm font-bold opacity-50 tracking-[0.0625rem]'
  const global__image__button = 'w-[1.34vw] h-[2.67vw]'
  const exception__arrow__right = 'arrow__right'
  
  return (
    <>
      <article className={`container__category ${global__container__category}`}>
        <img className={`${global__image__category}`} src={imageCategory} alt={altCategory} />
        <div className={`container__category__description flow__category__description ${global__container__category__description}`}>
          <h2 className={`${global__title}`}>
            {category}
          </h2>
          <button type="button" className={`${global__button}`}>
            <span className={`${global__button__span}`} data-type={`${exception__arrow__right}`}>
              shop
            </span>
            <img className={`${global__image__button}`} src={arrow} alt="arrow right" loading='lazy' decoding='async' />
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
