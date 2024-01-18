import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
// pages
import Home from './pages/Home'
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";
import { AnimatePresence } from 'framer-motion'
import { ShopContextProvider } from "./context/shopContext";
import Checkout from "./pages/Checkout";
import Register from "./pages/Register";
import Login from "./pages/Login";




const App = () => {
  return (
      < div >
      <ShopContextProvider>
        <AnimatePresence wait>
          <Router >
            <Routes >
              <Route path='/' element={<Home />} />
              <Route path="/cart" element={<Cart />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />

              <Route path="/singleProduct/:id" element={<SingleProduct />} />
            </Routes>
          </Router>
        </AnimatePresence>
      </ShopContextProvider>

    </ div>
  )
}

export default App
