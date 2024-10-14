import CategoriesCard from "./CategoriesCard"
import product from "../data/product.json"

const global__ul = 'px-[6.4vw] pt-[24.54vw] pb-[32vw]'

const Categories = () => {
  return (
    <>
      <ul className={`category__list flow__category__list ${global__ul}`}>
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
