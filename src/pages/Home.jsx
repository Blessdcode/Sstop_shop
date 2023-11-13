import React from 'react'
import Navbar from '../components/Navbar'
import Announcement from '../components/Announcement'
import Slider from '../components/Slider'
import Categories from '../components/Categories'
import Shop from "../pages/Shop";
// import Product from '../components/Product'
import Newsletter from '../components/Newsletter'
import FeaturedProduct from '../components/FeaturedProduct'
import Footer from '../components/Footer'
// import SingleProduct from '../pages/SingleProduct'
// import Login from '../pages/Login'
// import Register from '../pages/Register'
// import Cart from './Cart'




const Home = () => {
    return (
        <div>

            <Announcement />
            <Navbar />
            <Slider />
            <Categories />
            <Shop />
            <Newsletter/>
            <FeaturedProduct/>
            <Footer/>

        </div>
    )
}

export default Home
