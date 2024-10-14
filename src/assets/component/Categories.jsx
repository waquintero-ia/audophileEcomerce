import CategoriesCard from "./CategoriesCard"
import product from "../data/product.json"

const global__ul = 'px-[6.4vw] pt-[24.54vw] pb-[32vw]'
const global__ul__md = 'md:px-[5.21vw] md:pt-[19.27vw] md:pb-[12.5vw] md:flex'
const global__ul__xl = 'xl:px-[11.45vw] xl:pt-[13.89vw] xl:pb-[11.67vw]'

const Categories = () => {
  return (
    <>
      <ul className={`category__list flow__category__list ${global__ul} ${global__ul__md} ${global__ul__xl}`}>
      {
        product.map(card => (
          <li key={card.category}>
            <CategoriesCard 
              imageCategory={card.imageCategory}
              altCategory={card.altCategory}
              category={card.category}
            />
          </li>
        ))
      }
      </ul>
      
    </>
  )
}

export default Categories
