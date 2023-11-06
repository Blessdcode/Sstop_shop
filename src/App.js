import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// Pages

import Home from './pages/Home'
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import SingleProduct from "./pages/SingleProduct";
import Register from "./pages/Register";




const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/singleProduct" element={<SingleProduct />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
