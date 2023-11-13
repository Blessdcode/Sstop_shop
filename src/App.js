import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// pages
import Home from './pages/Home'
import Cart from "./pages/Cart";



const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </Router>

    </div>
  )
}

export default App
