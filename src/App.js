import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Home from './pages/Home'
import WishList from "./pages/WishList";
import Cart from "./pages/Cart";


import { ShopContextProvider } from "./context/shopContext";



const App = () => {
  return (
    <div>
      <ShopContextProvider>
        
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/wishlist" element={<WishList />} />
          </Routes>
        </Router>
      </ShopContextProvider>

    </div>
  )
}

export default App
