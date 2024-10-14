import cart from '../images/shared/desktop/icon-cart.svg'

const global__cart = 'w-[6.14vw]'
const global__cart__md = 'md:w-[3vw]'
const global__cart__xl = 'xl:w-[1.6vw]'

const Cart = () => {
  return (
    <>
      <img className={`${global__cart} ${global__cart__md} ${global__cart__xl}`} src={cart} alt="cart" loading='lazy' decoding='async' />
    </>
  )
}

export default Cart
