import CategoriesCard from "./CategoriesCard"
import product from "../data/product.json"

const global__ul = 'px-[6.4vw] pt-[24.54vw] pb-[32vw]'
const global__ul__md = 'md:px-[5.21vw] md:pt-[19.27vw] md:flex'


const Categories = () => {
  return (
    <>
      <ul className={`category__list flow__category__list ${global__ul} ${global__ul__md}`}>
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
