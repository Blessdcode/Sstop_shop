import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Home from './pages/Home'
import Cart from "./pages/Cart";
import SingleProduct from "./pages/SingleProduct";


import { ShopContextProvider } from "./context/shopContext";



const App = () => {
  return (
    <div>
      <ShopContextProvider>
        
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/singleProduct/:id" element={<SingleProduct />} />
          </Routes>
        </Router>
      </ShopContextProvider>

    </div>
  )
}

export default App
