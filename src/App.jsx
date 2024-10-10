import './App.css'
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './assets/pages/Home'
import Category from './assets/pages/Category'
import ProductDetail from './assets/pages/ProductDetail'
import Cart from './assets/pages/Cart'
import Checkout from './assets/pages/Checkout'
import CheckoutModal from './assets/pages/CheckoutModal'
import Menu from './assets/pages/Menu.jsx'

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />} />
          <Route path="/product-detail" element={<ProductDetail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/checkout-modal" element={<CheckoutModal />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
